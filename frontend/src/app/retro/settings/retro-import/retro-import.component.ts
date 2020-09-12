import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RetroHistoryService, RetroSession } from '@app/retro/retro-history.service';
import * as _ from 'lodash';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RetroState, RetroMessage } from '@app/retro/retro-state.class';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
	selector: 'retro-import',
	templateUrl: './retro-import.component.html',
	styleUrls: ['./retro-import.component.scss']
})
export class RetroImportComponent implements OnInit {

	@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

	selectedState: RetroSession;
	historyData: MatTableDataSource<RetroSession>;

	constructor(
		private dialogRef: MatDialogRef<RetroImportComponent>,
		private retroHistory: RetroHistoryService,
		private snackBar: MatSnackBar,
	) { }

	ngOnInit(): void {
		this.refreshHistory();
	}

	import(): void {
		this.dialogRef.close(this.selectedState);
	}

	cancel(): void {
		this.dialogRef.close();
	}

	private refreshHistory(): void {
		let items = _.sortBy(_.values(this.retroHistory.getSessions()), 'startDate').reverse();
		this.historyData = new MatTableDataSource<RetroSession>(items);
		this.historyData.paginator = this.paginator;
	}

	onFileChanged(event: any) {
		let file = event.target.files[0];
		const fileReader = new FileReader();
		fileReader.readAsText(file, 'UTF-8');
		fileReader.addEventListener('load', (e) => {
			let session: RetroSession;
			try {
				session = JSON.parse(e.target.result as string);
			} catch (error) {
				this.snackBar.open(error, 'Error', { duration: 5000});
				return;
			}
			if (!this.isValidSession(session)) {
				this.snackBar.open('Invalid session file', 'Error', { duration: 5000});
				return;
			}
			this.retroHistory.saveSession(session as RetroState);
			this.refreshHistory();
			this.selectedState = _.find(this.historyData.data, {sessionId: session.sessionId});
			let requiredPage = Math.floor(this.historyData.data.indexOf(this.selectedState) / this.paginator.pageSize);
			this.paginator.firstPage();

			/* istanbul ignore next */
			while (this.paginator.pageIndex < requiredPage)
				this.paginator.nextPage();
		});
		
		/* istanbul ignore next */
		fileReader.onerror = (error) => {
			/* istanbul ignore next */
			this.snackBar.open('' + error, 'Error', { duration: 5000});
		};
	}

	private isValidSession(session: RetroSession): boolean {
		return !!session && !!session.config && !!session.startDate && !!session.sessionId && !!session.messages;
	}

}
