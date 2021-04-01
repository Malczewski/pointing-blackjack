import { Component, OnInit, Input } from '@angular/core';
import { RoomState, Vote, VoteState, Player } from '@pointing/room-state.class';
import { PointingConstants } from '@pointing/pointing-constants.class';
import { IPointingResult, PointingUtils } from '@pointing/pointing-utils.service';
import { UserStateService } from '@app/common/user-state.service';
import { PointingApiService } from '@pointing/pointing-api.service';
import { find } from 'lodash';

@Component({
	selector: 'room-results',
	templateUrl: './room-results.component.html',
	styleUrls: ['./room-results.component.scss']
})
export class RoomResultsComponent implements OnInit {
	@Input() state: RoomState;

	constructor(
		private userState: UserStateService,
		private pointingApi: PointingApiService) { }

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
			case null: return '<span style="font-size:5vh;">z<sup>z<sup>z</sup></sup></span>';
			default: return vote + '';
		}
	}

	isTopResult(vote: Vote): boolean {
		let results = this.getAggregatedResults();
		return find(results, {vote}).isTop;
	}

	changeVote(vote: Vote): void {
		let me = find(this.state.players, {uid: this.userState.getUid()});
		if (me)
			this.pointingApi.vote(vote);
			//me.vote = vote;
	}

	isMyVote(vote: Vote): boolean {
		let me = this.getMyPlayer();
		return vote === me?.vote;
	}

	private getMyPlayer(): Player {
		return find(this.state.players, {uid: this.userState.getUid()});
	}

}
