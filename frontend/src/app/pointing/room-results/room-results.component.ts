import { Component, OnInit, Input } from '@angular/core';
import { RoomState, Vote, VoteState } from 'src/app/pointing/room-state.class';
import * as _ from 'lodash';
import { PointingConstants } from 'src/app/pointing/pointing-constants.class';
import { IPointingResult, PointingUtils } from 'src/app/pointing/pointing-utils.service';
import { UserStateService } from 'src/app/common/user-state.service';

@Component({
	selector: 'room-results',
	templateUrl: './room-results.component.html',
	styleUrls: ['./room-results.component.scss']
})
export class RoomResultsComponent implements OnInit {
	@Input() state: RoomState;

	constructor(private userState: UserStateService) { }

	ngOnInit(): void {
	}

	getAggregatedResults(): IPointingResult[] {
		return PointingUtils.getAggregatedResults(this.state);
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
		return _.find(results, {vote}).isTop;
	}

	changeVote(vote: Vote): void {
		//TODO api call
		let me = _.find(this.state.players, {uid: this.userState.getUid()});
		if (me)
			me.vote = vote;
	}

}
