import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IsAuthenticatedGuard } from '@app/common/is-authenticated.guard';
import { UserStateService } from '@app/common/user-state.service';

describe('PointingDisconnectHookGuard', () => {
	let guard: IsAuthenticatedGuard;
	let userStateService: jasmine.SpyObj<UserStateService>;
	let router: jasmine.SpyObj<Router>;

	beforeEach(() => {
		userStateService = jasmine.createSpyObj(['tryLogin']);
		router = jasmine.createSpyObj(['navigate']);
		TestBed.configureTestingModule({
			providers: [
				{provide: UserStateService, useValue: userStateService},
				{provide: Router, useValue: router},
			]
		});
		guard = TestBed.inject(IsAuthenticatedGuard);
	});

	it('should be created', () => {
		expect(guard).toBeTruthy();
	});

	it('should allow if logged in', () => {
		userStateService.tryLogin.and.returnValue(true);
		expect(guard.canActivate(null, {} as any)).toBeTruthy();
		expect(router.navigate).not.toHaveBeenCalled();
	});

	it('should redirect to login if not logged in', () => {
		userStateService.tryLogin.and.returnValue(false);
		expect(guard.canActivate(null, {} as any)).toBeFalsy();
		expect(router.navigate).toHaveBeenCalled();
	});
});
