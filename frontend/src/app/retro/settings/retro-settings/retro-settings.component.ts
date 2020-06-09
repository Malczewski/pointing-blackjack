import { Component, OnInit, Input } from '@angular/core';
import { RetroType, RetroState, RetroConfig } from '@app/retro/retro-state.class';
import { RetroApiService } from '@app/retro/retro-api.service';

@Component({
	selector: 'retro-settings',
	templateUrl: './retro-settings.component.html',
	styleUrls: ['./retro-settings.component.scss']
})
export class RetroSettingsComponent implements OnInit {

	@Input() state: RetroState;

	typeOptions = [{
		value: RetroType.startStop, 
		text: 'Start | Stop | Continue', 
		tooltip: `Start – activities are those things the team will begin doing in the next cycle.
			Stop – looks back at the previous cycle of the project to identify which things didn’t work and should cease.
			Continue – identifies things that worked in the previous cycle and need to be part of the team’s core activities.`
	}, {
		value: RetroType.goodImprove, 
		text: 'Good | Improve', 
		tooltip: `Good – what went well?
			Improve - what could have gone better?`
	}, {
		value: RetroType.llll,
		text: '4Ls',
		disabled: true,
		tooltip: `Liked – what did the team like about this sprint/iteration/project?
			Learned – what did the team learn during this sprint/iteration/project?
			Lacked – what did the team lack during this period?
			Longed for – what do the team long for?`
	}];

	constructor(private retroApi: RetroApiService) { }

	ngOnInit(): void {

	}

	changeConfig = (key: keyof RetroConfig): void => {
		this.retroApi.setConfig(key, this.state.config[key]);
	}

}
