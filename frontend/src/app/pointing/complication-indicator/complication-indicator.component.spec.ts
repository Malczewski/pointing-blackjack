import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplicationIndicatorComponent } from './complication-indicator.component';

describe('ComplicationIndicatorComponent', () => {
	let component: ComplicationIndicatorComponent;
	let fixture: ComponentFixture<ComplicationIndicatorComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ComplicationIndicatorComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ComplicationIndicatorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
