import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { RoomComponent } from 'src/app/pointing/room/room.component';

@Injectable({
	providedIn: 'root'
})
export class DisconnectHookGuard implements CanDeactivate<RoomComponent> {

	constructor() { }

	canDeactivate(
		component: RoomComponent,
		currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot,
		nextState: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return true;
	}
}
