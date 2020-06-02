import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroControlsComponent } from './retro-controls.component';

describe('RetroControlsComponent', () => {
	let component: RetroControlsComponent;
	let fixture: ComponentFixture<RetroControlsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ RetroControlsComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RetroControlsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
