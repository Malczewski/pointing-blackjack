import { TestBed } from '@angular/core/testing';

import { PointingSocket } from '@pointing/pointing-socket';
import { PointingDisconnectHookGuard } from '@pointing/pointing-disconnect-hook.guard';

describe('PointingDisconnectHookGuard', () => {
	let guard: PointingDisconnectHookGuard;
	let appSocketMock: PointingSocket;

	beforeEach(() => {
		appSocketMock = jasmine.createSpyObj(['disconnect']);
		TestBed.configureTestingModule({
			providers: [{provide: PointingSocket, useValue: appSocketMock}]
		});
		guard = TestBed.inject(PointingDisconnectHookGuard);
	});

	it('should be created', () => {
		expect(guard).toBeTruthy();
	});

	it('should disconnect socket', () => {
		guard.canDeactivate(null, null, null, null);
		expect(appSocketMock.disconnect).toHaveBeenCalled();
	});
});
