import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { StarwarsProgressComponent } from './starwars-progress.component';

describe('StarwarsProgressComponent', () => {
	let component: StarwarsProgressComponent;
	let fixture: ComponentFixture<StarwarsProgressComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [NoopAnimationsModule],
			declarations: [ StarwarsProgressComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(StarwarsProgressComponent);
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
