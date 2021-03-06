import { Injectable } from '@angular/core';
import { UserStateService } from '@app/common/user-state.service';
import { RetroState, RetroConfig, MessageType, MessageSubtype } from '@app/retro/retro-state.class';
import { map, pick } from 'lodash';

export interface HistoryRetroMessage {
	authorName: string;
	text: string;
	type: MessageType;
	subtype: MessageSubtype;
}

export interface RetroSession {
	config: RetroConfig;
	startDate: string;
	sessionId: string;
	messages: HistoryRetroMessage[];
}

@Injectable({
	providedIn: 'root'
})
export class RetroHistoryService {

	readonly RETRO_SESSIONS = 'retro-sessions';

	constructor(private userState: UserStateService) { }

	saveSession(state: RetroState): void {
		let sessions = this.getSessions();

		sessions[state.sessionId] = this.convertToSession(state);
		this.saveSessions(sessions);
	}

	convertToSession(state: RetroState): RetroSession {
		let session = pick(state, 'config', 'startDate', 'sessionId') as RetroSession;
		let messages = map(state.messages, message => ({
			authorName: message.authorName,
			text: message.text,
			type: message.type,
			subtype: message.subtype
		} as HistoryRetroMessage));
		session.messages = messages;
		return session;
	}

	getSessions(): {[sessionId: string]: RetroSession} {
		try {
			let json = this.userState.getStorage().get(this.RETRO_SESSIONS);
			return json ? JSON.parse(json) : {};
		} catch (e) /* istanbul ignore next */ { 
			console.log(e);
			return {};
		}
	}

	private saveSessions(sessions: {[sessionId: string]: RetroSession}): void {
		return this.userState.getStorage().put(this.RETRO_SESSIONS, JSON.stringify(sessions));
	}
}
