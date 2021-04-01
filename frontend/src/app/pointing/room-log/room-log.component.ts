import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RoomState } from '@pointing/room-state.class';
import * as dayjs from 'dayjs';
import { map } from 'lodash';
@Component({
	selector: 'room-log',
	templateUrl: './room-log.component.html',
	styleUrls: ['./room-log.component.scss']
})
export class RoomLogComponent implements OnInit, OnChanges {

	@Input() state: RoomState;

	messages: Array<{time: string, text: string}>;

	constructor() { }

	ngOnInit(): void {
		this.updateMessages();
		setInterval(() => {
			this.updateMessages();
		}, 10000);
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.updateMessages();
	}

	private updateMessages(): void {
		this.messages = map(this.state.log, log => {
			let seconds = Math.abs(dayjs(new Date(log.timestamp)).diff(dayjs(), 'seconds'));
			return {
				time: this.getElapsedTime(seconds),
				text: log.text
			};
		}).reverse();
	}

	private getElapsedTime(seconds: number): string {
		if (seconds <= 10)
			return 'a few seconds ago';
		if (seconds < 60)
			return 'less than a minute ago';
		if (seconds < 120)
			return 'a minute ago';
		else return `${Math.round(seconds / 60)} minutes ago`;
	}

}

