import * as http from "http";
import * as socketio from "socket.io";
import { RetroPlayer } from './entities/player';
import { RetroGlobalState } from './entities/global-state';
import { RetroMessage } from './entities/message';
import { RetroConfig, RetroRoomState } from './entities/room-state';
import { RandomUtils } from '../utils/random-utils';
import moment = require('moment');

interface RetroSocket extends socketio.Socket {
	player: RetroPlayer;
	room?: string;
}

type PlayerRole = 'player' | 'spectator'

interface JoinData {
	room: string;
	uid: string;
	name: string;
}

interface ConfigData {
	property: keyof RetroConfig;
	value: any;
}

export class Retro {
	private globalState = new RetroGlobalState();
	private retroSocket!: socketio.Server;

	constructor(private server: http.Server) {}

	start() {
		this.retroSocket = socketio(this.server, {
			pingInterval: 15000,
			path: "/retro",
		});

		this.retroSocket.on("connection", (socket: RetroSocket) => {
			console.log("new connection");
			socket.on("join", arg => this.onJoin(socket, arg));

			socket.on('config', arg => this.changeConfig(socket, arg));
			socket.on('view-mode', viewMode => this.changeViewMode(socket, viewMode));
			socket.on('message:save', message => this.saveMessage(socket, message));
			socket.on('message:show', message => this.showMessage(socket, message));
			socket.on('message:delete', messageUid => this.deleteMessage(socket, messageUid));
			socket.on('message:like', messageUid => this.likeMessage(socket, messageUid));

			socket.on("disconnect", () => this.disconnect(socket));
			socket.on("room:ping", () => {
				let player = socket.player;
				console.log(`Ping ${player?.name}`);
			});
			socket.on('state:set', state => this.importState(socket, state));
		});
	}

	private onJoin = (socket: RetroSocket, { room, uid, name }: JoinData) => {
		console.log(`User ${name}(${uid}) joining room ${room}`);
		if (socket.room) {
			socket.leave(room);
		}
		socket.join(room);
		socket.room = room;

		let player = new RetroPlayer(uid, name);
		socket.player = player;

		this.globalState.removePlayer(player);
		let roomState = this.globalState.getRoom(room);
		roomState.addPlayer(player);
		roomState.addLog(`${player.name} joined.`);

		this.refreshRoom(room, player);
	}

	private changeConfig(socket: RetroSocket, {property, value}: ConfigData): void {
		let room = socket.room;
		let player = socket.player;
		console.log(`${room}: config ${property} = ${value}`);
		if (room) {
			let roomState = this.globalState.getRoom(room);
			roomState.setConfig(property, value);
			roomState.addLog(`${player.name} changed config.`);
			this.refreshRoom(room, player);
		}
	}
	private changeViewMode(socket: RetroSocket, viewMode: boolean): void {
		let room = socket.room;
		let player = socket.player;
		console.log(`${room}: viewMode ${viewMode}`);
		if (room) {
			let roomState = this.globalState.getRoom(room);
			roomState.setViewMode(viewMode);
			if (!viewMode && Math.abs(moment(roomState.startDate).diff(moment(), 'hour')) >= 24) {
				roomState.startDate = moment().toISOString();
				roomState.sessionId = RandomUtils.generateUID();
			}
			roomState.addLog(`${player.name} changed to ${viewMode ? 'view' : 'read'} mode.`);
			this.refreshRoom(room, player);
		}
	}
	private saveMessage(socket: RetroSocket, message: RetroMessage): void {
		let room = socket.room;
		let player = socket.player;
		console.log(`${room}: save ${JSON.stringify(message)}`);
		if (room) {
			let roomState = this.globalState.getRoom(room);
			roomState.saveMessage(message);
			roomState.addLog(`${player.name} added new message.`);
			this.refreshRoom(room, player, message.uid);
		}
	}

	private showMessage(socket: RetroSocket, messageUid: string): void {
		let room = socket.room;
		let player = socket.player;
		console.log(`${room}: show ${messageUid}`);
		if (room) {
			let roomState = this.globalState.getRoom(room);
			roomState.showMessage(messageUid);
			roomState.addLog(`${player.name} revealed a message.`);
			this.refreshRoom(room, player, messageUid);
		}
	}

	private deleteMessage(socket: RetroSocket, messageUid: string): void {
		let room = socket.room;
		let player = socket.player;
		console.log(`${room}: delete ${messageUid}`);
		if (room) {
			let roomState = this.globalState.getRoom(room);
			roomState.deleteMessage(messageUid);
			roomState.addLog(`${player.name} deleted a message.`);
			this.refreshRoom(room, player);
		}
	}

	private likeMessage(socket: RetroSocket, messageUid: string): void {
		let room = socket.room;
		let player = socket.player;
		console.log(`${room}: like ${messageUid}`);
		if (room) {
			let roomState = this.globalState.getRoom(room);
			roomState.toggleLike(messageUid, player.uid);
			roomState.addLog(`${player.name} liked a message.`);
			this.refreshRoom(room, player, messageUid);
		}
	}

	private disconnect(socket: RetroSocket) {
		console.log(`disconnect: ${JSON.stringify(socket.player)}, room: ${socket.room}`);
		if (socket.room) {
			if (socket.player) {
				let roomState = this.globalState.getRoom(socket.room);
				roomState.addLog(`${socket.player.name} left.`);
			}
			socket.leave(socket.room);
		}
		if (socket.player) {
			this.globalState.removePlayer(socket.player);
			if (socket.room) {
				this.refreshRoom(socket.room);
				setTimeout(() => this.globalState.checkRoom(socket.room as string), 5000);
			}
		}
	}

	private importState(socket: RetroSocket, newState: RetroRoomState) {
		console.log(`import: ${JSON.stringify(socket.player)}, room: ${socket.room}`);
		let room = socket.room;
		if (room) {
			let roomState = this.globalState.getRoom(room);
			roomState.sessionId = newState.sessionId;
			roomState.startDate = newState.startDate;
			roomState.config = newState.config;
			roomState.viewMode = true;
			roomState.messages = newState.messages;
			roomState.messages.forEach(message => {
				message.uid = RandomUtils.generateUID();
				message.opened = true;
			});
			roomState.addLog(`${socket.player.name} imported saved retrospective.`);
			this.refreshRoom(room, socket.player);
		}

	}

	private async refreshRoom(room: string, lastPlayer?: RetroPlayer | null, lastMessageUid?: string) {
		let state = this.globalState.getRoom(room);
		if (lastPlayer)
			state.ensurePlayer(lastPlayer);
		state.lastPlayerUpdate = lastPlayer?.uid;
		state.lastMessageUpdate = lastMessageUid;
		console.log(`refresh: ${room}\n`);
		this.retroSocket.in(room).emit("refresh", state);
	}
}
