import { TestBed, async, inject } from '@angular/core/testing';

import { IsAuthenticatedGuard } from './is-authenticated.guard';

describe('HasCookieGuard', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [IsAuthenticatedGuard],
		});
	});

	/* it('should ...', inject([HasCookieGuard], (guard: HasCookieGuard) => {
		expect(guard).toBeTruthy();
	})); */
});
