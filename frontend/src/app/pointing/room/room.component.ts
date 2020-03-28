import { Component, OnInit } from '@angular/core';
import { PointingApiService } from 'src/app/pointing/pointing-api.service';
import { ActivatedRoute } from '@angular/router';
import { RoomState, VoteState } from 'src/app/pointing/room-state.class';
import * as _ from 'lodash';

@Component({
	selector: 'app-room',
	templateUrl: './room.component.html',
	styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

	roomUrl: string;
	private roomId: string;
	roomState: RoomState;
	private originalState: RoomState;

	constructor(
		private pointingApi: PointingApiService,
		private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.roomId = this.route.snapshot.paramMap.get('id');
		this.roomUrl = location.href;

		this.roomState = {
			id: 'blabla',
			name: 'bleble name',
			players: [
				{uid: 'user1', name: 'User 1', vote: 13},
				{uid: 'user2', name: 'User 2', vote: VoteState.none},
				{uid: 'hardcoded', name: 'My user', vote: undefined},
				{uid: 'user4', name: 'User 4', vote: 1},
				{uid: 'user5', name: 'User 5', vote: VoteState.wait},
				{uid: 'user6', name: 'User 6', vote: 3},
				{uid: 'user7', name: 'User 7', vote: 2},
				{uid: 'user8', name: 'User 8', vote: 3},
				{uid: 'user9', name: 'User 9', vote: 5},
				{uid: 'user10', name: 'User 10', vote: 1},
				{uid: 'user1', name: 'User 11', vote: 3},
			],
			spectators: [
				{uid: 'obs1', name: 'watcher 1'},
				{uid: 'obs2', name: 'watcher 2'}
			],
			log: [{time: 1000, message: 'User1 joined'}, {time: 2000, message: 'User2 joined'}]
		};
		this.originalState = _.cloneDeep(this.roomState);
	}

	resetVotes(): void {
		//this.pointingApi.reset(this.roomId).subscribe();
		this.roomState = _.cloneDeep(this.originalState);
	}

	showVotes(): void {
		//this.pointingApi.show(this.roomId).subscribe();
		_.each(this.roomState.players, player => player.vote = player.vote || null);
	}

}
