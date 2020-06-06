import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizeableTextareaComponent } from './resizeable-textarea.component';

describe('ResizeableTextareaComponent', () => {
	let component: ResizeableTextareaComponent;
	let fixture: ComponentFixture<ResizeableTextareaComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ ResizeableTextareaComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ResizeableTextareaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
