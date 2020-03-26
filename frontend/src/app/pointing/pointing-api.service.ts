import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoomState, Vote } from 'src/app/pointing/room-state.class';

@Injectable({
	providedIn: 'root'
})
export class PointingApiService {

	private baseUrl: string;

	constructor(private http: HttpClient) {
		this.baseUrl = `${environment.api}/pointing`;
	}

	private roomUrl(roomId: string): string {
		return `${this.baseUrl}/${roomId}`;
	}

	public getRoomState(roomId: string): Observable<RoomState> {
		return this.http.get<RoomState>(this.roomUrl(roomId));
	}

	public vote(roomId: string, vote: Vote): Observable<void> {
		return this.http.put<void>(this.roomUrl(roomId) + '/vote', vote);
	}

	public reset(roomId: string): Observable<void> {
		return this.http.put<void>(this.roomUrl(roomId) + '/reset', null);
	}

	public show(roomId: string): Observable<void> {
		return this.http.put<void>(this.roomUrl(roomId) + '/show', null);
	}

	public switchToSpectator(roomId: string): Observable<void> {
		return this.http.put<void>(this.roomUrl(roomId) + '/spec', null);
	}

	public switchToPlayer(roomId: string): Observable<void> {
		return this.http.put<void>(this.roomUrl(roomId) + '/player', null);
	}
}
