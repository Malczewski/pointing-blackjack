import { Component, OnInit, Input } from '@angular/core';
import { RetroState } from '@app/retro/retro-state.class';

@Component({
	selector: 'retro-players',
	templateUrl: './retro-players.component.html',
	styleUrls: ['./retro-players.component.scss']
})
export class RetroPlayersComponent implements OnInit {
	@Input() state: RetroState;

	constructor() { }

	ngOnInit(): void {
	}

}
