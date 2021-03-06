import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SoyuzProgressComponent } from './soyuz-progress.component';

describe('SoyuzProgressComponent', () => {
	let component: SoyuzProgressComponent;
	let fixture: ComponentFixture<SoyuzProgressComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [NoopAnimationsModule],
			declarations: [ SoyuzProgressComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SoyuzProgressComponent);
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
