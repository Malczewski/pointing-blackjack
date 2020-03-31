import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { RoomComponent } from 'src/app/pointing/room/room.component';
import { AppSocket } from 'src/app/common/sockets/app-socket';

@Injectable({
	providedIn: 'root'
})
export class DisconnectHookGuard implements CanDeactivate<RoomComponent> {

	constructor(private appSocket: AppSocket) { }

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
