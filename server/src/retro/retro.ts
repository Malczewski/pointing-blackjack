import * as http from "http";
import * as socketio from "socket.io";
import { RetroPlayer } from './entities/player';
import { RetroGlobalState } from './entities/global-state';
import { RetroMessage } from './entities/message';
import { RetroConfig } from './entities/room-state';

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
			pingInterval: 5000,
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

		this.refreshRoom(room, player);
	}

	private changeConfig(socket: RetroSocket, {property, value}: ConfigData): void {
		let room = socket.room;
		let player = socket.player;
		console.log(`${room}: config ${property} = ${value}`);
		if (room) {
			let roomState = this.globalState.getRoom(room);
			roomState.setConfig(property, value);
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
			this.refreshRoom(room, player, messageUid);
		}
	}

	private disconnect(socket: RetroSocket) {
		console.log(`disconnect: ${JSON.stringify(socket.player)}, room: ${socket.room}`);
		if (socket.room) {
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
