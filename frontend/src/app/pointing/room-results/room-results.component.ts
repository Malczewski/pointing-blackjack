import { Component, OnInit, Input } from '@angular/core';
import { RoomState, Vote, VoteState } from 'src/app/pointing/room-state.class';
import * as _ from 'lodash';
import { PointingConstants } from 'src/app/pointing/pointing-constants.class';


interface IPointingResult {
	vote: Vote;
	count: number;
}
@Component({
	selector: 'room-results',
	templateUrl: './room-results.component.html',
	styleUrls: ['./room-results.component.scss']
})
export class RoomResultsComponent implements OnInit {
	@Input() state: RoomState;

	constructor() { }

	ngOnInit(): void {
	}

	getAggregatedResults(): IPointingResult[] {
		return _.chain(this.state.players)
			.countBy(player => player.vote)
			.map((count, key) => ({vote: key as Vote, count}))
			.value();
	}

	getVoteColor(vote: Vote): string {
		return PointingConstants.VOTE_COLORS[vote];
	}

	getVoteText(vote: Vote): string {
		switch (vote) {
			case VoteState.none: return '?';
			case 'null': return 'Skipped';
			default: return vote + '';
		}
	}

	isTopResult(vote: Vote): boolean {
		let results = this.getAggregatedResults();
		let voteCount = _.find(results, {vote}).count;
		return voteCount === _.maxBy(results, result => result.count).count;
	}

}
