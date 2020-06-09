import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ResizeableTextareaComponent } from './resizeable-textarea.component';
import { RetroModule } from '@app/retro/retro.module';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
	template: `<resizeable-textarea
		[label]="label"
		[hint]="hint"
		[placeholder]="placeholder"
		[(ngModel)]="text"
		(blurHandler)="onBlur()"
		(save)="onSave()"
		(ngModelChange)="onChange()"
		(cancel)="onCancel()"></resizeable-textarea>`
})
class WrapperComponent {
	label: string;
	hint: string;
	placeholder: string;
	text: string;
	onSave: jasmine.Spy;
	onCancel: jasmine.Spy;
	onBlur: jasmine.Spy;
	onChange: jasmine.Spy;
}

describe('ResizeableTextareaComponent', () => {
	let component: WrapperComponent;
	let fixture: ComponentFixture<WrapperComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ RetroModule, FormsModule ],
			declarations: [ WrapperComponent, ResizeableTextareaComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WrapperComponent);
		component = fixture.componentInstance;
		component.text = 'Hello';
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	function getTextarea(): DebugElement {
		return fixture.debugElement.query(By.css('textarea'));
	}

	it('should show label when not focused, and hint - when focused', () => {
		component.label = 'My label';
		component.hint = 'Super hint';
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toBe('My label');

		getTextarea().triggerEventHandler('focus', {});
		fixture.detectChanges();
		expect(fixture.nativeElement.textContent).toBe('Super hint');
	});

	it('should call blur handler', () => {
		component.text = 'hello';
		component.onBlur = jasmine.createSpy();
		fixture.detectChanges();

		getTextarea().triggerEventHandler('blur', {});
		fixture.detectChanges();
		expect(component.onBlur).toHaveBeenCalled();
	});

	it('should update parent model on changes', () => {
		component.text = 'hello';
		component.onChange = jasmine.createSpy();
		fixture.detectChanges();
		getTextarea().nativeElement.value = 'bye';
		getTextarea().nativeElement.dispatchEvent(new Event('input'));
		fixture.detectChanges();
		expect(component.text).toBe('bye');
		expect(component.onChange).toHaveBeenCalled();
	});

	it('should emit save if ctrl+enter', () => {
		component.text = 'hello';
		component.onSave = jasmine.createSpy();
		fixture.detectChanges();
		getTextarea().nativeElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
		fixture.detectChanges();
		expect(component.onSave).not.toHaveBeenCalled();

		getTextarea().nativeElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', ctrlKey: true }));
		fixture.detectChanges();
		expect(component.onSave).toHaveBeenCalled();
	});
	
	it('should emit cancel', () => {
		component.text = 'hello';
		component.onCancel = jasmine.createSpy();
		fixture.detectChanges();
		getTextarea().nativeElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
		fixture.detectChanges();
		expect(component.onCancel).toHaveBeenCalled();
	});

	
});
