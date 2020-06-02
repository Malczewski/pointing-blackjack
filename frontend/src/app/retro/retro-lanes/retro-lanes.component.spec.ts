import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroLanesComponent } from './retro-lanes.component';

describe('RetroLanesComponent', () => {
	let component: RetroLanesComponent;
	let fixture: ComponentFixture<RetroLanesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ RetroLanesComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RetroLanesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
