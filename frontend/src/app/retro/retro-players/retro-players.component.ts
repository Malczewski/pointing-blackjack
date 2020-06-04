import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RetroState, RetroPlayer } from '@app/retro/retro-state.class';
import { UserStateService } from '@app/common/user-state.service';

@Component({
	selector: 'retro-players',
	templateUrl: './retro-players.component.html',
	styleUrls: ['./retro-players.component.scss']
})
export class RetroPlayersComponent implements OnInit, OnChanges {
	@Input() state: RetroState;

	highlightedPlayers: {[uid: string]: any} = {};

	constructor(
		private userState: UserStateService) { }

	ngOnInit(): void {
	}
	
	ngOnChanges(changes: SimpleChanges): void {
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
