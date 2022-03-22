import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ProgressIndicatorComponent } from './progress-indicator.component';

describe('ProgressIndicatorComponent', () => {
	let component: ProgressIndicatorComponent;
	let fixture: ComponentFixture<ProgressIndicatorComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ProgressIndicatorComponent ]
		})
		.compileComponents();
	}));

	beforeEach(fakeAsync(() => {
		jasmine.clock().install();
		fixture = TestBed.createComponent(ProgressIndicatorComponent);
		component = fixture.componentInstance;
	}));

	afterEach(() => {
		jasmine.clock().uninstall();
	});

	function getIndicatorClass() {
		return (component as any).component.componentType.name;
	}

	it('christmas when winter', fakeAsync(() => {
		component.randomSeed = 'room';
		jasmine.clock().mockDate(new Date(2020, 0, 1));
		fixture.detectChanges();
		tick();
		expect(getIndicatorClass()).toBe('ChristmasProgressComponent');
	}));

	it('not christmas when not winter', fakeAsync(() => {
		component.randomSeed = 'room';
		jasmine.clock().mockDate(new Date(2020, 4, 1));
		fixture.detectChanges();
		tick();
		expect(getIndicatorClass()).toBe('StarwarsProgressComponent');
	}));

	/* it('hangman', fakeAsync(() => {
		jasmine.clock().mockDate(new Date(2020, 4, 1));
		component.randomSeed = 'rooom';
		fixture.detectChanges();
		tick();
		expect(getIndicatorClass()).toBe('HangmanProgressComponent');
	})); */

	it('soyuz', fakeAsync(() => {
		jasmine.clock().mockDate(new Date(2020, 4, 1));
		component.randomSeed = 'rooom';
		fixture.detectChanges();
		tick();
		expect(getIndicatorClass()).toBe('SoyuzProgressComponent');
	}));
});
