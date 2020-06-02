import { Component, OnInit } from '@angular/core';
import { RetroState } from '@app/retro/retro-state.class';
import { RetroApiService } from '@app/retro/retro-api.service';
import { ActivatedRoute } from '@angular/router';
import { UserStateService } from '@app/common/user-state.service';

@Component({
	selector: 'app-retro-room',
	templateUrl: './retro-room.component.html',
	styleUrls: ['./retro-room.component.scss']
})
export class RetroRoomComponent implements OnInit {

	private roomId: string;
	state: RetroState;
	private loaded: boolean;
	//private originalState: RoomState;

	constructor(
		private retroApi: RetroApiService,
		private route: ActivatedRoute,
		private userState: UserStateService) { }

	ngOnInit(): void {
		this.roomId = this.route.snapshot.paramMap.get('id');
		this.loaded = false;

		this.state = RetroState.of({
			players: [] as any
		});
		/* this.retroApi.getStateObserver().subscribe(state => {
			this.state = RetroState.of(state);
			this.loaded = true;
		});
		this.retroApi.joinRoom(this.roomId); */
		/* this.roomState = {
			id: 'blabla',
			name: 'bleble name',
			players: [
				{uid: 'user1', name: 'User 1', vote: 13},
				{uid: 'user2', name: 'User 2', vote: VoteState.none},
				{uid: 'hardcoded', name: 'My user', vote: undefined},
				{uid: 'user4', name: 'User 4', vote: 1},
				{uid: 'user5', name: 'User 5', vote: VoteState.none},
				{uid: 'user6', name: 'User 6', vote: 3},
				{uid: 'user7', name: 'User 7 long name bla bla bla jskjdskdj askdjkdjk skdjajkdsjkd d', vote: 2},
				{uid: 'user8', name: 'User 8', vote: 3},
				{uid: 'user9', name: 'User 9', vote: undefined},
				{uid: 'user10', name: 'User 10', vote: 1},
				{uid: 'user1', name: 'User 11', vote: 3},
			],
			spectators: [
				{uid: 'obs1', name: 'watcher 1'},
				{uid: 'obs2', name: 'watcher 2'}
			],
			log: [{time: 1000, message: 'User1 joined'}, {time: 2000, message: 'User2 joined'}]
		}; */
	}

}
