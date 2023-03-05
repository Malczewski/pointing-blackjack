import { async, ComponentFixture, discardPeriodicTasks, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { map } from 'lodash';
import { RoomLogComponent } from './room-log.component';

describe('RoomLogComponent', () => {
	let component: RoomLogComponent;
	let fixture: ComponentFixture<RoomLogComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [RoomLogComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RoomLogComponent);
		component = fixture.componentInstance;
		component.logs = [];
	});

	it('should create', () => {
		fixture.detectChanges();
		expect(component).toBeTruthy();
	});

	it('should show messages in reverse order', () => {
		component.logs = [
			{text: 'knock-knock', timestamp: new Date().getTime() - 60000},
			{text: 'who is there?', timestamp: new Date().getTime() - 10000}
		];
		fixture.detectChanges();
		const compiled: HTMLElement = fixture.debugElement.nativeElement;
		expect(getTimestamps(compiled)).toEqual(['a few seconds ago', 'a minute ago']);

		let messages = compiled.querySelectorAll('.message .message-text');
		expect(map(messages, elm => elm.textContent.trim())).toEqual(['who is there?', 'knock-knock']);
	});

	it('should update messages on changing state', () => {
		const compiled: HTMLElement = fixture.debugElement.nativeElement;
		fixture.detectChanges();
		expect(compiled.querySelectorAll('.message .message-text').length).toBe(0);
		component.logs = [
			{text: 'knock-knock', timestamp: new Date().getTime() - 60000}
		];
		component.ngOnChanges({state: {
			currentValue: component.logs,
			previousValue: []
		} as any});
		fixture.detectChanges();
		expect(compiled.querySelectorAll('.message .message-text').length).toBe(1);
	});

	function getTimestamps(element: HTMLElement): string[] {
		let timestamps = element.querySelectorAll('.message .message-time');
		return map(timestamps, elm => elm.textContent.trim());
	}

	it('should update labels every N seconds', fakeAsync(() => {
		component.logs = [
			{text: 'knock-knock', timestamp: new Date().getTime() - 60000}
		];
		fixture.detectChanges();
		const compiled: HTMLElement = fixture.debugElement.nativeElement;
		expect(getTimestamps(compiled)).toEqual(['a minute ago']);

		component.logs[0].timestamp = new Date().getTime() - 5 * 60000;
		fixture.detectChanges(); // should not update yet
		expect(getTimestamps(compiled)).toEqual(['a minute ago']);
		tick(15000);
		discardPeriodicTasks();
		fixture.detectChanges();
		expect(getTimestamps(compiled)).toEqual(['5 minutes ago']);
	}));
});
