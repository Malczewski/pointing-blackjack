import { Component, OnInit } from '@angular/core';
import { PointingApiService } from 'src/app/pointing/pointing-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-room',
	templateUrl: './room.component.html',
	styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

	roomUrl: string;
	private roomId: string;

	constructor(
		private pointingApi: PointingApiService,
		private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.roomId = this.route.snapshot.paramMap.get('id');
		this.roomUrl = location.href;
	}

	resetVotes(): void {
		this.pointingApi.reset(this.roomId).subscribe();
	}

	showVotes(): void {
		this.pointingApi.show(this.roomId).subscribe();
	}

}
