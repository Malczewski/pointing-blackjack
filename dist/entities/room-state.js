"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const player_1 = require("./player");
const _ = require("lodash");
const log_message_1 = require("./log-message");
class RoomState {
    constructor(id) {
        this.id = id;
        this.name = `Room ${id}`;
        this.players = [];
        this.spectators = [];
        this.log = [];
    }
    removePlayer(player) {
        _.remove(this.players, { uid: player.uid });
        _.remove(this.spectators, { uid: player.uid });
    }
    addPlayer(player) {
        this.players.push(player);
    }
    addSpectator(player) {
        this.spectators.push(player);
    }
    setVote(player, vote) {
        let existing = _.find(this.players, { uid: player.uid });
        if (existing)
            existing.vote = vote;
    }
    clearVotes() {
        _.each(this.players, player => delete player.vote);
        _.each(this.spectators, player => delete player.vote);
    }
    isAllVoted() {
        return !_.some(this.players, player => player.vote === undefined || player.vote === player_1.VoteState.wait);
    }
    showVotes() {
        _.each(this.players, player => player.vote = (player.vote && player.vote !== player_1.VoteState.wait) ? player.vote : null);
    }
    addLog(msg) {
        this.log.push(new log_message_1.LogMessage(msg));
        if (this.log.length > 20) {
            this.log.splice(0, 1);
        }
    }
}
exports.RoomState = RoomState;
//# sourceMappingURL=room-state.js.map