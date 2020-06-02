import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroHomeComponent } from './retro-home.component';

describe('RetroHomeComponent', () => {
	let component: RetroHomeComponent;
	let fixture: ComponentFixture<RetroHomeComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ RetroHomeComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RetroHomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
