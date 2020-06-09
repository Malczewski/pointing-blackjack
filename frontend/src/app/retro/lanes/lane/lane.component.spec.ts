import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { LaneComponent } from './lane.component';
import { By } from '@angular/platform-browser';
import { RetroMessage, MessageType } from '@app/retro/retro-state.class';
import { Component, NO_ERRORS_SCHEMA, Input } from '@angular/core';
import { LaneDefinition } from '@app/retro/lanes/lane-definitions.class';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
	template: `<lane [messages]="messages" [laneConfig]="lane" [lastMessageUpdate]="lastMessageUpdate" [viewMode]="viewMode"></lane>`,
})
class TestWrapperComponent {
	messages: RetroMessage[];
	lane: LaneDefinition;
	lastMessageUpdate: string;
	viewMode: boolean;
}
@Component({
	selector: 'lane-message',
	template: '<div style="width:50px; height: 50px; background: blue;"></div>'
})
class LaneMessageMock {
	@Input() message: RetroMessage;
}
@Component({
	selector: 'lane-input',
	template: ''
})
class LaneInputMock {}

describe('LaneComponent', () => {
	let component: TestWrapperComponent;
	let fixture: ComponentFixture<TestWrapperComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [NoopAnimationsModule],
			declarations: [ TestWrapperComponent, LaneComponent, LaneMessageMock, LaneInputMock ],
			schemas: [NO_ERRORS_SCHEMA],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(TestWrapperComponent);
		component = fixture.componentInstance;
		component.messages = [message('0', 'who is there?'), message('1', 'hello?'), message('2', 'aaaaa')];
		component.lane = {
			type: MessageType.good
		} as LaneDefinition;
		fixture.detectChanges();
	});

	function message(uid: string, text: string): RetroMessage {
		return {uid, text} as RetroMessage;
	}

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should keep old message instance if text is the same', () => {
		let oldLanes: LaneMessageMock[] = fixture.debugElement.queryAll(By.css('lane-message')).map(elem => elem.componentInstance);
		
		let newMessages = [message('0', 'updated'), message('1', 'hello?'), message('2', 'updated 2')];
		component.messages = newMessages;
		fixture.detectChanges();

		let newLanes: LaneMessageMock[] = fixture.debugElement.queryAll(By.css('lane-message')).map(elem => elem.componentInstance);
		expect(oldLanes[0]).not.toBe(newLanes[0]);
		expect(oldLanes[1]).toBe(newLanes[1]);
		expect(oldLanes[2]).not.toBe(newLanes[2]);
	});

	it('show input when editMode or action lane', () => {
		component.viewMode = true;
		component.lane.type = MessageType.good;
		fixture.detectChanges();
		expect(hasInput()).toBeFalsy();

		component.viewMode = false;
		fixture.detectChanges();
		expect(hasInput()).toBeTruthy();

		component.viewMode = true;
		component.lane.type = MessageType.action;
		fixture.detectChanges();
		expect(hasInput()).toBeTruthy();
	});

	function hasInput(): boolean {
		return !!fixture.debugElement.queryAll(By.css('lane-input')).length;
	}

	it('should highlight player and disappear after 0.5s', fakeAsync(() => {
		expect(getMessageShadow(1)).toBe('none');
		component.lastMessageUpdate = '1';
		fixture.detectChanges();
		tick(1); // wait for animation
		expect(getMessageShadow(1)).not.toBe('none');
		
		tick(501); // wait for timeout
		fixture.detectChanges();
		expect(getMessageShadow(1)).toBe('none');
	}));

	it('should not disappear after 0.5s if highlighted again', fakeAsync(() => {
		component.lastMessageUpdate = '1';
		fixture.detectChanges();
		tick(1); // wait for animation
		expect(getMessageShadow(1)).not.toBe('none');
		
		tick(400); // wait for timeout
		fixture.detectChanges();
		expect(getMessageShadow(1)).not.toBe('none'); // still visible

		component.lastMessageUpdate = '2';
		fixture.detectChanges();
		component.lastMessageUpdate = '1';
		fixture.detectChanges();

		tick(400); // wait for animation
		fixture.detectChanges();
		expect(getMessageShadow(1)).not.toBe('none');

		tick(101); // wait for animation
		fixture.detectChanges();
		expect(getMessageShadow(1)).toBe('none');
	}));

	function getMessageShadow(index: number): string {
		let playerElm = fixture.debugElement.queryAll(By.css('lane-message'))[index].nativeElement;
		return window.getComputedStyle(playerElm).boxShadow;
	}
});
