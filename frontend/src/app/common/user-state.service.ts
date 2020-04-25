import { Injectable } from '@angular/core';
import { Property } from './storage/property.enum';
import * as _ from 'lodash';
import { IStorage } from '@app/common/storage/storage.interface';
import { SessionStorageService } from '@app/common/storage/session-storage.service';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '@app/common/storage/local-storage.service';

export interface UserState {
	uid: string;
	name: string;
}
@Injectable({
	providedIn: 'root'
})
export class UserStateService {

	user: UserState;

	constructor(private localStorage: LocalStorageService, private sessionStorage: SessionStorageService) { }

	isLoggedIn(): boolean {
		return !!this.user;
	}

	tryLogin(): boolean {
		if (this.isLoggedIn())
			return true;
		const uid = this.getStorage().get(Property.UID);
		const name = this.getStorage().get(Property.NAME);
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
		this.getStorage().put(Property.UID, this.user.uid);
		this.getStorage().put(Property.NAME, this.user.name);

	}

	logout(): void {
		this.getStorage().clear();
		delete this.user;
	}

	private getStorage(): IStorage {
		return environment.useSession ? this.sessionStorage : this.localStorage;
	}

	private generateUID(): string {
		return Math.random().toString(36).substring(2) + Date.now().toString(36);
	}

	getUid(): string {
		return this.user.uid;
	}
}
