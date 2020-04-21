import { Component, OnInit, Input } from '@angular/core';
import { RoomState, Vote, VoteState, Player } from 'src/app/pointing/room-state.class';
import * as _ from 'lodash';
import { UserStateService } from 'src/app/common/user-state.service';
import { PointingConstants } from 'src/app/pointing/pointing-constants.class';
import { PointingUtils } from 'src/app/pointing/pointing-utils.service';
import { ColorUtils } from 'src/app/common/color-utils.class';
import { PointingApiService } from 'src/app/pointing/pointing-api.service';

@Component({
	selector: 'room-players',
	templateUrl: './room-players.component.html',
	styleUrls: ['./room-players.component.scss']
})
export class RoomPlayersComponent implements OnInit {

	@Input() state: RoomState;

	constructor(
		private userState: UserStateService,
		private pointingApi: PointingApiService) { }

	ngOnInit(): void {
	}

	isShowVotes(): boolean {
		return PointingUtils.isVotingFinished(this.state);
	}

	makePlayer(): void {
		this.pointingApi.switchToPlayer();
		//let current = _.remove(this.state.spectators, {uid: this.userState.getUid()})[0];
		//this.state.players.push(current);
	}

	makeSpectator(): void {
		this.pointingApi.switchToSpectator();
		//let current = _.remove(this.state.players, {uid: this.userState.getUid()})[0];
		//this.state.spectators.push(current);
	}

	changeVote(direction: number): void {
		let myUser = _.find(this.state.players, player => this.isMyUser(player));
		if (myUser) {
			let currentVote = myUser.vote;
			let vote = !this.isNumber(currentVote)
				? 1
				: PointingConstants.VOTE_VALUES[PointingConstants.VOTE_VALUES.indexOf(currentVote) + direction];
			if (this.isNumber(vote))
				this.pointingApi.vote(vote);
		}
	}

	showDecrease(vote: Vote): boolean {
		return this.isNumber(vote) && vote > 1;
	}

	showIncrease(vote: Vote): boolean {
		return !this.isNumber(vote) || vote < 13;
	}

	isNumber(vote: Vote): boolean {
		return _.isNumber(vote);
	}
	getVoteColor(vote: Vote): string {
		return PointingConstants.VOTE_COLORS[vote];
	}
	isDunno(vote: Vote): boolean {
		return vote === VoteState.none;
	}
	isVoted(vote: Vote): boolean {
		return PointingUtils.isVoted(vote);
	}
	isWait(vote: Vote): boolean {
		return vote === VoteState.wait;
	}
	isPlayer(): boolean {
		return !!_.find(this.state.players, {uid: this.userState.getUid()});
	}
	isSpectator(): boolean {
		return !!_.find(this.state.spectators, {uid: this.userState.getUid()});
	}
	isMyUser(user: Player): boolean {
		return this.userState.getUid() === user.uid;
	}

	getDifferenceColor(vote: Vote): string {
		if (!this.isShowVotes())
			return;
		let green = '#00ff00';
		let red = '#ff0000';
		let alpha = '15'; // transparency
		if (vote === VoteState.none)
			return red + alpha;
		if (vote === null)
			return '';
		let voteNum = vote as number;
		let topVotes = PointingUtils.getAggregatedResults(this.state).filter(topVote => topVote.isTop);
		/* let voteIndex = PointingConstants.VOTE_VALUES.indexOf(vote);
		let indexDiff = _.chain(topVotes)
			.map(topVote => PointingConstants.VOTE_VALUES.indexOf(topVote.vote))
			.map(index => Math.abs(index - voteIndex))
			.max()
			.value();
		if (indexDiff === 0)
			return green + alpha;
		let totalValues = PointingConstants.VOTE_VALUES.length - 2; // none and wait
		return ColorUtils.blendColors(green, red, indexDiff / totalValues) + alpha; */
		let diff = _.chain(topVotes)
			.map(topVote => topVote.vote)
			.filter(topVote => topVote > 0)
			.map((topVote: number) => Math.abs(topVote - voteNum))
			.max()
			.value();
		if (diff === 0)
			return green + alpha;
		let maxVote = _.maxBy(PointingConstants.VOTE_VALUES, v => _.isNumber(v) ? v : 0) as number;
		return ColorUtils.blendColors(green, red, diff / (maxVote - 1)) + alpha;


	}

}
