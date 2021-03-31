import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { RoomState, Vote, VoteState, Player } from '@pointing/room-state.class';
import { UserStateService } from '@app/common/user-state.service';
import { PointingConstants } from '@pointing/pointing-constants.class';
import { PointingUtils } from '@pointing/pointing-utils.service';
import { PointingApiService } from '@pointing/pointing-api.service';
import { find } from 'lodash';


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

	selectCard(vote: Vote): void {
		this.pointingApi.vote(vote);
	}

	isMyVote(vote: Vote): boolean {
		return vote === this.getMyPlayer().vote;
	}

	@HostBinding('class.has-selection')
	get hasSelection(): boolean {
		return PointingUtils.isVoted(this.getMyPlayer().vote);
	}

	private getMyPlayer(): Player {
		return find(this.state.players, {uid: this.userState.getUid()});
	}

	isCardHidden(vote: Vote): boolean {
		return vote === VoteState.wait && PointingUtils.getProgress(this.state) <= PointingConstants.ALMOST_FINISHED;
	}
}
