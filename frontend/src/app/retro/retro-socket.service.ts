/* istanbul ignore file */
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Socket } from 'ngx-socket-io';

@Injectable({
	providedIn: 'root'
})
export class RetroSocket extends Socket {

	constructor() {
		super({ url: environment.endpoint, options: { path: '/retro' } });
	}
}
