import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserStateService } from 'src/app/common/user-state.service';

@Injectable()
export class UidInterceptor implements HttpInterceptor {

	constructor(private userState: UserStateService) {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		const modifiedReq = request.clone({
			headers: request.headers.set('uid', this.userState.user.uid),
		});
		return next.handle(modifiedReq);
	}

}
