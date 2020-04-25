/* istanbul ignore file */
import { Injectable } from '@angular/core';
import { IStorage } from '@app/common/storage/storage.interface';
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
		localStorage.clear();
	}
}
