import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroRoomComponent } from './retro-room.component';
import { RetroApiService } from '@app/retro/retro-api.service';
import { RetroModule } from '@app/retro/retro.module';
import { ActivatedRoute } from '@angular/router';
import { UserStateService } from '@app/common/user-state.service';
import { RetroState } from '@app/retro/retro-state.class';
import { Observable } from 'rxjs';

describe('RetroRoomComponent', () => {
	let component: RetroRoomComponent;
	let fixture: ComponentFixture<RetroRoomComponent>;
	let apiMock: jasmine.SpyObj<RetroApiService>;
	let setState: (state: RetroState) => void;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ RetroRoomComponent ]
		})
		.compileComponents();
	}));


	beforeEach(async(() => {
		apiMock = jasmine.createSpyObj(['getStateObserver', 'joinRoom']);
		apiMock.getStateObserver.and.returnValue({
			subscribe: (fn) => setState = fn
		} as Observable<RetroState>);
		TestBed.configureTestingModule({
			imports: [RetroModule],
			providers: [
				{provide: ActivatedRoute, useValue: {snapshot: {paramMap: {get: () => 'earth'}}}},
				{provide: RetroApiService, useValue: apiMock},
			]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RetroRoomComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should finish loading once retrieved state', () => {
		expect(component.loaded).toBeFalsy();
		setState({} as RetroState);
		expect(component.loaded).toBeTruthy();
	});
});
