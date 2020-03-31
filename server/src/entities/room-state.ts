import { Player, Vote, VoteState } from './player';
import * as _ from 'lodash';
export class RoomState {
	id: string;
	name: string;
	players: Player[];
	spectators: Player[];
	constructor(id: string) {
		this.id = id;
		this.name = `Room ${id}`;
		this.players = [];
		this.spectators = [];
	}

	removePlayer(player: Player) {
		_.remove(this.players, {uid: player.uid});
		_.remove(this.spectators, {uid: player.uid});
	}

	addPlayer(player: Player) {
		this.players.push(player);
	}

	addSpectator(player: Player) {
		this.spectators.push(player);
	}

	setVote(player: Player, vote: Vote) {
		let existing = _.find(this.players, {uid: player.uid});
		if (existing)
			existing.vote = vote;
	}

	clearVotes() {
		_.each(this.players, player => delete player.vote);
		_.each(this.spectators, player => delete player.vote);
	}

	showVotes() {
		_.each(this.players, player => player.vote = (player.vote && player.vote !== VoteState.wait) ? player.vote : null);
	}
}
