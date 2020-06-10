import { Injectable } from '@angular/core';
import { RetroSession, RetroHistoryService } from '@app/retro/retro-history.service';
import { RetroState } from '@app/retro/retro-state.class';

@Injectable({
	providedIn: 'root'
})
export class RetroExportService {

	constructor(private retroHistory: RetroHistoryService) { }

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
}
