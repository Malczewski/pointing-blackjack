import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Cookies } from './cookies.enum';
import * as _ from 'lodash';

export interface UserState {
	uid: string;
	name: string;
}
@Injectable({
	providedIn: 'root'
})
export class UserStateService {

	user: UserState;

	constructor(
		private cookieService: CookieService) { }

	isLoggedIn(): boolean {
		return !!this.user;
	}

	tryLogin(): boolean {
		const uid = this.cookieService.get(Cookies.UID);
		const name = this.cookieService.get(Cookies.NAME);
		const loggedIn = !_.isEmpty(uid) && !_.isEmpty(name);
		if (loggedIn) {
			this.user = {uid, name};
		}
		return loggedIn;
	}

	login(name: string): void {
		this.user = {
			uid: this.generateUID(),
			name
		};
		this.cookieService.set(Cookies.UID, this.user.uid);
		this.cookieService.set(Cookies.NAME, this.user.name);

	}

	logout(): void {
		this.cookieService.deleteAll();
		delete this.user;
	}

	private generateUID(): string {
		return 'hardcoded'; // Math.random().toString(36).substring(2) + Date.now().toString(36);
	}

	getUid(): string {
		return this.user.uid;
	}
}
