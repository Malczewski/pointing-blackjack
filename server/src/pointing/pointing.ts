import * as http from "http";
import * as socketio from "socket.io";
import { PointingPlayer, Vote } from "./entities/player";
import { PointingGlobalState } from "./entities/global-state";

interface PointingSocket extends socketio.Socket {
	player: PointingPlayer;
	room?: string;
}

type PlayerRole = 'player' | 'spectator'

interface JoinData {
	room: string;
	uid: string;
	name: string;
	role: PlayerRole;
}

export class Pointing {
	private globalState = new PointingGlobalState();
	private pointingSocket!: socketio.Server;
	
	constructor(private server: http.Server) {}

	start() {
		this.pointingSocket = socketio(this.server, {
			pingInterval: 5000,
			path: "/pointing",
		});

		this.pointingSocket.on("connection", (socket: PointingSocket) => {
			console.log("new connection");
			socket.on("join", arg => this.onJoin(socket, arg));
		
			socket.on("reset", () => this.resetVotes(socket));
			socket.on("show", () => this.showVotes(socket));
			socket.on("vote", (vote: Vote) => this.vote(socket, vote));
			socket.on("role", (role: PlayerRole) => this.changeRole(socket, role));
		
			socket.on("disconnect", () => this.disconnect(socket));
		});
	}

	private onJoin = (socket: PointingSocket, { room, uid, name, role }: JoinData) => {
		console.log(`User ${name}(${uid}) joining room ${room}`);
		if (socket.room) {
			socket.leave(room);
		}
		socket.join(room);
		socket.room = room;

		let player = new PointingPlayer(uid, name);
		socket.player = player;

		this.globalState.removePlayer(player);
		let roomState = this.globalState.getRoom(room);
		/* if (roomState.isAllVoted() && roomState.players.length > 5) {
			player.vote = null;
		} */
		if (role === 'spectator')
			roomState.addSpectator(player);
		else roomState.addPlayer(player);
		roomState.addLog(`${player.name} joined.`);

		this.refreshRoom(room, player);
	}

	private resetVotes(socket: PointingSocket) {
		let room = socket.room;
		let player = socket.player;
		console.log(`reset: ${room}`);
		if (room) {
			let roomState = this.globalState.getRoom(room);
			roomState.clearVotes();
			roomState.addLog(`${player.name} cleared votes.`);
			this.refreshRoom(room, player);
		}
	}

	private showVotes(socket: PointingSocket) {
		let room = socket.room;
		let player = socket.player;
		console.log(`show: ${room}`);
		if (room) {
			let roomState = this.globalState.getRoom(room);
			roomState.showVotes();
			roomState.addLog(`${player.name} showed votes.`);
			this.refreshRoom(room, player);
		}
	}

	private vote(socket: PointingSocket, vote: Vote) {
		let room = socket.room;
		let player = socket.player;
		console.log(`vote: ${room}, value: ${vote}, player: ${JSON.stringify(player)}`);
		if (room) {
			this.globalState.getRoom(room).setVote(socket.player, vote);
			this.refreshRoom(room, player);
		}
	}

	private changeRole(socket: PointingSocket, role: PlayerRole) {
		let room = socket.room;
		let player = socket.player;
		console.log(`change role: ${room}, value: ${role}, player: ${JSON.stringify(player)}`);
		if (room) {
			let roomState = this.globalState.getRoom(room);
			roomState.removePlayer(socket.player);
			if (role === "player") roomState.addPlayer(socket.player);
			else roomState.addSpectator(socket.player);

			this.refreshRoom(room, player);
		}
	}

	private disconnect(socket: PointingSocket) {
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
				this.refreshRoom(socket.room, null);
				setTimeout(() => this.globalState.checkRoom(socket.room as string), 5000);
			}
		}
	}
	
	private async refreshRoom(room: string, lastPlayer: PointingPlayer | null) {
		let state = this.globalState.getRoom(room);
		if (lastPlayer)
			state.ensurePlayer(lastPlayer);
		state.lastChangeUid = lastPlayer?.uid;
		console.log(`refresh: ${room}\n` + JSON.stringify(state));
		this.pointingSocket.in(room).emit("refresh", state);
	}
}
