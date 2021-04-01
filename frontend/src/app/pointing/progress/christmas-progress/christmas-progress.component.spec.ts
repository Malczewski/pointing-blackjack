import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ChristmasProgressComponent } from './christmas-progress.component';

describe('ChristmasProgressComponent', () => {
	let component: ChristmasProgressComponent;
	let fixture: ComponentFixture<ChristmasProgressComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [NoopAnimationsModule],
			declarations: [ ChristmasProgressComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ChristmasProgressComponent);
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
