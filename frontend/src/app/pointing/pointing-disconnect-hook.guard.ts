import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { RoomComponent } from '@pointing/room/room.component';
import { PointingSocket } from '@pointing/pointing-socket';

@Injectable({
	providedIn: 'root'
})
export class PointingDisconnectHookGuard implements CanDeactivate<RoomComponent> {

	constructor(private appSocket: PointingSocket) { }

	canDeactivate(
		component: RoomComponent,
		currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot,
		nextState: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		this.appSocket.disconnect();
		return true;
	}
}
