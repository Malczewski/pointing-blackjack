import { VoteState } from 'src/app/pointing/room-state.class';

export class PointingConstants {
	static readonly VOTE_COLORS = {
		1: 'green',
		2: 'blue',
		3: 'yellow',
		5: 'orange',
		8: 'red',
		13: 'brown',
		wait: 'pink',
		none: 'black'
	};
	static readonly VOTE_VALUES = [1, 2, 3, 5, 8, 13, VoteState.none, VoteState.wait];

	static readonly ALMOST_FINISHED = 0.8;
}
