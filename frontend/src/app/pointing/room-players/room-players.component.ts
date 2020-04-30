import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RoomState, Vote, VoteState, Player } from '@pointing/room-state.class';
import * as _ from 'lodash';
import { UserStateService } from '@app/common/user-state.service';
import { PointingConstants } from '@pointing/pointing-constants.class';
import { PointingUtils } from '@pointing/pointing-utils.service';
import { ColorUtils } from '@app/common/color-utils.class';
import { PointingApiService } from '@pointing/pointing-api.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

interface HighlightedPlayer extends Player {
	highlight?: any;
}

@Component({
	selector: 'room-players',
	templateUrl: './room-players.component.html',
	styleUrls: ['./room-players.component.scss'],
	animations: [
		trigger('highlight', [
			state('none', style({'text-shadow': 'none'})),
			state('active', style({'text-shadow': '0 0 5px #00FF00'})),
			transition('none => active', animate('0.2s')),
			transition('active => none', animate('0.5s')),
		]),
	],
})
export class RoomPlayersComponent implements OnInit, OnChanges {

	@Input() state: RoomState;
	players: HighlightedPlayer[] = [];
	spectators: HighlightedPlayer[] = [];

	private calculatedDifference: {[key: number]: number};

	constructor(
		private userState: UserStateService,
		private pointingApi: PointingApiService) { }

	ngOnInit(): void {
		this.recalculateDifferences();
	}
	
	ngOnChanges(changes: SimpleChanges): void {
		if (changes.state.currentValue !== changes.state.previousValue) {
			this.processPlayers(this.players, this.state.players);
			this.processPlayers(this.spectators, this.state.spectators);
			if (this.state.lastChangeUid)
				this.highlightPlayer(this.state.lastChangeUid);
			this.recalculateDifferences();
		}
	}

	private processPlayers(current: Player[], updated: Player[]): void {
		let updateMap: {[uid: string]: Player} = {};
		_.each(updated, update => updateMap[update.uid] = update);
		_.remove(current, player => !updateMap[player.uid]);
		_.each(current, player => {
			_.extend(player, updateMap[player.uid]);
			delete updateMap[player.uid];
		});
		[].push.apply(current, _.values(updateMap));
	}

	private highlightPlayer(uid: string): void {
		let highlightedPlayer = _.find(_.union(this.players, this.spectators), player => player.uid === uid);
		if (highlightedPlayer) {
			if (highlightedPlayer.highlight)
				clearTimeout(highlightedPlayer.highlight);
			highlightedPlayer.highlight = setTimeout(() => {
				delete highlightedPlayer.highlight;
			}, 500);
		}
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
		let currentVote = myUser.vote;
		let vote = !this.isNumber(currentVote)
			? 1
			: PointingConstants.VOTE_VALUES[PointingConstants.VOTE_VALUES.indexOf(currentVote) + direction];
		this.pointingApi.vote(vote);
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
		let diff = this.calculatedDifference[vote];
		if (diff === 0)
			return green + alpha;
		return ColorUtils.blendColors(green, red, diff) + alpha;
	}

	recalculateDifferences(): void {
		this.calculatedDifference = {};
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
		let maxVote = _.maxBy(PointingConstants.VOTE_VALUES, v => _.isNumber(v) ? v : 0) as number;
		_.chain(PointingConstants.VOTE_VALUES)
			.filter(vote => _.isNumber(vote))
			.each((vote: number) => {
				let diff = _.chain(topVotes)
					.map(topVote => topVote.vote)
					.filter(topVote => topVote > 0)
					.map((topVote: number) => Math.abs(topVote - vote))
					.max()
					.value();
				this.calculatedDifference[vote] = Math.sqrt(diff / (maxVote - 1));
				
			}).value();
		
	}

}
