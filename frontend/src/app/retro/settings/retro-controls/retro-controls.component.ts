import { Component, OnInit, Input } from '@angular/core';
import { RetroState } from '@app/retro/retro-state.class';
import { RetroApiService } from '@app/retro/retro-api.service';
import { RetroExportService } from '@app/retro/retro-export.service';

@Component({
	selector: 'retro-controls',
	templateUrl: './retro-controls.component.html',
	styleUrls: ['./retro-controls.component.scss']
})
export class RetroControlsComponent implements OnInit {

	@Input() state: RetroState;
	
	constructor(
		private retroApi: RetroApiService,
		private retroExport: RetroExportService,
	) { }

	ngOnInit(): void {
	}

	changeMode = (): void => {
		if (this.state.viewMode)
			this.retroApi.viewMode();
		else this.retroApi.writeMode();
	}

	exportSession = (): void => {
		this.retroExport.exportSession(this.state);
	}

	importSession = (): void => {
		this.retroExport.importSession();
	}

}
