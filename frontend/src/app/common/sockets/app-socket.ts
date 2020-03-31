import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable()
export class AppSocket extends Socket {

	constructor() {
		super({ url: '', options: { path: '/pointing' } });
	}

}
