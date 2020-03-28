import { TestBed, async, inject } from '@angular/core/testing';

import { HasCookieGuard } from './has-cookie.guard';

describe('HasCookieGuard', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [HasCookieGuard]
		});
	});

	/* it('should ...', inject([HasCookieGuard], (guard: HasCookieGuard) => {
		expect(guard).toBeTruthy();
	})); */
});
