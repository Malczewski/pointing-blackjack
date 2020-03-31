import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SessionStorageService {

	constructor() { }

	get(key: string): string {
		return sessionStorage.getItem(key);
	}
	put(key: string, value: string) {
		sessionStorage.setItem(key, value);
	}
	clear() {
		sessionStorage.clear();
	}
}
