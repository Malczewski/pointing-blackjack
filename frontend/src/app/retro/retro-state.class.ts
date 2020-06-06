import { UserState } from '@app/common/user-state.service';

export enum RetroType {
	startStop = 'startStop',
	goodImprove = 'goodImprove'
}

export class RetroConfig {
	type: RetroType;
	slowdowns: boolean;
	achievements: boolean;
	//transparentMode: boolean;
}

export class RetroPlayer implements UserState {
	uid: string;
	name: string;
}

export enum MessageType {
	good = 'good',
	bad = 'bad',
	action = 'action'
}

export enum MessageSubtype {
	start = 'start',
	achievement = 'achievement',
	slowdown = 'slowdown'
}

export class RetroMessage {
	uid: string;
	type: MessageType;
	subtype?: MessageSubtype;
	text: string;
	opened?: boolean;
	authorUid: string;
	authorName: string;
	likes?: string[];
}

export class RetroState {
	static of(jsonState: Partial<RetroState>): RetroState {
		// tslint:disable-next-line:new-parens
		return Object.assign(new RetroState, jsonState);
	}

	sessionId: string;
	startDate: string;
	config: RetroConfig;
	viewMode: boolean;
	players: RetroPlayer[];
	messages: RetroMessage[];

	lastMessageUpdate?: string;
	lastPlayerUpdate?: string;

	isViewMode(): boolean {
		return this.viewMode/*  || this.config.transparentMode */;
	}
}
