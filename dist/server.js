"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http = require("http");
const path = require("path");
const socketio = require("socket.io");
const player_1 = require("./entities/player");
const global_state_1 = require("./entities/global-state");
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
let globalState = new global_state_1.GlobalState();
io.on('connection', (socket) => {
    console.log('new connection');
    socket.on('join', ({ room, uid, name }) => {
        console.log(`User ${name}(${uid}) joining room ${room}`);
        if (socket.room) {
            socket.leave(room);
        }
        socket.join(room);
        socket.room = room;
        let player = new player_1.Player(uid, name);
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
    socket.on('vote', (vote) => {
        let room = socket.room;
        let player = socket.player;
        console.log(`vote: ${room}, value: ${vote}, player: ${JSON.stringify(player)}`);
        if (room) {
            globalState.getRoom(room).setVote(socket.player, vote);
            refreshRoom(room);
        }
    });
    socket.on('role', (role) => {
        let room = socket.room;
        let player = socket.player;
        console.log(`change role: ${room}, value: ${role}, player: ${JSON.stringify(player)}`);
        if (room) {
            let roomState = globalState.getRoom(room);
            roomState.removePlayer(socket.player);
            if (role === 'player')
                roomState.addPlayer(socket.player);
            else
                roomState.addSpectator(socket.player);
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
                globalState.checkRoom(socket.room);
                refreshRoom(socket.room);
            }
        }
    });
});
function refreshRoom(room) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`refresh: ${room}\n` + JSON.stringify(globalState.getRoom(room)));
        io.in(room).emit('refresh', globalState.getRoom(room));
    });
}
//start our server
server.listen(process.env.PORT || 8999, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});
process.on('uncaughtException', err => {
    console.error(`Uncaught Exception: ${err.message}`);
    console.error(err.stack);
});
//# sourceMappingURL=server.js.map