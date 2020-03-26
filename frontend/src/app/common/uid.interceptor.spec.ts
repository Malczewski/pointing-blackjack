import { TestBed } from '@angular/core/testing';

import { UidInterceptor } from './uid.interceptor';

describe('UidInterceptorInterceptor', () => {
	beforeEach(() => TestBed.configureTestingModule({
	providers: [
		UidInterceptor
		]
	}));

	it('should be created', () => {
		const interceptor: UidInterceptor = TestBed.inject(UidInterceptor);
		expect(interceptor).toBeTruthy();
	});
});
