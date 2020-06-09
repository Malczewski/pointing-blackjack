import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { RetroSocket } from '@app/retro/retro-socket.service';
import { RetroRoomComponent } from '@app/retro/retro-room/retro-room.component';

@Injectable({
	providedIn: 'root'
})
export class RetroDisconnectHookGuard implements CanDeactivate<RetroRoomComponent> {

	constructor(private retroSocket: RetroSocket) { }

	canDeactivate(
		component: RetroRoomComponent,
		currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot,
		nextState: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		this.retroSocket.disconnect();
		return true;
	}
	
}
