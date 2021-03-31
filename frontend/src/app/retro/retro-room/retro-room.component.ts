import { Component, OnInit } from '@angular/core';
import { RetroState } from '@app/retro/retro-state.class';
import { RetroApiService } from '@app/retro/retro-api.service';
import { ActivatedRoute } from '@angular/router';
import { RetroHistoryService } from '@app/retro/retro-history.service';
import * as dayjs from 'dayjs';

@Component({
	selector: 'retro-room',
	templateUrl: './retro-room.component.html',
	styleUrls: ['./retro-room.component.scss']
})
export class RetroRoomComponent implements OnInit {

	private roomId: string;
	state: RetroState;
	loaded: boolean;

	roomUrl: string;

	constructor(
		private retroApi: RetroApiService,
		private route: ActivatedRoute,
		private retroHistory: RetroHistoryService) { }

	ngOnInit(): void {
		this.roomId = this.route.snapshot.paramMap.get('id');
		this.loaded = false;
		this.roomUrl = location.href;

		this.retroApi.getStateObserver().subscribe(state => {
			this.state = RetroState.of(state);
			let isSameDay = Math.abs(dayjs().diff(dayjs(state.startDate), 'hour')) < 24;
			if (state.viewMode && isSameDay)
				this.retroHistory.saveSession(state);
			this.loaded = true;
		});
		this.retroApi.joinRoom(this.roomId);
		/* istanbul ignore next */
		setInterval(() => this.retroApi.ping(), 60000);
	}

}
