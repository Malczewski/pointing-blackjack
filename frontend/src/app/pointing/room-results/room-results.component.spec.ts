import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomResultsComponent } from './room-results.component';

describe('RoomResultsComponent', () => {
	let component: RoomResultsComponent;
	let fixture: ComponentFixture<RoomResultsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ RoomResultsComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RoomResultsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	/* it('should create', () => {
		expect(component).toBeTruthy();
	}); */
});
