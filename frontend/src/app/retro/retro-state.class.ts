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

export class RetroPlayer {
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
	slowdown = 'slowdown'
}

export class RetroMessage {
	id: string;
	type: MessageType;
	subtype: MessageSubtype;
	message: string;
	visible: boolean;
	authorUid: string;
	authorName: string;
}

export class RetroState {
	static of(jsonState: Partial<RetroState>): RetroState {
		// tslint:disable-next-line:new-parens
		return Object.assign(new RetroState, jsonState);
	}

	sessionId: string;
	config: RetroConfig;
	viewMode: boolean;
	players: RetroPlayer;
	messages: RetroMessage[];

	lastMessageUpdate?: string;
	lastPlayerUpdate?: string;

	isMessageVisible(message: RetroMessage): boolean {
		return message.visible && this.viewMode /*  ||this.config.transparentMode*/;
	}

	isViewMode(): boolean {
		return this.viewMode/*  || this.config.transparentMode */;
	}
}
