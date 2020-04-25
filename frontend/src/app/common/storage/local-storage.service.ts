import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {

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
