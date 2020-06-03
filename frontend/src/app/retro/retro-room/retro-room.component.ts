import { Component, OnInit } from '@angular/core';
import { RetroState } from '@app/retro/retro-state.class';
import { RetroApiService } from '@app/retro/retro-api.service';
import { ActivatedRoute } from '@angular/router';
import { UserStateService } from '@app/common/user-state.service';

@Component({
	selector: 'retro-room',
	templateUrl: './retro-room.component.html',
	styleUrls: ['./retro-room.component.scss']
})
export class RetroRoomComponent implements OnInit {

	private roomId: string;
	state: RetroState;
	loaded: boolean;

	constructor(
		private retroApi: RetroApiService,
		private route: ActivatedRoute,
		private userState: UserStateService) { }

	ngOnInit(): void {
		this.roomId = this.route.snapshot.paramMap.get('id');
		this.loaded = false;

		this.retroApi.getStateObserver().subscribe(state => {
			this.state = RetroState.of(state);
			this.loaded = true;
		});
		this.retroApi.joinRoom(this.roomId);
	}

}
