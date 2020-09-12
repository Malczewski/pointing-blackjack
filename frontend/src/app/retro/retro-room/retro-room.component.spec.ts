import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroRoomComponent } from './retro-room.component';
import { RetroApiService } from '@app/retro/retro-api.service';
import { RetroModule } from '@app/retro/retro.module';
import { ActivatedRoute } from '@angular/router';
import { UserStateService } from '@app/common/user-state.service';
import { RetroState } from '@app/retro/retro-state.class';
import { Observable } from 'rxjs';
import { RetroHistoryService } from '@app/retro/retro-history.service';
import * as moment from 'moment';

describe('RetroRoomComponent', () => {
	let component: RetroRoomComponent;
	let fixture: ComponentFixture<RetroRoomComponent>;
	let apiMock: jasmine.SpyObj<RetroApiService>;
	let historyMock: jasmine.SpyObj<RetroHistoryService>;
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
		historyMock = jasmine.createSpyObj(['saveSession']);
		TestBed.configureTestingModule({
			imports: [RetroModule],
			providers: [
				{provide: ActivatedRoute, useValue: {snapshot: {paramMap: {get: () => 'earth'}}}},
				{provide: RetroApiService, useValue: apiMock},
				{provide: RetroHistoryService, useValue: historyMock},
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

	it('should save session if it is fresh', () => {
		setState({
			startDate: moment().add(-4, 'hour').format(),
			viewMode: true
		} as RetroState);
		expect(historyMock.saveSession).toHaveBeenCalled();
	});

	it('should not save session if it is old', () => {
		setState({
			startDate: moment().add(-30, 'hour').format(),
			viewMode: true
		} as RetroState);
		expect(historyMock.saveSession).not.toHaveBeenCalled();
	});
});
