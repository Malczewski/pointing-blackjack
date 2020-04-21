import * as express from 'express';
import * as http from 'http';
import * as path from 'path';
import * as socketio  from 'socket.io';
import { Player, Vote, VoteState } from './entities/player';
import { GlobalState } from './entities/global-state';

interface PointingSocket extends socketio.Socket {
	player: Player;
	room?: string;
}

const app = express();
console.log(__dirname);
app.use(express.static(path.resolve(path.join(__dirname, '/frontend/'))));

app.get('*', (req, res, next) => {
	res.sendFile(path.resolve(__dirname + "/frontend/index.html"));
});

let server = http.createServer(app);
let io = socketio(server, {
	pingInterval: 5000,
	path: '/pointing'
});

let globalState = new GlobalState();


io.on('connection', (socket: PointingSocket) => {
	console.log('new connection');
	socket.on('join', ({room, uid, name}) => {
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
		roomState.addPlayer(player);
		roomState.addLog(`${player.name} joined.`);

		refreshRoom(room);
	});

	socket.on('reset', () => {
		let room = socket.room;
		let player = socket.player;
		console.log(`reset: ${room}`);
		if (room) {
			let roomState = globalState.getRoom(room);
			roomState.clearVotes();
			roomState.addLog(`${player.name} cleared votes.`);
			refreshRoom(room);
		}
	});
	socket.on('show', () => {
		let room = socket.room;
		let player = socket.player;
		console.log(`show: ${room}`);
		if (room) {
			let roomState = globalState.getRoom(room);
			roomState.showVotes();
			roomState.addLog(`${player.name} showed votes.`);
			refreshRoom(room);
		}
	});
	socket.on('vote', (vote: Vote) => {
		let room = socket.room;
		let player = socket.player;
		console.log(`vote: ${room}, value: ${vote}, player: ${JSON.stringify(player)}`);
		if (room) {
			globalState.getRoom(room).setVote(socket.player, vote);
			refreshRoom(room);
		}
	});
	socket.on('role', (role: 'player' | 'spectator') => {
		let room = socket.room;
		let player = socket.player;
		console.log(`change role: ${room}, value: ${role}, player: ${JSON.stringify(player)}`);
		if (room) {
			let roomState = globalState.getRoom(room);
			roomState.removePlayer(socket.player);
			if (role === 'player')
				roomState.addPlayer(socket.player);
			else roomState.addSpectator(socket.player);

			refreshRoom(room);
		}
	});

	socket.on('disconnect', () => {
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
				refreshRoom(socket.room);
			}
		}
	});
});

async function refreshRoom(room: string) {
	console.log(`refresh: ${room}\n` + JSON.stringify(globalState.getRoom(room)));
	io.in(room).emit('refresh', globalState.getRoom(room));
}

//start our server
server.listen(process.env.PORT || 8999, () => {
	console.log(`Server started on port ${(server.address() as any).port} :)`);

});

process.on('uncaughtException', err => {
	console.error(`Uncaught Exception: ${err.message}`);
	console.error(err.stack);
})