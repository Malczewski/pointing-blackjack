import { PointingUtils } from './pointing-utils.service';
import {
	Vote,
	Player,
	RoomState,
	VoteState,
} from 'src/app/pointing/room-state.class';

describe('PointingUtilsService', () => {
	let service: PointingUtils;

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
		expect(
			PointingUtils.isVotingFinished(votes(1, 2, undefined))
		).toBeFalsy();
		expect(PointingUtils.isVotingFinished(votes(1, null))).toBeTruthy();
		expect(
			PointingUtils.isVotingFinished(votes(1, VoteState.wait, 2))
		).toBeFalsy();
		expect(
			PointingUtils.isVotingFinished(votes(1, VoteState.none, 2))
		).toBeTruthy();
		expect(
			PointingUtils.isVotingFinished(votes(1, VoteState.none, null, 2))
		).toBeTruthy();
	});
});
