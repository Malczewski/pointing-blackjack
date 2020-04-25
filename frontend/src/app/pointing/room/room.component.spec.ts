import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomComponent } from './room.component';
import { PointingModule } from '@pointing/pointing.module';
import { ActivatedRoute } from '@angular/router';
import { PointingApiService } from '@pointing/pointing-api.service';
import { UserStateService } from '@app/common/user-state.service';
import { RoomState, Vote, Player, VoteState } from '@pointing/room-state.class';
import { Observable } from 'rxjs';

describe('RoomComponent', () => {
	let component: RoomComponent;
	let fixture: ComponentFixture<RoomComponent>;
	let pointingApiMock: jasmine.SpyObj<PointingApiService>;
	let setState: (state: RoomState) => void;

	beforeEach(async(() => {
		pointingApiMock = jasmine.createSpyObj(['getStateObserver', 'joinRoom', 'reset', 'show']);
		pointingApiMock.getStateObserver.and.returnValue({
			subscribe: (fn) => setState = fn
		} as Observable<RoomState>);
		TestBed.configureTestingModule({
			imports: [PointingModule],
			providers: [
				{provide: ActivatedRoute, useValue: {snapshot: {paramMap: {get: () => 'earth'}}}},
				{provide: PointingApiService, useValue: pointingApiMock},
				{provide: UserStateService, useValue: {getUid: () => 'my_id'}},
			]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RoomComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	function state(votes: Vote[], spectator?: boolean): RoomState {
		let players = votes.map((vote, index) => {
			return { vote, uid: `id-${index}`, name: `player-${index}` };
		});
		let spectators = [];
		if (spectator) {
			spectators.push({uid: 'my_id', name: 'me'});
		} else {
			players[0].uid = 'my_id'; // make 1st player - mine
		}
		return {
			players,
			spectators,
			log: []
		} as RoomState;
	}

	it('should show proper mode', () => {
		expect(component.getMode()).toBe('loading');
		setState(state([5]));
		expect(component.getMode()).toBe('results');
		setState(state([], true));
		expect(component.getMode()).toBe('results');
		setState(state([undefined, 2], true));
		expect(component.getMode()).toBe('progress');
		setState(state([undefined, 5, 3]));
		expect(component.getMode()).toBe('cards');
	});

	it('show mini progress', () => {
		setState(state([5, 3, null]));
		expect(component.showMiniProgress()).toBeTruthy();
		setState(state([5, undefined, VoteState.none]));
		expect(component.showMiniProgress()).toBeTruthy();
		setState(state([5, 3, VoteState.wait]));
		expect(component.showMiniProgress()).toBeTruthy();
		setState(state([5, 3, undefined], true));
		expect(component.showMiniProgress()).toBeFalsy();
		setState(state([5, 3, VoteState.none], true));
		expect(component.showMiniProgress()).toBeTruthy();
	});

	it('reset votes', () => {
		component.resetVotes();
		expect(pointingApiMock.reset).toHaveBeenCalled();
	});

	it('show votes', () => {
		component.showVotes();
		expect(pointingApiMock.show).toHaveBeenCalled();
	});
});
