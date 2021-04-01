import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { UserStateService } from './common/user-state.service';
import { Pages } from './common/pages.class';
import { version } from '../../../package.json';

@Component({
	selector: 'pointing-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	public version: string = version;
	loading: boolean;

	constructor(
		private router: Router,
		private userStateService: UserStateService
	) {

	}

	ngOnInit() {
		this.router.events.subscribe(event => {
			if (event instanceof RouteConfigLoadStart) {
				this.loading = true;
			} else if (event instanceof RouteConfigLoadEnd) {
				this.loading = false;
			}
		});
	}

	getUserName(): string {
		return this.userStateService.getUser()?.name;
	}

	isLoggedIn(): boolean {
		return this.userStateService.isLoggedIn();
	}

	logout(): void {
		this.userStateService.logout();
		this.router.navigate(Pages.login());
	}

}
