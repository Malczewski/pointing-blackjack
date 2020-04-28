import { TestBed } from '@angular/core/testing';

import { UserStateService } from './user-state.service';
import { SessionStorageService } from '@app/common/storage/session-storage.service';
import { LocalStorageService } from '@app/common/storage/local-storage.service';
import { IStorage } from '@app/common/storage/storage.interface';
import { environment } from '@env/environment';

describe('UserStateService', () => {
	let service: UserStateService;
	let sessionStorage: jasmine.SpyObj<IStorage>;
	let localStorage: jasmine.SpyObj<IStorage>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				{provide: SessionStorageService, useValue: jasmine.createSpyObj(['get', 'put', 'clear'])},
				{provide: LocalStorageService, useValue: jasmine.createSpyObj(['get', 'put', 'clear'])},
			]
		});
		sessionStorage = TestBed.inject(SessionStorageService) as any;
		localStorage = TestBed.inject(LocalStorageService) as any;
	});

	beforeEach(() => {
		environment.useSession = true;
		service = TestBed.inject(UserStateService);
	});

	it('should be created', () => {
		expect(service).toBeDefined();
	});

	it('should use session storage', () => {
		environment.useSession = true;
		service.logout();
		expect(sessionStorage.clear).toHaveBeenCalled();
		expect(localStorage.clear).not.toHaveBeenCalled();
	});

	it('should use local storage', () => {
		environment.useSession = false;
		service.logout();
		expect(sessionStorage.clear).not.toHaveBeenCalled();
		expect(localStorage.clear).toHaveBeenCalled();
	});

	it('should populate user after successful login', () => {
		expect(service.isLoggedIn()).toBeFalsy();

		sessionStorage.get.and.callFake(key => {
			if (key === 'pb-uid')
				return 'some-id';
			else return 'some-name';
		});

		expect(service.tryLogin()).toBeTruthy();
		expect(service.isLoggedIn()).toBeTruthy();
		expect(service.getUser()).toEqual({name: 'some-name', uid: 'some-id'});
		expect(service.getUid()).toBe('some-id');
	});

	it('should fail login if no data in storage', () => {
		expect(service.tryLogin()).toBeFalsy();
		expect(service.isLoggedIn()).toBeFalsy();
		expect(service.getUser()).toBeUndefined();
	});

	it('should ignore if already logged in', () => {
		service.login('heisenberg');
		expect(service.tryLogin()).toBeTruthy();
		expect(sessionStorage.get).not.toHaveBeenCalled();
	});

	it('should login', () => {
		expect(service.isLoggedIn()).toBeFalsy();
		service.login('heisenberg');
		expect(service.isLoggedIn()).toBeTruthy();
		expect(service.getUser().name).toBe('heisenberg');
		expect(service.getUid()).toBeDefined();
		expect(sessionStorage.put).toHaveBeenCalled();
	});

	it('should logout', () => {
		service.login('heisenberg');
		expect(service.isLoggedIn()).toBeTruthy();

		service.logout();
		expect(sessionStorage.clear).toHaveBeenCalled();
		expect(service.isLoggedIn()).toBeFalsy();
	});
});
