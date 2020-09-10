import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RetroState } from '@app/retro/retro-state.class';
import { RetroHistoryService, RetroSession } from '@app/retro/retro-history.service';
import * as _ from 'lodash';

@Component({
	selector: 'retro-import',
	templateUrl: './retro-import.component.html',
	styleUrls: ['./retro-import.component.scss']
})
export class RetroImportComponent implements OnInit {

	selectedState: RetroSession;
	historyItems: RetroSession[];

	constructor(
		private dialogRef: MatDialogRef<RetroImportComponent>,
		private retroHistory: RetroHistoryService) { }

	ngOnInit(): void {
		this.historyItems = _.sortBy(_.values(this.retroHistory.getSessions()), 'startDate');
	}

	import(): void {
		this.dialogRef.close(this.selectedState);
	}

	cancel(): void {
		this.dialogRef.close();
	}

}
