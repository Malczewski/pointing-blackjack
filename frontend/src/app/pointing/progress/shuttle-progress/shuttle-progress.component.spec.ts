import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuttleProgressComponent } from './shuttle-progress.component';

describe('ShuttleProgressComponent', () => {
	let component: ShuttleProgressComponent;
	let fixture: ComponentFixture<ShuttleProgressComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ShuttleProgressComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ShuttleProgressComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
