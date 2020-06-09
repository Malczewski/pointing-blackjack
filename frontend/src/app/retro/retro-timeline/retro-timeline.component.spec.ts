import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroTimelineComponent } from './retro-timeline.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RetroModule } from '@app/retro/retro.module';

@Component({
	template: `<retro-timeline (onSelect)="select($event)"></retro-timeline>`,
})
export class TestWrapperComponent {
	select: (id) => void;
}

describe('RetroTimelineComponent', () => {
	let component: TestWrapperComponent;
	let fixture: ComponentFixture<TestWrapperComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [RetroModule],
			declarations: [ RetroTimelineComponent, TestWrapperComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TestWrapperComponent);
		component = fixture.componentInstance;
		component.select = jasmine.createSpy();
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should pass id to callback fn', () => {
		fixture.debugElement.queryAll(By.css('.year-label'))[2].nativeElement.click();
		fixture.detectChanges();
		expect(component.select).toHaveBeenCalledWith('753BC');
	});
});
