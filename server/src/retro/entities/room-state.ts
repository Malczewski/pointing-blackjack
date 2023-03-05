import * as _ from "lodash";
import * as moment from 'moment';
import { RandomUtils } from '../../utils/random-utils';
import { RetroPlayer } from './player';
import { RetroMessage } from './message';
import { LogMessage } from '../../common/log-message';

export enum RetroType {
	startStop = 'startStop',
	goodImprove = 'goodImprove',
	llll = 'llll'
}

export class RetroConfig {
	type: RetroType = RetroType.startStop;
	slowdowns: boolean = false;
	achievements: boolean = false;
}

export class RetroRoomState {
	id: string;
	sessionId: string;
	startDate: string;
	config: RetroConfig;
	viewMode: boolean;
	players: RetroPlayer[];
	messages: RetroMessage[];

	lastMessageUpdate?: string;
	lastPlayerUpdate?: string;

	log: LogMessage[];

	constructor(id: string) {
		this.id = id;
		this.config = new RetroConfig();
		this.sessionId = RandomUtils.generateUID();
		this.startDate = moment().toISOString();
		this.players = [];
		this.viewMode = false;
		this.messages = [];
		this.log = [];
	}

	removePlayer(player: RetroPlayer) {
		_.remove(this.players, { uid: player.uid });
	}

	ensurePlayer(player: RetroPlayer) {
		if (!_.find(this.players, { uid: player.uid }))
			this.addPlayer(player);
	}

	addPlayer(player: RetroPlayer) {
		this.players.push(player);
	}

	setConfig<K extends keyof RetroConfig>(property: K, value: RetroConfig[K]): void {
		this.config[property] = value;
	}

	setViewMode(viewMode: boolean): void {
		this.viewMode = viewMode;
	}

	showMessage(messageUid: string): void {
		let message = _.find(this.messages, msg => msg.uid === messageUid);
		if (message)
			message.opened = true;
	}

	saveMessage(message: RetroMessage): void {
		let existing = _.find(this.messages, msg => msg.uid === message.uid);
		if (existing) {
			existing.text = message.text;
		} else {
			this.messages.push(message);
		}
	}

	deleteMessage(messageUid: string): void {
		_.remove(this.messages, {uid: messageUid});
	}

	toggleLike(messageUid: string, playerUid: string): void {
		let message = _.find(this.messages, msg => msg.uid === messageUid);
		if (!message)
			return;
		message.likes = message.likes || [];
		if (_.includes(message.likes, playerUid)) {
			_.remove(message.likes, like => like === playerUid);
		} else message.likes.push(playerUid);
	}

	addLog(msg: string) {
		this.log.push(new LogMessage(msg));
		if (this.log.length > 20) {
			this.log.splice(0, 1);
		}
	}

}
