import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';
import { RoomState } from 'src/app/pointing/room-state.class';
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
		}, 30000);
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.state.currentValue !== changes.state.previousValue) {
			this.updateMessages();
		}
	}

	private updateMessages(): void {
		this.messages = _.map(this.state.log, log => ({
			time: moment(new Date(log.timestamp)).fromNow(),
			text: log.text
		})).reverse();
	}

}

