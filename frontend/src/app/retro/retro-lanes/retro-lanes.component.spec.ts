import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroLanesComponent } from './retro-lanes.component';
import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { RetroMessage, RetroState, RetroType, RetroConfig, MessageSubtype, MessageType } from '@app/retro/retro-state.class';
import * as _ from 'lodash';
import { By } from '@angular/platform-browser';

@Component({
	selector: 'lane',
	template: '<div></div>'
})
class MockLaneComponent {
	@Input() messages: RetroMessage[];
}
@Component({
	template: '<retro-lanes [state]=state></retro-lanes>'
})
class WrapperComponent {
	state: RetroState;
}

describe('RetroLanesComponent', () => {
	let component: WrapperComponent;
	let fixture: ComponentFixture<WrapperComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [ PerfectScrollbarModule ],
			declarations: [ WrapperComponent, RetroLanesComponent, MockLaneComponent],
			schemas: [ NO_ERRORS_SCHEMA ],
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WrapperComponent);
		component = fixture.componentInstance;
		component.state = state(config(RetroType.startStop), false, []);
		fixture.detectChanges();
	});

	function config(type: RetroType, slowdowns?: boolean, achievements?: boolean): RetroConfig {
		return {type, slowdowns, achievements};
	}

	function message(uid: number, type: MessageType, subtype?: MessageSubtype): RetroMessage {
		return {uid: uid + '', type, subtype} as RetroMessage;
	}

	let start = (uid: number) => message(uid, MessageType.evil, MessageSubtype.start);
	let improveStop = (uid: number) => message(uid, MessageType.evil);
	let goodContinue = (uid: number) => message(uid, MessageType.good);
	let slowdown = (uid: number) => message(uid, MessageType.evil, MessageSubtype.slowdown);
	let achievement = (uid: number) => message(uid, MessageType.good, MessageSubtype.achievement);
	let action = (uid: number) => message(uid, MessageType.action);

	function state(conf: RetroConfig, viewMode: boolean, messages: RetroMessage[]): RetroState {
		return RetroState.of({config: conf, viewMode, messages});
	}

	function getLanes(): MockLaneComponent[] {
		return _.map(fixture.debugElement.queryAll(By.directive(MockLaneComponent)), elem => elem.componentInstance);
	}

	function getMessageIds(): number[][] {
		return _.map(getLanes(), lane => _.map(lane.messages, msg => Number(msg.uid)));
	}

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should regenerate lanes on viewMode change', () => {
		expect(getLanes().length).toBe(3);
		component.state = state(config(RetroType.startStop), true, []);
		fixture.detectChanges();
		expect(getLanes().length).toBe(4);
	});

	it('should regenerate lanes on type change', () => {
		expect(getLanes().length).toBe(3);
		component.state = state(config(RetroType.goodImprove), false, []);
		fixture.detectChanges();
		expect(getLanes().length).toBe(2);
	});

	it('should regenerate lanes on additional options', () => {
		expect(getLanes().length).toBe(3);
		component.state = state(config(RetroType.startStop, false, true), false, []);
		fixture.detectChanges();
		expect(getLanes().length).toBe(4);
	});

	it('should not regenerate lanes on messages change', () => {
		let lanes = getLanes();
		expect(lanes.length).toBe(3);
		component.state = state(config(RetroType.startStop), false, [message(1, MessageType.evil)]);
		fixture.detectChanges();
		_.each(getLanes(), (lane, index) => expect(lane).toBe(lanes[index]));
		expect(lanes.length).toBe(3);
	});

	it('start, stop, continue, slowdowns', () => {
		component.state = state(config(RetroType.startStop, true), false, [
			goodContinue(1),
			improveStop(2),
			slowdown(3),
			achievement(4),
			start(5),
			action(6)
		]);
		fixture.detectChanges();
		expect(getMessageIds()).toEqual([
			[5],
			[2],
			[1, 4],
			[3]
		]);
	});

	it('good, improve, achievements, action', () => {
		component.state = state(config(RetroType.goodImprove, false, true), true, [
			goodContinue(1),
			improveStop(2),
			slowdown(3),
			achievement(4),
			start(5),
			action(6)
		]);
		fixture.detectChanges();
		expect(getMessageIds()).toEqual([
			[1],
			[2, 3, 5],
			[4],
			[6]
		]);
	});
	
	it('good, improve, slowdowns', () => {
		component.state = state(config(RetroType.goodImprove, true, false), false, [
			goodContinue(1),
			improveStop(2),
			slowdown(3),
			achievement(4),
			start(5),
			action(6)
		]);
		fixture.detectChanges();
		expect(getMessageIds()).toEqual([
			[1, 4],
			[2, 5],
			[3]
		]);
	});

	it('llll + slowdowns + achievements', () => {
		component.state = state(config(RetroType.llll, true, true), false, [
			goodContinue(1),
			improveStop(2),
			slowdown(3),
			achievement(4),
			start(5),
			action(6)
		]);
		fixture.detectChanges();
		expect(getMessageIds()).toEqual([
			[1],
			[4],
			[2],
			[5],
			[3],
			[4]
		]);
	});
});
