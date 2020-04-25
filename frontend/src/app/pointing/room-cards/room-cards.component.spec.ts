import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCardsComponent } from './room-cards.component';

describe('RoomCardsComponent', () => {
	let component: RoomCardsComponent;
	let fixture: ComponentFixture<RoomCardsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [RoomCardsComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RoomCardsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	/* it('should create', () => {
		expect(component).toBeTruthy();
	}); */
});
