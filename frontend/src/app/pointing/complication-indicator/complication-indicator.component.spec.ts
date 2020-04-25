import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplicationIndicatorComponent } from './complication-indicator.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ComplicationIndicatorComponent', () => {
	let component: ComplicationIndicatorComponent;
	let fixture: ComponentFixture<ComplicationIndicatorComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ComplicationIndicatorComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ComplicationIndicatorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	function isHidden(elm: DebugElement): boolean {
		return window.getComputedStyle(elm.nativeElement, null).display === 'none';
	}

	it('should apply visibility styles according to complexity', () => {
		component.complexity = 2;
		fixture.detectChanges();
		expect(isHidden(fixture.debugElement.query(By.css('.m2')))).toBeFalsy();
		expect(isHidden(fixture.debugElement.query(By.css('.m3')))).toBeTruthy();

		component.complexity = 5;
		fixture.detectChanges();
		expect(isHidden(fixture.debugElement.query(By.css('.m2')))).toBeFalsy();
		expect(isHidden(fixture.debugElement.query(By.css('.m3')))).toBeFalsy();
	});

	it('should change classes per complexity value', () => {
		component.complexity = 2;
		expect(component.getClasses()).toEqual('show-m1 show-m2 show-m5');
		component.complexity = 5;
		expect(component.getClasses()).toEqual('show-m1 show-m2 show-m3 show-m4 show-m5 show-m6 show-m7');
	});
});
