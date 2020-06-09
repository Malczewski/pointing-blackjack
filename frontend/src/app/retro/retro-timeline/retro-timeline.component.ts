import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import EVENTS from './event-list';

@Component({
	selector: 'retro-timeline',
	templateUrl: './retro-timeline.component.html',
	styleUrls: ['./retro-timeline.component.scss']
})
export class RetroTimelineComponent implements OnInit {

	@Output() onSelect = new EventEmitter();

	timeEvents = EVENTS;

	constructor() { }

	ngOnInit(): void {
	}

	selectYear = (yearId: string) => {
		this.onSelect.emit(yearId);
	}
}
