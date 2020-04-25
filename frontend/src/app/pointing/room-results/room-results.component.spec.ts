import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomResultsComponent } from './room-results.component';
import { PointingApiService } from '@pointing/pointing-api.service';
import { UserStateService } from '@app/common/user-state.service';
import { RoomState, Vote, Player, VoteState } from '@pointing/room-state.class';
import { ShadePipe } from '@app/common/shade.pipe';
import { NgPipesModule } from 'ngx-pipes';
import { By } from '@angular/platform-browser';

describe('RoomResultsComponent', () => {
	let component: RoomResultsComponent;
	let fixture: ComponentFixture<RoomResultsComponent>;
	let pointingApiMock: jasmine.SpyObj<PointingApiService>;

	beforeEach(async(() => {
		pointingApiMock = jasmine.createSpyObj(['vote']);
		TestBed.configureTestingModule({
			imports: [NgPipesModule],
			declarations: [RoomResultsComponent, ShadePipe],
			providers: [
				{provide: PointingApiService, useValue: pointingApiMock},
				{provide: UserStateService, useValue: {getUid: () => 'my_id'}}
			]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RoomResultsComponent);
		component = fixture.componentInstance;
		component.state = {
			players: []
		} as RoomState;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	function votes(...args: Vote[]): RoomState {
		let players = args.map((vote) => {
			return { vote } as Player;
		});
		players[0].uid = 'my_id'; // make 1st player - mine
		return {
			players,
		} as RoomState;
	}

	it('should show several lines with highlighted tops, ranking bigger points higher when same count', () => {
		component.state = votes(3, 2, 3, 1, 5, 1, 1, null, VoteState.none);
		fixture.detectChanges();
		let elms = fixture.debugElement.queryAll(By.css('.vote:not(.result-header)'));
		expect(elms.length).toBe(6);
		expect(elms.map(elm => elm.nativeElement.textContent.trim())).toEqual(['1', '3', '5', '2', 'Skipped', '?']);
		expect(elms[0].classes['top-result']).toBeTruthy();
		expect(elms[1].classes['top-result']).toBeUndefined();
	});

	it('should indicate my vote', () => {
		component.state = votes(3, 2, 3, 1, 5, 1, 1, null, VoteState.none);
		fixture.detectChanges();
		let indicators = fixture.debugElement.queryAll(By.css('.vote-indicator'));
		expect(indicators[0].classes['my-vote']).toBeUndefined();
		expect(indicators[1].classes['my-vote']).toBeTruthy();
		expect(indicators[2].classes['my-vote']).toBeUndefined();
	});

	it('should change vote on click', () => {
		component.state = votes(3, 2, 3, 1, 5, 1, 1, null, VoteState.none);
		fixture.detectChanges();
		fixture.debugElement.queryAll(By.css('.vote:not(.result-header)'))[0].nativeElement.click();
		fixture.detectChanges();
		expect(pointingApiMock.vote).toHaveBeenCalledWith(1);
	});

	it('should ignore click if spectator', () => {
		component.state = votes(3, 2, 3, 1, 5, 1, 1, null, VoteState.none);
		component.state.players[0].uid = 'id-0';
		fixture.detectChanges();
		fixture.debugElement.queryAll(By.css('.vote:not(.result-header)'))[0].nativeElement.click();
		fixture.detectChanges();
		expect(pointingApiMock.vote).not.toHaveBeenCalled();
	});
});
