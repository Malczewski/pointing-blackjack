import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'resizeable-textarea',
	templateUrl: './resizeable-textarea.component.html',
	styleUrls: ['./resizeable-textarea.component.scss'],
	providers: [
		{ 
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => ResizeableTextareaComponent),
			multi: true
		}
	]
})
export class ResizeableTextareaComponent implements OnInit, ControlValueAccessor {

	@Input() label: string;
	@Input() hint: string;
	@Input() placeholder: string;
	@Output() blurHandler = new EventEmitter();
	@Output() save = new EventEmitter();
	@Output() cancel = new EventEmitter();

	text: string;
	propagateChange = (value: string) => {};

	focused: boolean;
	
	constructor() { }

	ngOnInit(): void {
	}

	writeValue(value: string): void {
		this.text = value;
	}

	registerOnChange(fn) {
		this.propagateChange = fn;
	}

	registerOnTouched() {}

	keydownTrigger = ($event: KeyboardEvent): void => {
		if ($event.ctrlKey && $event.key === 'Enter') {
			this.save.emit(null);
			$event.stopPropagation();
		}
		if ($event.key === 'Escape') {
			this.cancel.emit(null);
			$event.stopPropagation();
		}
	}

	onBlur = (): void => {
		this.focused = false;
		this.blurHandler.emit(null);
	}

	onFocus = (): void => {
		this.focused = true;
	}
}
