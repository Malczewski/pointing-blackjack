import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroRoomComponent } from './retro-room.component';

describe('RetroRoomComponent', () => {
	let component: RetroRoomComponent;
	let fixture: ComponentFixture<RetroRoomComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ RetroRoomComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RetroRoomComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
