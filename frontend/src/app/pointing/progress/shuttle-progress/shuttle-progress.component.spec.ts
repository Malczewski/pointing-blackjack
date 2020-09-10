import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuttleProgressComponent } from './shuttle-progress.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ShuttleProgressComponent', () => {
	let component: ShuttleProgressComponent;
	let fixture: ComponentFixture<ShuttleProgressComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [NoopAnimationsModule],
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

	it('should return correct state', () => {
		component.progress = 0.11;
		expect(component.getState(0.2)).toBe('hide');
		expect(component.getState(0.1)).toBe('show');
	});
});
