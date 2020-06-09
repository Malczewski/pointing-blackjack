import { Component, OnInit, Input } from '@angular/core';
import { RetroState } from '@app/retro/retro-state.class';
import { RetroApiService } from '@app/retro/retro-api.service';

@Component({
	selector: 'retro-controls',
	templateUrl: './retro-controls.component.html',
	styleUrls: ['./retro-controls.component.scss']
})
export class RetroControlsComponent implements OnInit {

	@Input() state: RetroState;
	
	constructor(private retroApi: RetroApiService) { }

	ngOnInit(): void {
	}

	changeMode = (): void => {
		if (this.state.viewMode)
			this.retroApi.viewMode();
		else this.retroApi.writeMode();
	}

}
