/* istanbul ignore file */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomState, Vote } from '@pointing/room-state.class';
import { PointingSocket } from '@pointing/pointing-socket';
import { UserStateService } from '@app/common/user-state.service';

@Injectable()
export class PointingApiService {

	constructor(
		private pointingSocket: PointingSocket,
		private userState: UserStateService) {
	}

	getStateObserver(): Observable<RoomState> {
		this.pointingSocket.connect();
		return this.pointingSocket.fromEvent('refresh');
	}

	joinRoom(roomId: string): void {
		this.pointingSocket.emit('join', {
			uid: this.userState.getUid(),
			name: this.userState.getUser().name,
			role: this.userState.getLastRole(),
			room: roomId
		});
		this.pointingSocket.removeAllListeners('reconnect');
		this.pointingSocket.on('reconnect', () => this.joinRoom(roomId));
	}

	public vote(vote: Vote): void {
		this.pointingSocket.emit('vote', vote);
	}

	public reset(): void {
		this.pointingSocket.emit('reset');
	}

	public show(): void {
		this.pointingSocket.emit('show');
	}

	public switchToSpectator(): void {
		this.pointingSocket.emit('role', 'spectator');
	}

	public switchToPlayer(): void {
		this.pointingSocket.emit('role', 'player');
	}

}
