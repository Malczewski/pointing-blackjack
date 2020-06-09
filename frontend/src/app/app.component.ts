import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

	constructor(
		private router: Router,
		private userStateService: UserStateService
	) {

	}

	ngOnInit(): void {
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
