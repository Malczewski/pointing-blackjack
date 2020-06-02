import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroSettingsComponent } from './retro-settings.component';

describe('RetroSettingsComponent', () => {
	let component: RetroSettingsComponent;
	let fixture: ComponentFixture<RetroSettingsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ RetroSettingsComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RetroSettingsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
