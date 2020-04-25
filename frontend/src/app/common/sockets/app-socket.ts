/* istanbul ignore file */
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { environment } from 'src/environments/environment';
@Injectable()
export class AppSocket extends Socket {

	constructor() {
		super({ url: environment.endpoint, options: { path: '/pointing' } });
	}

}
