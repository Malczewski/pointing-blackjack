import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCardsComponent } from './room-cards.component';
import { RoomState, Player } from '@pointing/room-state.class';
import { PointingApiService } from '@pointing/pointing-api.service';
import { UserStateService } from '@app/common/user-state.service';
import { By } from '@angular/platform-browser';
import { ShadePipe } from '@app/common/shade.pipe';
import { SelfBuildingSquareSpinnerModule } from 'angular-epic-spinners';
import { ComplicationIndicatorComponent } from '@pointing/complication-indicator/complication-indicator.component';

describe('RoomCardsComponent', () => {
	let component: RoomCardsComponent;
	let fixture: ComponentFixture<RoomCardsComponent>;
	let pointingApiMock: jasmine.SpyObj<PointingApiService>;
	let state: RoomState;
	let myPlayer: Player;

	beforeEach(async(() => {
		pointingApiMock = jasmine.createSpyObj(['vote']);

		TestBed.configureTestingModule({
			imports: [SelfBuildingSquareSpinnerModule],
			declarations: [RoomCardsComponent, ShadePipe, ComplicationIndicatorComponent],
			providers: [
				{provide: PointingApiService, useValue: pointingApiMock},
				{provide: UserStateService, useValue: {getUid: () => 'my_id'}}
			]
		}).compileComponents();
	}));

	beforeEach(() => {
		myPlayer = {name: 'me', uid: 'my_id'};
		state = {
			players: [
				myPlayer
			]
		} as RoomState;

		fixture = TestBed.createComponent(RoomCardsComponent);
		component = fixture.componentInstance;
		component.state = state;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('click should call vote api', () => {
		let five = fixture.debugElement.queryAll(By.css('.card-button'))[3];
		five.nativeElement.click();
		fixture.detectChanges();
		expect(pointingApiMock.vote).toHaveBeenCalled();
	});

	it('should highlight my vote', () => {
		myPlayer.vote = 8;
		fixture.detectChanges();
		let buttons = fixture.debugElement.queryAll(By.css('.card-button'));
		expect(buttons[3].classes.selected).toBeUndefined();
		expect(buttons[4].classes.selected).toBeTruthy();
		expect(buttons[5].classes.selected).toBeUndefined();
	});

	it('has-selection class when i voted', () => {
		expect(fixture.debugElement.classes['has-selection']).toBeUndefined();
		myPlayer.vote = 2;
		fixture.detectChanges();
		expect(fixture.debugElement.classes['has-selection']).toBeTruthy();
	});
});
