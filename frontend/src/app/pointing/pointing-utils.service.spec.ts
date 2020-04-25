import { PointingUtils } from './pointing-utils.service';
import { VoteState, RoomState, Vote, Player } from '@pointing/room-state.class';

describe('PointingUtilsService', () => {
	beforeEach(() => {});

	function votes(...args: Vote[]): RoomState {
		let players = args.map((vote) => {
			return { vote } as Player;
		});
		return {
			players,
		} as RoomState;
	}

	it('isVotingFinished', () => {
		expect(PointingUtils.isVotingFinished(votes(1, 2, undefined))).toBeFalsy();
		expect(PointingUtils.isVotingFinished(votes(1, null))).toBeTruthy();
		expect(PointingUtils.isVotingFinished(votes(1, VoteState.wait, 2))).toBeFalsy();
		expect(PointingUtils.isVotingFinished(votes(1, VoteState.none, 2))).toBeTruthy();
		expect(PointingUtils.isVotingFinished(votes(1, VoteState.none, null, 2))).toBeTruthy();
	});

	it('isVoted', () => {
		expect(PointingUtils.isVoted(VoteState.wait)).toBeFalsy();
		expect(PointingUtils.isVoted(undefined)).toBeFalsy();
		expect(PointingUtils.isVoted(3)).toBeTruthy();
		expect(PointingUtils.isVoted(null)).toBeTruthy();
	});

	it('getProgress', () => {
		expect(PointingUtils.getProgress(votes(2, 3, undefined))).toBe(2 / 3);
		expect(PointingUtils.getProgress(votes(2, 3, null, VoteState.wait))).toBe(3 / 4);
		expect(PointingUtils.getProgress(votes(2, null, null, 5))).toBe(1);
	});

	it('getAggregatedResults', () => {
		expect(PointingUtils.getAggregatedResults(votes(2, 2, 2))).toEqual([{vote: 2, count: 3, isTop: true}]);
		expect(PointingUtils.getAggregatedResults(votes(2, 3, null, 2, 5, 3))).toEqual([
			{vote: 2, count: 2, isTop: true},
			{vote: 3, count: 2, isTop: true},
			{vote: 5, count: 1, isTop: false},
			{vote: null, count: 1, isTop: false},
		]);
		expect(PointingUtils.getAggregatedResults(votes(2, 3, null, 3, 1))).toEqual([
			{vote: 1, count: 1, isTop: false},
			{vote: 2, count: 1, isTop: false},
			{vote: 3, count: 2, isTop: true},
			{vote: null, count: 1, isTop: false},
		]);
	});
});
