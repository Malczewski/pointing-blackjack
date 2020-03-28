import { TestBed } from '@angular/core/testing';

import { PointingApiService } from './pointing-api.service';

describe('PointingApiService', () => {
	let service: PointingApiService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(PointingApiService);
	});

	/* it('should be created', () => {
		expect(service).toBeTruthy();
	}); */
});
