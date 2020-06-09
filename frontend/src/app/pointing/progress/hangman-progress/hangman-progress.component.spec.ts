import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanProgressComponent } from './hangman-progress.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('HangmanProgressComponent', () => {
	let component: HangmanProgressComponent;
	let fixture: ComponentFixture<HangmanProgressComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [NoopAnimationsModule],
			declarations: [HangmanProgressComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HangmanProgressComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	function isHidden(elm: DebugElement): boolean {
		return window.getComputedStyle(elm.nativeElement, null).opacity === '0';
	}

	it('should apply visibility styles according to progress', () => {
		component.progress = 0.42;
		fixture.detectChanges();
		expect(isHidden(fixture.debugElement.query(By.css('.pct-40')))).toBeFalsy();
		expect(isHidden(fixture.debugElement.query(By.css('.pct-50')))).toBeTruthy();
		expect(isHidden(fixture.debugElement.query(By.css('.pct-60')))).toBeTruthy();

		component.progress = 0.58;
		fixture.detectChanges();
		expect(isHidden(fixture.debugElement.query(By.css('.pct-50')))).toBeFalsy();
		expect(isHidden(fixture.debugElement.query(By.css('.pct-60')))).toBeTruthy();
	});

	it('should return correct state', () => {
		component.progress = 0.11;
		expect(component.getState(0.2)).toBe('hide');
		expect(component.getState(0.1)).toBe('show');
	});
});
