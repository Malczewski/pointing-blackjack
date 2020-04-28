"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const room_state_1 = require("./room-state");
const _ = require("lodash");
class GlobalState {
    constructor() {
        this.states = {};
    }
    checkRoom(room) {
        let state = this.states[room];
        if (state) {
            if (_.isEmpty(state.players) && _.isEmpty(state.spectators))
                delete this.states[room];
        }
    }
    removePlayer(player) {
        _.each(this.states, (state) => state.removePlayer(player));
    }
    getRoom(room) {
        if (!this.states[room])
            this.states[room] = new room_state_1.RoomState(room);
        return this.states[room];
    }
}
exports.GlobalState = GlobalState;
//# sourceMappingURL=global-state.js.map