import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { RoomPlayersComponent } from './room-players.component';
import { PointingApiService } from '@pointing/pointing-api.service';
import { ShadePipe } from '@app/common/shade.pipe';
import { UserStateService } from '@app/common/user-state.service';
import { Vote, RoomState, VoteState } from '@pointing/room-state.class';
import { By } from '@angular/platform-browser';
import { CirclesToRhumbusesSpinnerModule } from 'angular-epic-spinners';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Component } from '@angular/core';

@Component({
	template: `<room-players [state]="state"></room-players>`,
})
export class TestWrapperComponent {
	state: RoomState;
}


describe('RoomPlayersComponent', () => {
	let component: TestWrapperComponent;
	let fixture: ComponentFixture<TestWrapperComponent>;
	let pointingApiMock: jasmine.SpyObj<PointingApiService>;

	beforeEach(async(() => {
		pointingApiMock = jasmine.createSpyObj(['vote', 'switchToPlayer', 'switchToSpectator']);
		TestBed.configureTestingModule({
			imports: [CirclesToRhumbusesSpinnerModule, NoopAnimationsModule],
			declarations: [TestWrapperComponent, RoomPlayersComponent, ShadePipe],
			providers: [
				{provide: PointingApiService, useValue: pointingApiMock},
				{provide: UserStateService, useValue: {getUid: () => 'my_id'}}
			]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TestWrapperComponent);
		component = fixture.componentInstance;
		component.state = {
			players: [],
			spectators: []
		} as RoomState;
		fixture.detectChanges();
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

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should make player', () => {
		fixture.debugElement.query(By.css('.btn-primary')).nativeElement.click();
		fixture.detectChanges();
		expect(pointingApiMock.switchToPlayer).toHaveBeenCalled();
	});

	it('should make spectator', () => {
		fixture.debugElement.query(By.css('.btn-info')).nativeElement.click();
		fixture.detectChanges();
		expect(pointingApiMock.switchToSpectator).toHaveBeenCalled();
	});

	function count(voteClass: string): number {
		return fixture.debugElement.queryAll(By.css(voteClass)).length;
	}

	it('should show placeholders if voting not finished', () => {
		component.state = state([1, 3, undefined]);
		fixture.detectChanges();
		expect(count('.vote-ready')).toBe(2);
		expect(count('.vote-number')).toBe(0);
	});

	it('should show numbers if voting is finished', () => {
		component.state = state([1, 3, VoteState.none]);
		fixture.detectChanges();
		expect(count('.vote-ready')).toBe(0);
		expect(count('.vote-number')).toBe(3);
	});

	it('should show placeholders if someone is slow', () => {
		component.state = state([1, 3, VoteState.wait]);
		fixture.detectChanges();
		expect(count('.vote-ready')).toBe(2);
		expect(count('.vote-wait')).toBe(1);
		expect(count('.vote-number')).toBe(0);
	});

	it('should show empty if someone is skipped', () => {
		component.state = state([1, 3, null]);
		fixture.detectChanges();
		expect(count('.vote-ready')).toBe(0);
		expect(count('.vote-number')).toBe(2);
	});

	it('should indicate user on ui', () => {
		component.state = state([1, 3]);
		fixture.detectChanges();
		expect(count('.players .text-primary')).toBe(1);
		expect(count('.spectators .text-primary')).toBe(0);
	});

	it('should indicate spectator on ui', () => {
		component.state = state([1, 3], true);
		fixture.detectChanges();
		expect(count('.players .text-primary')).toBe(0);
		expect(count('.spectators .text-primary')).toBe(1);
	});

	it('should show increase', () => {
		component.state = state([1]);
		fixture.detectChanges();
		expect(count('.fa-minus.visible')).toBe(0);
		expect(count('.fa-plus.visible')).toBe(1);
	});

	it('should show increase for unknown', () => {
		component.state = state([VoteState.none]);
		fixture.detectChanges();
		expect(count('.fa-minus.visible')).toBe(0);
		expect(count('.fa-plus.visible')).toBe(1);
	});

	it('should show decrease', () => {
		component.state = state([13]);
		fixture.detectChanges();
		expect(count('.fa-minus.visible')).toBe(1);
		expect(count('.fa-plus.visible')).toBe(0);
	});

	it('should show both', () => {
		component.state = state([3]);
		fixture.detectChanges();
		expect(count('.fa-minus.visible')).toBe(1);
		expect(count('.fa-plus.visible')).toBe(1);
	});

	it('should decrease value', () => {
		component.state = state([3]);
		fixture.detectChanges();
		fixture.debugElement.query(By.css('.fa-minus')).nativeElement.click();
		fixture.detectChanges();
		expect(pointingApiMock.vote).toHaveBeenCalledWith(2);
	});

	it('should increase value', () => {
		component.state = state([3]);
		fixture.detectChanges();
		fixture.debugElement.query(By.css('.fa-plus')).nativeElement.click();
		fixture.detectChanges();
		expect(pointingApiMock.vote).toHaveBeenCalledWith(5);
	});

	it('should increase value for unknown', () => {
		component.state = state([VoteState.none]);
		fixture.detectChanges();
		fixture.debugElement.query(By.css('.fa-plus')).nativeElement.click();
		fixture.detectChanges();
		expect(pointingApiMock.vote).toHaveBeenCalledWith(1);
	});

	it('should highlight player and disappear after 0.5s', fakeAsync(() => {
		component.state = state([1, 3, VoteState.none]);
		fixture.detectChanges();
		expect(getPlayerTextShadow(0)).toBe('none');

		component.state = state([1, 3, VoteState.none]);
		component.state.lastChangeUid = 'my_id';
		fixture.detectChanges();
		tick(300); // wait for animation
		expect(getPlayerTextShadow(0)).not.toBe('none');
		
		tick(1000); // wait for timeout
		fixture.detectChanges();
		tick(1000); // wait for animation
		expect(getPlayerTextShadow(0)).toBe('none');
	}));

	function getPlayerTextShadow(index: number): string {
		let playerElm = fixture.debugElement.queryAll(By.css('.user-name'))[index].nativeElement;
		return window.getComputedStyle(playerElm).textShadow;
	}
});
