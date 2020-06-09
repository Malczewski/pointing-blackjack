import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroHomeComponent } from './retro-home.component';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
	selector: 'retro-timeline',
	template: ''
})
class TimelineMockComponent {}
describe('RetroHomeComponent', () => {
	let component: RetroHomeComponent;
	let fixture: ComponentFixture<RetroHomeComponent>;
	let routerMock: jasmine.SpyObj<Router>;

	beforeEach(async(() => {
		routerMock = jasmine.createSpyObj(['navigate']);
		TestBed.configureTestingModule({
			declarations: [RetroHomeComponent, TimelineMockComponent],
			providers: [{provide: Router, useValue: routerMock}]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RetroHomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should navigate to page on click', () => {
		component.enterRoom('123');
		expect(routerMock.navigate).toHaveBeenCalledWith(['/time', '123']);
	});
});
