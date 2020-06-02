/* istanbul ignore file */
import { Injectable } from '@angular/core';
import { RetroSocket } from '@app/retro/retro-socket.service';
import { Observable } from 'rxjs';
import { RetroState } from '@app/retro/retro-state.class';
import { UserStateService } from '@app/common/user-state.service';

@Injectable({
	providedIn: 'root'
})
export class RetroApiService {

	constructor(
		private retroSocket: RetroSocket,
		private userState: UserStateService) {
	}

	getStateObserver(): Observable<RetroState> {
		this.retroSocket.connect();
		return this.retroSocket.fromEvent('refresh');
	}

	joinRoom(roomId: string): void {
		this.retroSocket.emit('join', {
			uid: this.userState.getUid(),
			name: this.userState.getUser().name,
			room: roomId
		});
		this.retroSocket.removeAllListeners('reconnect');
		this.retroSocket.on('reconnect', () => this.joinRoom(roomId));
	}

	/* public vote(vote: Vote): void {
		this.pointingSocket.emit('vote', vote);
	} */
}
