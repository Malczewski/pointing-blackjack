import { TestBed } from '@angular/core/testing';

import { RetroHistoryService } from './retro-history.service';
import { UserStateService } from '@app/common/user-state.service';
import { RetroState, RetroType, MessageType, MessageSubtype } from '@app/retro/retro-state.class';

describe('RetroHistoryService', () => {
	const KEY = 'retro-sessions';
	let service: RetroHistoryService;
	let storage: {[key: string]: string};

	beforeEach(() => {
		storage = {};
		let storageMock = {
			put: (key, value) => storage[key] = value,
			get: (key) => storage[key]
		};
		TestBed.configureTestingModule({
			providers: [
				{provide: UserStateService, useValue: {getStorage: jasmine.createSpy().and.returnValue(storageMock)}}
			]
		});
		service = TestBed.inject(RetroHistoryService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should create storage value if not exist', () => {
		expect(storage[KEY]).toBeUndefined();
		service.saveSession({} as RetroState);
		expect(storage[KEY]).toBeDefined();
	});

	it('should save session', () => {
		storage[KEY] = '{}';
		service.saveSession({sessionId: '123'} as RetroState);
		expect(storage[KEY]).toContain('123');
	});

	it('should strip redundant info', () => {
		let result = service.convertToSession({
			config: {
				achievements: true,
				slowdowns: false,
				type: RetroType.goodImprove
			},
			viewMode: true,
			startDate: 'today',
			players: [],
			sessionId: '123',
			messages: [{
				authorName: 'user1',
				authorUid: 'uid1',
				text: 'hello',
				uid: '1',
				type: MessageType.good,
				subtype: MessageSubtype.start,
				opened: true,
				likes: ['uid2'],
			}, {
				authorName: 'user2',
				authorUid: 'uid2',
				text: 'bye',
				uid: '2',
				type: MessageType.evil,
				subtype: null,
				opened: false,
				likes: [],
			}],
			lastMessageUpdate: '100'
		} as RetroState);
		expect(result).toEqual({
			config: {
				achievements: true,
				slowdowns: false,
				type: RetroType.goodImprove
			},
			startDate: 'today',
			sessionId: '123',
			messages: [{
				authorName: 'user1',
				text: 'hello',
				type: MessageType.good,
				subtype: MessageSubtype.start,
			}, {
				authorName: 'user2',
				text: 'bye',
				type: MessageType.evil,
				subtype: null
			}]
		});
	});
});
