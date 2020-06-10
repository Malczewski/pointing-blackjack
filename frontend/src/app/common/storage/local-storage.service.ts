/* istanbul ignore file */
import { Injectable } from '@angular/core';
import { IStorage } from '@app/common/storage/storage.interface';
import { Property } from '@app/common/storage/property.enum';
@Injectable({
	providedIn: 'root'
})
export class LocalStorageService implements IStorage {

	constructor() { }

	get(key: string): string {
		return localStorage.getItem(key);
	}
	put(key: string, value: string) {
		localStorage.setItem(key, value);
	}
	clear() {
		localStorage.removeItem(Property.UID);
		localStorage.removeItem(Property.NAME);
	}
}
