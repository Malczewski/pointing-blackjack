import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { RoomState, Vote, VoteState, Player } from 'src/app/pointing/room-state.class';
import * as _ from 'lodash';
import { UserStateService } from 'src/app/common/user-state.service';
import { PointingConstants } from 'src/app/pointing/pointing-constants.class';
import { PointingUtils } from 'src/app/pointing/pointing-utils.service';


@Component({
	selector: 'room-cards',
	templateUrl: './room-cards.component.html',
	styleUrls: ['./room-cards.component.scss']
})
export class RoomCardsComponent implements OnInit {

	@Input() state: RoomState;

	cards = PointingConstants.VOTE_VALUES;
	cardColors = PointingConstants.VOTE_COLORS;

	constructor(private userState: UserStateService) { }

	ngOnInit(): void {
	}

	getCardText(vote: Vote): string {
		return vote + '';
	}

	selectCard(vote: Vote): void {
		// TODO api call
		this.getMyPlayer().vote = vote;
	}

	isMyVote(vote: Vote): boolean {
		return vote === this.getMyPlayer().vote;
	}

	@HostBinding('class.has-selection')
	get hasSelection(): boolean {
		return PointingUtils.isVoted(this.getMyPlayer());
	}

	private getMyPlayer(): Player {
		return _.find(this.state.players, {uid: this.userState.getUid()});
	}

	isCardHidden(vote: Vote): boolean {
		return vote === VoteState.wait && PointingUtils.getProgress(this.state) <= PointingConstants.ALMOST_FINISHED;
	}

	subColor(color: string): string {
		return 'white'; //TODO
	}

}
