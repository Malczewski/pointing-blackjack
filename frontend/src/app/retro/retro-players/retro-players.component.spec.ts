import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { RetroPlayersComponent } from './retro-players.component';
import { Component } from '@angular/core';
import { RetroState } from '@app/retro/retro-state.class';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserStateService } from '@app/common/user-state.service';
import { By } from '@angular/platform-browser';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { map } from 'lodash';

@Component({
	template: `<retro-players [state]="state"></retro-players>`,
})
export class TestWrapperComponent {
	state: RetroState;
}

describe('RetroPlayersComponent', () => {
	let component: TestWrapperComponent;
	let fixture: ComponentFixture<TestWrapperComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [NoopAnimationsModule, PerfectScrollbarModule],
			declarations: [TestWrapperComponent, RetroPlayersComponent],
			providers: [
				{provide: UserStateService, useValue: {getUid: () => 'my_id'}}
			]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TestWrapperComponent);
		component = fixture.componentInstance;
		component.state = {
			players: []
		} as RetroState;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	function count(voteClass: string): number {
		return fixture.debugElement.queryAll(By.css(voteClass)).length;
	}

	function state(...players: string[]): RetroState {
		return {
			players: map(players, uid => ({uid, name: 'player ' + uid}))
		} as RetroState;
	} 

	it('should indicate user on ui', () => {
		component.state = state('my_id', 'another_id', 'third_id');
		fixture.detectChanges();
		expect(count('.mat-text-primary')).toBe(1);
	});

	it('should highlight player and disappear after 0.5s', fakeAsync(() => {
		component.state = state('my_id', 'another_id');
		fixture.detectChanges();
		expect(getPlayerTextShadow(0)).toBe('none');

		component.state = state('my_id', 'another_id', 'third_id');
		component.state.lastPlayerUpdate = 'third_id';
		fixture.detectChanges();
		tick(1); // wait for animation
		expect(getPlayerTextShadow(2)).not.toBe('none');
		
		tick(501); // wait for timeout
		fixture.detectChanges();
		expect(getPlayerTextShadow(2)).toBe('none');
	}));

	it('should not disappear after 0.5s if highlighted again', fakeAsync(() => {
		component.state = state('my_id', 'another_id', 'third_id');
		component.state.lastPlayerUpdate = 'third_id';
		fixture.detectChanges();
		tick(1); // wait for animation
		expect(getPlayerTextShadow(2)).not.toBe('none');
		
		tick(400); // wait for timeout
		fixture.detectChanges();
		expect(getPlayerTextShadow(2)).not.toBe('none'); // still visible

		component.state = state('my_id', 'another_id', 'third_id');
		component.state.lastPlayerUpdate = 'third_id';
		fixture.detectChanges();

		tick(400); // wait for animation
		fixture.detectChanges();
		expect(getPlayerTextShadow(2)).not.toBe('none');

		tick(101); // wait for animation
		fixture.detectChanges();
		expect(getPlayerTextShadow(2)).toBe('none');
	}));

	function getPlayerTextShadow(index: number): string {
		let playerElm = fixture.debugElement.queryAll(By.css('.user-name'))[index].nativeElement;
		return window.getComputedStyle(playerElm).textShadow;
	}
});
