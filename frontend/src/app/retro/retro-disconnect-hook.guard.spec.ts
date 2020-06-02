import { TestBed } from '@angular/core/testing';

import { RetroDisconnectHookGuard } from './retro-disconnect-hook.guard';

describe('RetroDisconnectHookGuard', () => {
	let guard: RetroDisconnectHookGuard;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		guard = TestBed.inject(RetroDisconnectHookGuard);
	});

	it('should be created', () => {
		expect(guard).toBeTruthy();
	});
});
