import { TestBed } from '@angular/core/testing';

import { RetroHistoryService } from './retro-history.service';

describe('RetroHistoryService', () => {
	let service: RetroHistoryService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(RetroHistoryService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
