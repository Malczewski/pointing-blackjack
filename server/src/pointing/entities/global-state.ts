import { PointingRoomState } from "./room-state";
import * as _ from "lodash";
import { PointingPlayer } from "./player";

export class PointingGlobalState {
	private states: { [roomId: string]: PointingRoomState };

	constructor() {
		this.states = {};
	}

	checkRoom(room: string) {
		let state = this.states[room];
		if (state) {
			if (_.isEmpty(state.players) && _.isEmpty(state.spectators))
				delete this.states[room];
		}
	}

	removePlayer(player: PointingPlayer) {
		_.each(this.states, (state) => state.removePlayer(player));
	}

	getRoom(room: string): PointingRoomState {
		if (!this.states[room]) this.states[room] = new PointingRoomState(room);
		return this.states[room];
	}
}
