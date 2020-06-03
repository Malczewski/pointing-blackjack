import { Component, OnInit, Input } from '@angular/core';
import { RetroType, RetroState } from '@app/retro/retro-state.class';

@Component({
	selector: 'retro-settings',
	templateUrl: './retro-settings.component.html',
	styleUrls: ['./retro-settings.component.scss']
})
export class RetroSettingsComponent implements OnInit {

	@Input() state: RetroState;

	typeOptions = [
		{value: RetroType.startStop, text: 'Start | Stop | Continue', tooltip: ''},
		{value: RetroType.goodImprove, text: 'Good | Improve', tooltip: ''},
	];

	constructor() { }

	ngOnInit(): void {

	}

}
