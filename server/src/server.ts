import * as express from "express";
import * as http from "http";
import * as path from "path";
import * as socketio from "socket.io";
import { Player, Vote } from "./entities/player";
import { GlobalState } from "./entities/global-state";

interface PointingSocket extends socketio.Socket {
	player: Player;
	room?: string;
}

const app = express();
app.use(express.static(path.resolve(path.join(__dirname, "/frontend/"))));

app.get("*", (req, res, next) => {
	res.sendFile(path.resolve(__dirname + "/frontend/index.html"));
});

let server = http.createServer(app);
let pointingSocket = socketio(server, {
	pingInterval: 5000,
	path: "/pointing",
});

let globalState = new GlobalState();

pointingSocket.on("connection", (socket: PointingSocket) => {
	console.log("new connection");
	socket.on("join", ({ room, uid, name, role }) => {
		console.log(`User ${name}(${uid}) joining room ${room}`);
		if (socket.room) {
			socket.leave(room);
		}
		socket.join(room);
		socket.room = room;

		let player = new Player(uid, name);
		socket.player = player;

		globalState.removePlayer(player);
		let roomState = globalState.getRoom(room);
		/* if (roomState.isAllVoted() && roomState.players.length > 5) {
			player.vote = null;
		} */
		if (role === 'spectator')
			roomState.addSpectator(player);
		else roomState.addPlayer(player);
		roomState.addLog(`${player.name} joined.`);

		refreshRoom(room, player);
	});

	socket.on("reset", () => {
		let room = socket.room;
		let player = socket.player;
		console.log(`reset: ${room}`);
		if (room) {
			let roomState = globalState.getRoom(room);
			roomState.clearVotes();
			roomState.addLog(`${player.name} cleared votes.`);
			refreshRoom(room, player);
		}
	});
	socket.on("show", () => {
		let room = socket.room;
		let player = socket.player;
		console.log(`show: ${room}`);
		if (room) {
			let roomState = globalState.getRoom(room);
			roomState.showVotes();
			roomState.addLog(`${player.name} showed votes.`);
			refreshRoom(room, player);
		}
	});
	socket.on("vote", (vote: Vote) => {
		let room = socket.room;
		let player = socket.player;
		console.log(`vote: ${room}, value: ${vote}, player: ${JSON.stringify(player)}`);
		if (room) {
			globalState.getRoom(room).setVote(socket.player, vote);
			refreshRoom(room, player);
		}
	});
	socket.on("role", (role: "player" | "spectator") => {
		let room = socket.room;
		let player = socket.player;
		console.log(`change role: ${room}, value: ${role}, player: ${JSON.stringify(player)}`);
		if (room) {
			let roomState = globalState.getRoom(room);
			roomState.removePlayer(socket.player);
			if (role === "player") roomState.addPlayer(socket.player);
			else roomState.addSpectator(socket.player);

			refreshRoom(room, player);
		}
	});

	socket.on("disconnect", () => {
		console.log(`disconnect: ${JSON.stringify(socket.player)}, room: ${socket.room}`);
		if (socket.room) {
			if (socket.player) {
				let roomState = globalState.getRoom(socket.room);
				roomState.addLog(`${socket.player.name} left.`);
			}
			socket.leave(socket.room);
		}
		if (socket.player) {
			globalState.removePlayer(socket.player);
			if (socket.room) {
				globalState.checkRoom(socket.room as string);
				refreshRoom(socket.room, null);
			}
		}
	});
});

async function refreshRoom(room: string, lastPlayer: Player | null) {
	let state = globalState.getRoom(room);
	state.lastChangeUid = lastPlayer?.uid;
	console.log(`refresh: ${room}\n` + JSON.stringify(state));
	pointingSocket.in(room).emit("refresh", state);
}

//start our server
server.listen(process.env.PORT || 8999, () => {
	console.log(`Server started on port ${(server.address() as any).port} :)`);
});

process.on("uncaughtException", (err) => {
	console.error(`Uncaught Exception: ${err.message}`);
	console.error(err.stack);
});
