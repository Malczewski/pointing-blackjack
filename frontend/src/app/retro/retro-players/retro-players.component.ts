import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RetroState, RetroPlayer } from '@app/retro/retro-state.class';
import { UserStateService } from '@app/common/user-state.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
	selector: 'retro-players',
	templateUrl: './retro-players.component.html',
	styleUrls: ['./retro-players.component.scss'],
	animations: [
		trigger('highlight', [
			state('none', style({'text-shadow': 'none'})),
			state('active', style({'text-shadow': '0 0 5px #00FF00'})),
			transition('none => active', animate('0.2s')),
			transition('active => none', animate('0.5s')),
		]),
	],
})
export class RetroPlayersComponent implements OnInit, OnChanges {
	@Input() state: RetroState;

	highlightedPlayers: {[uid: string]: any} = {};

	constructor(
		private userState: UserStateService) { }

	ngOnInit(): void {
	}
	
	ngOnChanges(changes: SimpleChanges): void {
		/* istanbul ignore else */
		if (changes.state.currentValue !== changes.state.previousValue) {
			if (this.state.lastPlayerUpdate)
				this.highlightPlayer(this.state.lastPlayerUpdate);
		}
	}

	private highlightPlayer(uid: string): void {
		if (this.highlightedPlayers[uid])
			clearTimeout(this.highlightedPlayers[uid]);
		this.highlightedPlayers[uid] = setTimeout(() => {
				delete this.highlightedPlayers[uid];
		}, 500);
	}

	isMyUser(user: RetroPlayer): boolean {
		return this.userState.getUid() === user.uid;
	}


}
