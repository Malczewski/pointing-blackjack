import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pages } from './pages.class';
import { UserStateService } from './user-state.service';

@Injectable({
	providedIn: 'root'
})
export class IsAuthenticatedGuard implements CanActivate {

	constructor(
		private userStateService: UserStateService,
		private router: Router) {}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		const loggedIn = this.userStateService.tryLogin();
		if (!loggedIn) {
			this.router.navigate(Pages.login(), { queryParams: { returnUrl: state.url }});
		}
		return loggedIn;
	}

}
