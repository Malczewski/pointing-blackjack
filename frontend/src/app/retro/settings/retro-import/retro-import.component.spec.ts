import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroImportComponent } from './retro-import.component';

describe('RetroImportComponent', () => {
	let component: RetroImportComponent;
	let fixture: ComponentFixture<RetroImportComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ RetroImportComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RetroImportComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
