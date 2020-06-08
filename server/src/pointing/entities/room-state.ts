import { PointingPlayer, Vote, VoteState } from "./player";
import * as _ from "lodash";
import { LogMessage } from "./log-message";
export class PointingRoomState {
	id: string;
	players: PointingPlayer[];
	spectators: PointingPlayer[];
	log: LogMessage[];
	lastChangeUid?: string;

	constructor(id: string) {
		this.id = id;
		this.players = [];
		this.spectators = [];
		this.log = [];
	}

	removePlayer(player: PointingPlayer) {
		_.remove(this.players, { uid: player.uid });
		_.remove(this.spectators, { uid: player.uid });
	}

	addPlayer(player: PointingPlayer) {
		this.players.push(player);
	}

	addSpectator(player: PointingPlayer) {
		this.spectators.push(player);
	}

	setVote(player: PointingPlayer, vote: Vote) {
		let existing = _.find(this.players, { uid: player.uid });
		if (existing) existing.vote = vote;
	}

	clearVotes() {
		_.each(this.players, (player) => delete player.vote);
		_.each(this.spectators, (player) => delete player.vote);
	}

	isAllVoted() {
		return !_.some(
			this.players, (player) => player.vote === undefined || player.vote === VoteState.wait
		);
	}

	showVotes() {
		_.each(this.players, (player) => (player.vote = player.vote && player.vote !== VoteState.wait ? player.vote : null));
	}

	addLog(msg: string) {
		this.log.push(new LogMessage(msg));
		if (this.log.length > 20) {
			this.log.splice(0, 1);
		}
	}
}
