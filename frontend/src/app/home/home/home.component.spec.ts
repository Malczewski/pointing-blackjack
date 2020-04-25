import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Planets } from '@app/home/home/planets.const';

describe('HomeComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;
	let routerMock: jasmine.SpyObj<Router>;

	beforeEach(async(() => {
		routerMock = jasmine.createSpyObj(['navigate']);
		TestBed.configureTestingModule({
			declarations: [HomeComponent],
			providers: [{provide: Router, useValue: routerMock}]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should navigate to page on click', () => {
		fixture.debugElement.queryAll(By.css('.door'))[2].nativeElement.click();
		expect(routerMock.navigate).toHaveBeenCalledWith(['/planet', Planets[2]]);
	});
});
