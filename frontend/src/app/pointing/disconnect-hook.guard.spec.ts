import { TestBed } from '@angular/core/testing';

import { AppSocket } from '@app/common/sockets/app-socket';
import { DisconnectHookGuard } from '@pointing/disconnect-hook.guard';

describe('DisconnectGuardGuard', () => {
	let guard: DisconnectHookGuard;
	let appSocketMock: AppSocket;

	beforeEach(() => {
		appSocketMock = jasmine.createSpyObj(['disconnect']);
		TestBed.configureTestingModule({
			providers: [{provide: AppSocket, useValue: appSocketMock}]
		});
		guard = TestBed.inject(DisconnectHookGuard);
	});

	it('should be created', () => {
		expect(guard).toBeTruthy();
	});

	it('should disconnect socket', () => {
		guard.canDeactivate(null, null, null, null);
		expect(appSocketMock.disconnect).toHaveBeenCalled();
	});
});
