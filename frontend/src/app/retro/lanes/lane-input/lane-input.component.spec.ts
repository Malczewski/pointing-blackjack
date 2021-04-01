import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaneInputComponent } from './lane-input.component';
import { RetroModule } from '@app/retro/retro.module';
import { UserStateService } from '@app/common/user-state.service';
import { RetroApiService } from '@app/retro/retro-api.service';
import { RetroType, MessageSubtype, MessageType } from '@app/retro/retro-state.class';
import { LaneDefinition } from '@app/retro/lanes/lane-definitions.class';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('LaneInputComponent', () => {
	let component: LaneInputComponent;
	let fixture: ComponentFixture<LaneInputComponent>;
	let apiMock: jasmine.SpyObj<RetroApiService>;
	let userStateMock: jasmine.SpyObj<UserStateService>;

	beforeEach(async(() => {
		apiMock = jasmine.createSpyObj(['saveMessage']);
		userStateMock = jasmine.createSpyObj(['getUid', 'getName']);
		TestBed.configureTestingModule({
			imports: [RetroModule, NoopAnimationsModule],
			declarations: [ LaneInputComponent ],
			providers: [ 
				{provide: UserStateService, useValue: userStateMock},
				{provide: RetroApiService, useValue: apiMock},
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LaneInputComponent);
		component = fixture.componentInstance;
		component.laneConfig = {
			type: MessageType.evil,
			subType: MessageSubtype.slowdown
		} as LaneDefinition;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should add message', () => {
		component.newMessage.text = 'hello';
		component.addMessage();
		fixture.detectChanges();
		expect(apiMock.saveMessage).toHaveBeenCalled();
	});

	it('do not add if empty', () => {
		component.newMessage.text = '';
		component.addMessage();
		fixture.detectChanges();
		expect(apiMock.saveMessage).not.toHaveBeenCalled();
	});

	it('pass type and reset uid', () => {
		component.newMessage.uid = 'my_id';
		component.newMessage.text = 'hello';
		component.addMessage();
		fixture.detectChanges();
		let saved = apiMock.saveMessage.calls.mostRecent().args[0];
		expect(saved.uid).toBe('my_id');
		expect(saved.type).toBe('evil');
		expect(saved.subtype).toBe('slowdown');
		expect(component.newMessage.uid).not.toBe('my_id');
	});
});
