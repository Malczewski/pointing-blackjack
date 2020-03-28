import { RoomState, VoteState, Vote, Player } from 'src/app/pointing/room-state.class';
import * as _ from 'lodash';

export class PointingUtils {

	static isVotingFinished(state: RoomState): boolean {
		return _.every(state.players, PointingUtils.isVoted);
	}

	static isVoted(player: Player): boolean {
		return !_.isUndefined(player.vote) && player.vote !== VoteState.wait;
	}

	static getProgress(state: RoomState): number {
		if (state.players.length === 0)
			return 0;
		return _.sumBy(state.players, player => PointingUtils.isVoted(player) ? 1 : 0) / state.players.length;
	}
}
