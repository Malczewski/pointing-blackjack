import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ActivatedRoute, Router } from '@angular/router';
import { UserStateService } from '@app/common/user-state.service';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('LoginComponent', () => {
	let component: LoginComponent;
	let fixture: ComponentFixture<LoginComponent>;
	let userStateMock: jasmine.SpyObj<UserStateService>;
	let routerMock: jasmine.SpyObj<Router>;

	beforeEach(async(() => {
		userStateMock = jasmine.createSpyObj(['login']);
		routerMock = jasmine.createSpyObj(['navigateByUrl']);
		TestBed.configureTestingModule({
			imports: [FormsModule],
			declarations: [LoginComponent],
			providers: [
				{provide: ActivatedRoute, useValue: {}},
				{provide: UserStateService, useValue: userStateMock},
				{provide: Router, useValue: routerMock},
			]
		}).compileComponents();
	}));

	beforeEach(async(() => {
		fixture = TestBed.createComponent(LoginComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should login with submitted name', fakeAsync(() => {
		let input = fixture.debugElement.query(By.css('input')).nativeElement;
		input.value = 'hello';
		input.dispatchEvent(new Event('input'));

		fixture.debugElement.query(By.css('button')).nativeElement.click();
		fixture.detectChanges();
		expect(component.heisenberg).toBeFalsy();
		expect(userStateMock.login).toHaveBeenCalledWith('hello');
		expect(routerMock.navigateByUrl).toHaveBeenCalled();
	}));

	it('you are god damn right', fakeAsync(() => {
		let input = fixture.debugElement.query(By.css('input')).nativeElement;
		input.value = 'Heisenberg';
		input.dispatchEvent(new Event('input'));

		fixture.debugElement.query(By.css('button')).nativeElement.click();
		fixture.detectChanges();
		expect(component.heisenberg).toBeTruthy();
		expect(userStateMock.login).toHaveBeenCalledWith('Heisenberg');
		expect(routerMock.navigateByUrl).not.toHaveBeenCalled();
		tick(3000);
		expect(routerMock.navigateByUrl).toHaveBeenCalled();
	}));
});
