import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { RoomState, Vote, VoteState, Player } from '@pointing/room-state.class';
import * as _ from 'lodash';
import { UserStateService } from '@app/common/user-state.service';
import { PointingConstants } from '@pointing/pointing-constants.class';
import { PointingUtils } from '@pointing/pointing-utils.service';
import { PointingApiService } from '@pointing/pointing-api.service';


@Component({
	selector: 'room-cards',
	templateUrl: './room-cards.component.html',
	styleUrls: ['./room-cards.component.scss']
})
export class RoomCardsComponent implements OnInit {

	@Input() state: RoomState;

	cards = PointingConstants.VOTE_VALUES;
	cardColors = PointingConstants.VOTE_COLORS;

	constructor(
		private userState: UserStateService,
		private pointingApi: PointingApiService) { }

	ngOnInit(): void {
	}

	getCardText(vote: Vote): string {
		return vote + '';
	}

	selectCard(vote: Vote): void {
		this.pointingApi.vote(vote);
		//this.getMyPlayer().vote = vote;
	}

	isMyVote(vote: Vote): boolean {
		return vote === this.getMyPlayer().vote;
	}

	@HostBinding('class.has-selection')
	get hasSelection(): boolean {
		return PointingUtils.isVoted(this.getMyPlayer().vote);
	}

	private getMyPlayer(): Player {
		return _.find(this.state.players, {uid: this.userState.getUid()});
	}

	isCardHidden(vote: Vote): boolean {
		return vote === VoteState.wait && PointingUtils.getProgress(this.state) <= PointingConstants.ALMOST_FINISHED;
	}
}
