import { RoomState } from './room-state';
import * as _ from 'lodash';
import { Player } from './player';

export class GlobalState {
	private states: {[roomId: string]: RoomState};

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

	removePlayer(player: Player) {
		_.each(this.states, state => state.removePlayer(player));
	}

	getRoom(room: string): RoomState {
		if (!this.states[room])
			this.states[room] = new RoomState(room);
		return this.states[room];
	}
}