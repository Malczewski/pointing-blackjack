import * as _ from "lodash";
import { RetroRoomState } from './room-state';
import { RetroPlayer } from './player';

export class RetroGlobalState {
	private states: { [roomId: string]: RetroRoomState };
	private deleteTimers: { [roomId: string]: NodeJS.Timeout};

	constructor() {
		this.states = {};
		this.deleteTimers = {};
	}

	checkRoom(room: string) {
		let state = this.states[room];
		if (state) {
			if (_.isEmpty(state.players)) {
				console.log(`Deleting ${room} in 30 seconds`); 
				this.deleteTimers[room] = setTimeout(() => this.deleteRoom(room), 30000);
			}
		}
	}

	removePlayer(player: RetroPlayer) {
		_.each(this.states, (state) => state.removePlayer(player));
	}

	getRoom(room: string): RetroRoomState {
		if (this.deleteTimers[room]) {
			console.log(`Cancel deletion of ${room}`);
			clearTimeout(this.deleteTimers[room]);
			delete this.deleteTimers[room];
		}
		if (!this.states[room]) this.states[room] = new RetroRoomState(room);
		return this.states[room];
	}

	deleteRoom(room: string): void {
		delete this.states[room];
		delete this.deleteTimers[room];
		console.log(`Room ${room} deleted`);
	}
}
