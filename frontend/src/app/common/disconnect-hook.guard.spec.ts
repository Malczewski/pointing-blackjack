import { TestBed } from '@angular/core/testing';

import { DisconnectHookGuard } from './disconnect-hook.guard';

describe('DisconnectGuardGuard', () => {
	let guard: DisconnectHookGuard;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		guard = TestBed.inject(DisconnectHookGuard);
	});

	it('should be created', () => {
		expect(guard).toBeTruthy();
	});
});
