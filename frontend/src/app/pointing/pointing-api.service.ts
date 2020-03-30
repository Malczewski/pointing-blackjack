import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomState, Vote } from 'src/app/pointing/room-state.class';
import { AppSocket } from 'src/app/common/sockets/app-socket';
import { UserStateService } from 'src/app/common/user-state.service';

@Injectable()
export class PointingApiService {

	constructor(
		private appSocket: AppSocket,
		private userState: UserStateService) {
	}

	getStateObserver(): Observable<RoomState> {
		return this.appSocket.fromEvent('refresh');
	}

	joinRoom(roomId: string, ): void {
		this.appSocket.emit('join', {
			uid: this.userState.getUid(),
			name: this.userState.user.name,
			room: roomId
		});
	}

	public vote(vote: Vote): void {
		this.appSocket.emit('vote', vote);
	}

	public reset(): void {
		this.appSocket.emit('reset');
	}

	public show(): void {
		this.appSocket.emit('show');
	}

	public switchToSpectator(): void {
		this.appSocket.emit('role', 'spectator');
	}

	public switchToPlayer(): void {
		this.appSocket.emit('role', 'player');
	}

}
