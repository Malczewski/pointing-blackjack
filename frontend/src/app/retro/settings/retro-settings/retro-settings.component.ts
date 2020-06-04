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

	typeOptions = [
		{value: RetroType.startStop, text: 'Start | Stop | Continue', tooltip: ''},
		{value: RetroType.goodImprove, text: 'Good | Improve', tooltip: ''},
	];

	constructor(private retroApi: RetroApiService) { }

	ngOnInit(): void {

	}

	changeConfig = (key: keyof RetroConfig): void => {
		this.retroApi.setConfig(key, this.state.config[key]);
	}

}
