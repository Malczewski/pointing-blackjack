import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroTimelineComponent } from './retro-timeline.component';

describe('RetroTimelineComponent', () => {
	let component: RetroTimelineComponent;
	let fixture: ComponentFixture<RetroTimelineComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ RetroTimelineComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RetroTimelineComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
