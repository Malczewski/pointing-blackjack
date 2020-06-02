import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaneInputComponent } from './lane-input.component';

describe('LaneInputComponent', () => {
	let component: LaneInputComponent;
	let fixture: ComponentFixture<LaneInputComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ LaneInputComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LaneInputComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
