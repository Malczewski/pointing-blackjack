import { Injectable } from '@angular/core';
import { Property } from './storage/property.enum';
import * as _ from 'lodash';

export interface UserState {
	uid: string;
	name: string;
}
@Injectable({
	providedIn: 'root'
})
export class UserStateService {
	readonly PERSISTENT = true;

	user: UserState;

	constructor() { }

	isLoggedIn(): boolean {
		return !!this.user;
	}

	tryLogin(): boolean {
		const uid = this.PERSISTENT ? sessionStorage.getItem(Property.UID) : null;
		const name = this.PERSISTENT ? sessionStorage.getItem(Property.NAME) : null;
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
		if (this.PERSISTENT) {
			sessionStorage.setItem(Property.UID, this.user.uid);
			sessionStorage.setItem(Property.NAME, this.user.name);
		}

	}

	logout(): void {
		if (this.PERSISTENT) sessionStorage.clear();
		delete this.user;
	}

	private generateUID(): string {
		return Math.random().toString(36).substring(2) + Date.now().toString(36);
	}

	getUid(): string {
		return this.user.uid;
	}
}
