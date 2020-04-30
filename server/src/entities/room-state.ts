import { Player, Vote, VoteState } from "./player";
import * as _ from "lodash";
import { LogMessage } from "./log-message";
export class RoomState {
	id: string;
	name: string;
	players: Player[];
	spectators: Player[];
	log: LogMessage[];
	lastChangeUid?: string;

	constructor(id: string) {
		this.id = id;
		this.name = `Room ${id}`;
		this.players = [];
		this.spectators = [];
		this.log = [];
	}

	removePlayer(player: Player) {
		_.remove(this.players, { uid: player.uid });
		_.remove(this.spectators, { uid: player.uid });
	}

	addPlayer(player: Player) {
		this.players.push(player);
	}

	addSpectator(player: Player) {
		this.spectators.push(player);
	}

	setVote(player: Player, vote: Vote) {
		let existing = _.find(this.players, { uid: player.uid });
		if (existing) existing.vote = vote;
	}

	clearVotes() {
		_.each(this.players, (player) => delete player.vote);
		_.each(this.spectators, (player) => delete player.vote);
	}

	isAllVoted() {
		return !_.some(
			this.players,
			(player) =>
				player.vote === undefined || player.vote === VoteState.wait
		);
	}

	showVotes() {
		_.each(
			this.players,
			(player) =>
				(player.vote =
					player.vote && player.vote !== VoteState.wait
						? player.vote
						: null)
		);
	}

	addLog(msg: string) {
		this.log.push(new LogMessage(msg));
		if (this.log.length > 20) {
			this.log.splice(0, 1);
		}
	}
}
