import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroPlayersComponent } from './retro-players.component';

describe('RetroPlayersComponent', () => {
	let component: RetroPlayersComponent;
	let fixture: ComponentFixture<RetroPlayersComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ RetroPlayersComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RetroPlayersComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
