import { Injectable, Component } from '@angular/core';
import { RetroSession, RetroHistoryService } from '@app/retro/retro-history.service';
import { RetroState } from '@app/retro/retro-state.class';
import {MatDialog} from '@angular/material/dialog';
import { RetroImportComponent } from '@app/retro/settings/retro-import/retro-import.component';
import { RetroApiService } from '@app/retro/retro-api.service';

@Injectable({
	providedIn: 'root'
})
export class RetroExportService {

	constructor(
		private retroHistory: RetroHistoryService,
		private retroApi: RetroApiService,
		private dialog: MatDialog) { }

	exportSession(state: RetroState): void {
		let session = this.retroHistory.convertToSession(state);
		let name = `Retrospective_${state.startDate}`;
		this.downloadJson(session, name);
	}

	private downloadJson(session: RetroSession, filename: string){
		let json = JSON.stringify(session, null, '\t');
		let element = document.createElement('a');
		element.setAttribute('href', 'data:text/json;charset=UTF-8,' + encodeURIComponent(json));
		element.setAttribute('download', `${filename}.json`);
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	}

	importSession(): void {
		const dialogRef = this.dialog.open(RetroImportComponent);
		dialogRef.afterClosed().subscribe(state => {
			if (state)
				this.retroApi.overrideSession(state);
		});
	}
}
