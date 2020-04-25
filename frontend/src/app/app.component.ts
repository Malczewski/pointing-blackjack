import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserStateService } from './common/user-state.service';
import { Pages } from './common/pages.class';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	constructor(
		private router: Router,
		private userStateService: UserStateService
	) {

	}

	ngOnInit(): void {
	}

	getUserName(): string {
		return this.userStateService.user && this.userStateService.user.name;
	}

	isLoggedIn(): boolean {
		return this.userStateService.isLoggedIn();
	}

	logout(): void {
		this.userStateService.logout();
		this.router.navigate(Pages.login());
	}

}
