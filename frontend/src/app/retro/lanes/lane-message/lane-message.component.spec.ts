import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaneMessageComponent } from './lane-message.component';

describe('LaneMessageComponent', () => {
	let component: LaneMessageComponent;
	let fixture: ComponentFixture<LaneMessageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ LaneMessageComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LaneMessageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
