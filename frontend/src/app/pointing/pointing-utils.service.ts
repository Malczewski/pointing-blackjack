import { RoomState, VoteState, Vote, Player } from '@pointing/room-state.class';
import { every, isUndefined, sumBy, chain } from 'lodash';

export interface IPointingResult {
	vote: Vote;
	count: number;
	isTop: boolean;
}

export class PointingUtils {

	static isVotingFinished(state: RoomState): boolean {
		return every(state.players, player => PointingUtils.isVoted(player.vote));
	}

	static isVoted(vote: Vote): boolean {
		return !isUndefined(vote);
	}

	static getProgress(state: RoomState): number {
		if (state.players.length === 0)
			return 0;
		return sumBy(state.players, player => PointingUtils.isVoted(player.vote) ? 1 : 0) / state.players.length;
	}

	static getAggregatedResults(roomState: RoomState): IPointingResult[] {
		let max = 0;
		return chain(roomState.players)
			.countBy((player: Player) => player.vote)
			.each((count: number) => max = count > max ? count : max)
			.map((count: number, key: string) => ({count, key: key === 'null' ? null : key}))
			.map((pair: {key: string, count: number}) => ({
				vote: isNaN(parseInt(pair.key, 10)) ? pair.key as VoteState : Number(pair.key), 
				count: pair.count, 
				isTop: pair.count === max}))
			.value();
	}
}
