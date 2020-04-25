import { RoomState, VoteState, Vote } from '@pointing/room-state.class';
import * as _ from 'lodash';

export interface IPointingResult {
	vote: Vote;
	count: number;
	isTop: boolean;
}

export class PointingUtils {

	static isVotingFinished(state: RoomState): boolean {
		return _.every(state.players, player => PointingUtils.isVoted(player.vote));
	}

	static isVoted(vote: Vote): boolean {
		return !_.isUndefined(vote) && vote !== VoteState.wait;
	}

	static getProgress(state: RoomState): number {
		if (state.players.length === 0)
			return 0;
		return _.sumBy(state.players, player => PointingUtils.isVoted(player.vote) ? 1 : 0) / state.players.length;
	}

	static getAggregatedResults(roomState: RoomState): IPointingResult[] {
		let max = 0;
		return _.chain(roomState.players)
			.countBy(player => player.vote)
			.each(count => max = count > max ? count : max)
			.map((count, key) => ({vote: isNaN(Number(key)) ? key as VoteState : Number(key), count, isTop: count === max}))
			.value();
	}
}
