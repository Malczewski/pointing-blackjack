import { TestBed } from '@angular/core/testing';

import { RetroExportService } from './retro-export.service';

describe('RetroExportService', () => {
	let service: RetroExportService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(RetroExportService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
