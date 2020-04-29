import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { UserStateService } from '@app/common/user-state.service';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
	let fixture: ComponentFixture<AppComponent>;
	let userStateMock: jasmine.SpyObj<UserStateService>;

	beforeEach(async(() => {
		userStateMock = jasmine.createSpyObj(['isLoggedIn', 'logout', 'getUser']);
		TestBed.configureTestingModule({
			imports: [RouterTestingModule],
			declarations: [AppComponent],
			providers: [
				{provide: UserStateService, useValue: userStateMock}
			]
		}).compileComponents();
		fixture = TestBed.createComponent(AppComponent);
		fixture.detectChanges();
	}));

	it('should create the app', () => {
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	});

	it('should contain user name', () => {
		expect(fixture.debugElement.query(By.css('header')).nativeElement.textContent).not.toContain('heisenberg');
		userStateMock.getUser.and.returnValue({
			name: 'heisenberg', uid: 'breaking'
		});
		userStateMock.isLoggedIn.and.returnValue(true);
		
		fixture.detectChanges();
		expect(fixture.debugElement.query(By.css('header')).nativeElement.textContent).toContain('heisenberg');
	});

	it('should logout', () => {
		let router = TestBed.inject(Router);
		spyOn(router, 'navigate');
		userStateMock.isLoggedIn.and.returnValue(true);
		fixture.detectChanges();
		fixture.debugElement.query(By.css('[title=Logout]')).nativeElement.click();
		fixture.detectChanges();
		expect(userStateMock.logout).toHaveBeenCalled();
		expect(router.navigate).toHaveBeenCalled();
	});
});
