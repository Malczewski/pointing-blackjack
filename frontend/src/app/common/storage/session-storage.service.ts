/* istanbul ignore file */
import { Injectable } from '@angular/core';
import { IStorage } from '@app/common/storage/storage.interface';
import { Property } from '@app/common/storage/property.enum';

@Injectable({
	providedIn: 'root'
})
export class SessionStorageService implements IStorage {

	constructor() { }

	get(key: string): string {
		return sessionStorage.getItem(key);
	}
	put(key: string, value: string) {
		sessionStorage.setItem(key, value);
	}
	clear() {
		sessionStorage.removeItem(Property.UID);
		sessionStorage.removeItem(Property.NAME);
	}
}
