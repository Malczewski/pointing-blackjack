import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanProgressComponent } from './hangman-progress.component';
import { By } from '@angular/platform-browser';

describe('HangmanProgressComponent', () => {
	let component: HangmanProgressComponent;
	let fixture: ComponentFixture<HangmanProgressComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
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

	/* it('should make visible depending on progress', () => {
		component.progress = 0.42;
		fixture.detectChanges();
		expect(fixture.debugElement.query(By.css('.pct-40')).styles.display).toBeFalsy();
		expect(fixture.debugElement.query(By.css('.pct-50')).styles.display).toBeTruthy();
	}); */
});
