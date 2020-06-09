import { TestBed } from '@angular/core/testing';

import { RetroDisconnectHookGuard } from './retro-disconnect-hook.guard';
import { RetroSocket } from '@app/retro/retro-socket.service';

describe('RetroDisconnectHookGuard', () => {
	let guard: RetroDisconnectHookGuard;
	let appSocketMock: RetroSocket;

	beforeEach(() => {
		appSocketMock = jasmine.createSpyObj(['disconnect']);
		TestBed.configureTestingModule({
			providers: [{provide: RetroSocket, useValue: appSocketMock}]
		});
		guard = TestBed.inject(RetroDisconnectHookGuard);
	});

	it('should be created', () => {
		expect(guard).toBeTruthy();
	});

	it('should disconnect socket', () => {
		guard.canDeactivate(null, null, null, null);
		expect(appSocketMock.disconnect).toHaveBeenCalled();
	});
});
