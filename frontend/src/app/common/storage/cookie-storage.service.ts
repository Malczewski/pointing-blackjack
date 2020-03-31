import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { IStorage } from 'src/app/common/storage/storage.interface';

@Injectable({
	providedIn: 'root'
})
export class CookieStorageService implements IStorage {

	constructor(private cookieService: CookieService) { }

	get(key: string): string {
		return this.cookieService.get(key);
	}
	put(key: string, value: string) {
		this.cookieService.set(key, value, 0, '/');
	}
	clear() {
		this.cookieService.deleteAll();
	}

}
