import { async, ComponentFixture, TestBed, fakeAsync, tick, flush, discardPeriodicTasks } from '@angular/core/testing';

import { RoomLogComponent } from './room-log.component';
import { RoomState } from '@pointing/room-state.class';
import * as _ from 'lodash';

describe('RoomLogComponent', () => {
	let component: RoomLogComponent;
	let fixture: ComponentFixture<RoomLogComponent>;
	let state: RoomState;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [RoomLogComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		state = {
			log: []
		} as RoomState;
		fixture = TestBed.createComponent(RoomLogComponent);
		component = fixture.componentInstance;
		component.state = state;
	});

	it('should create', () => {
		fixture.detectChanges();
		expect(component).toBeTruthy();
	});

	it('should show messages in reverse order', () => {
		state.log = [
			{text: 'knock-knock', timestamp: new Date().getTime() - 60000},
			{text: 'who is there?', timestamp: new Date().getTime() - 10000}
		];
		fixture.detectChanges();
		const compiled: HTMLElement = fixture.debugElement.nativeElement;
		expect(getTimestamps(compiled)).toEqual(['a few seconds ago', 'a minute ago']);

		let messages = compiled.querySelectorAll('.message .message-text');
		expect(_.map(messages, elm => elm.textContent.trim())).toEqual(['who is there?', 'knock-knock']);
	});

	it('should update messages on changing state', () => {
		const compiled: HTMLElement = fixture.debugElement.nativeElement;
		fixture.detectChanges();
		expect(compiled.querySelectorAll('.message .message-text').length).toBe(0);
		component.state = {
			log: [
				{text: 'knock-knock', timestamp: new Date().getTime() - 60000}
			]
		} as RoomState;
		component.ngOnChanges({state: {
			currentValue: component.state,
			previousValue: state
		} as any});
		fixture.detectChanges();
		expect(compiled.querySelectorAll('.message .message-text').length).toBe(1);
	});

	function getTimestamps(element: HTMLElement): string[] {
		let timestamps = element.querySelectorAll('.message .message-time');
		return _.map(timestamps, elm => elm.textContent.trim());
	}

	it('should update labels every N seconds', fakeAsync(() => {
		state.log = [
			{text: 'knock-knock', timestamp: new Date().getTime() - 60000}
		];
		fixture.detectChanges();
		const compiled: HTMLElement = fixture.debugElement.nativeElement;
		expect(getTimestamps(compiled)).toEqual(['a minute ago']);

		state.log[0].timestamp = new Date().getTime() - 5 * 60000;
		fixture.detectChanges(); // should not update yet
		expect(getTimestamps(compiled)).toEqual(['a minute ago']);
		tick(15000);
		discardPeriodicTasks();
		fixture.detectChanges();
		expect(getTimestamps(compiled)).toEqual(['5 minutes ago']);
	}));
});
