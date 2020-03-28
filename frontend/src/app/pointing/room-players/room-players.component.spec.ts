import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomPlayersComponent } from './room-players.component';

describe('RoomPlayersComponent', () => {
	let component: RoomPlayersComponent;
	let fixture: ComponentFixture<RoomPlayersComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [RoomPlayersComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RoomPlayersComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	/* it('should create', () => {
		expect(component).toBeTruthy();
	}); */
});
