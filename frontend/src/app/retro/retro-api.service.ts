/* istanbul ignore file */
import { Injectable } from '@angular/core';
import { RetroSocket } from '@app/retro/retro-socket.service';
import { Observable, Subject } from 'rxjs';
import { RetroState, RetroConfig, RetroType, MessageType, MessageSubtype, RetroMessage } from '@app/retro/retro-state.class';
import { UserStateService } from '@app/common/user-state.service';
import * as _ from 'lodash';
import { RandomUtils } from '@app/common/random-utils.class';
import * as moment from 'moment';

@Injectable({
	providedIn: 'root'
})
export class RetroApiService {

	//private eventStream: Subject<RetroState>;
	//private state: RetroState;

	constructor(
		private retroSocket: RetroSocket,
		private userState: UserStateService
	) {
		/* this.eventStream = new Subject();
		this.state = RetroState.of({
			sessionId: RandomUtils.generateUID(),
			startDate: moment().toISOString(),
			config: {
				type: RetroType.startStop,
				slowdowns: false,
				achievements: false
			},
			viewMode: false,
			players: [
				{uid: '1', name: 'dummy player'},
				{uid: '2', name: 'heisenberg'},
				{uid: '3', name: `i am cool hacker and will hack this app! tremble, you mortals! 
				HAHAHAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`},
				{uid: '4', name: 'heisenberg'},
				{uid: '5', name: 'heisenberg'},
				{uid: '6', name: 'heisenberg'},
				{uid: '7', name: 'heisenberg'},
				{uid: '8', name: 'heisenberg'},
				{uid: '9', name: 'heisenberg'},
				{uid: '10', name: 'heisenberg'},
				{uid: '11', name: 'heisenberg'},
				{uid: '12', name: 'heisenberg'},
				{uid: '13', name: 'heisenberg'},
				{uid: '14', name: 'heisenberg'},
				{uid: '15', name: 'heisenberg'},
				{uid: '16', name: 'heisenberg'},
				{uid: '17', name: 'heisenberg'},
			],
			messages: [
				{uid: '1', type: MessageType.good, authorUid: '1', authorName: 'dummy playeRL', text: 'Hello world!'},
				{uid: '2', type: MessageType.evil, authorUid: '2', authorName: 'heisenbergI', text: 'Hey there'},
				{uid: '3', type: MessageType.evil, subtype: MessageSubtype.start, authorUid: '1', authorName: 'dummy player', 
					text: 'Long long time ago there was a very long night with long sunset and this was very very very bad so blabla'},
				{uid: '4', type: MessageType.evil, subtype: MessageSubtype.slowdown, authorUid: '3', 
					authorName: `i am cool hacker and will hack this app! tremble, you mortals! 
					HAHAHAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`, text: 'just saying'},
				{uid: '5', type: MessageType.good, authorUid: '2', authorName: 'heisenberg', text: 'Shut up!'},
				{uid: '6', type: MessageType.evil, subtype: MessageSubtype.slowdown, authorUid: '1', 
					authorName: 'dummy player', text: '*cmon* _guys_ ~wtf?~'},
				{uid: '7', type: MessageType.evil, authorUid: '3', 
					authorName: 'i am cool hacker and will hack this app! tremble, you mortals! HAHAHA', text: 'dummy'},
				{uid: '8', type: MessageType.good, subtype: MessageSubtype.achievement, authorUid: '1', authorName: 'dummy player', 
					text: 'close this world'},
			]
		}); */
	}

	getStateObserver(): Observable<RetroState> {
		this.retroSocket.connect();
		return this.retroSocket.fromEvent('refresh');
		//return this.eventStream.asObservable();
	}

	/* private fireChange(): void {
		setTimeout(() => this.eventStream.next(_.cloneDeep(this.state)), 10);
	} */

	joinRoom(roomId: string): void {
		this.retroSocket.emit('join', {
			uid: this.userState.getUid(),
			name: this.userState.getUser().name,
			room: roomId
		});
		this.retroSocket.removeAllListeners('reconnect');
		this.retroSocket.on('reconnect', () => this.joinRoom(roomId));
		// this.state.players.push(this.userState.getUser());
		// this.fireChange();
	}

	setConfig<K extends keyof RetroConfig>(property: K, value: RetroConfig[K]): void {
		this.retroSocket.emit('config', { property, value });
		// this.state.config[property] = value;
		// this.fireChange();
	}
	
	ping(): void {
		this.retroSocket.emit('room:ping');
	}

	viewMode(): void {
		this.retroSocket.emit('view-mode', true);
		// this.state.viewMode = true;
		// this.fireChange();
	}

	writeMode(): void {
		this.retroSocket.emit('view-mode', false);
		// this.state.viewMode = false;
		// this.fireChange();
	}

	showMessage(messageUid: string): void {
		this.retroSocket.emit('message:show', messageUid);
		// _.find(this.state.messages, msg => msg.uid === messageUid).opened = true;
		// this.fireChange();
	}

	saveMessage(message: RetroMessage): void {
		this.retroSocket.emit('message:save', message);
		// let existing = _.find(this.state.messages, msg => msg.uid === message.uid);
		// if (existing) {
		// 	_.extend(existing, message);
		// } else {
		// 	this.state.messages.push(message);
		// }
		// this.fireChange();
	}

	deleteMessage(messageUid: string): void {
		this.retroSocket.emit('message:delete', messageUid);
		// this.state.messages = _.remove(this.state.messages, msg => msg.uid !== messageUid);
		// this.fireChange();
	}

	likeMessage(messageUid: string): void {
		this.retroSocket.emit('message:like', messageUid);
		// let message = _.find(this.state.messages, msg => msg.uid === messageUid);
		// if (!message)
		// 	return;
		// message.likes = message.likes || [];
		// let playerUid = this.userState.getUid();
		// if (_.includes(message.likes, playerUid))
		// 	message.likes.splice(message.likes.indexOf(playerUid), 1);
		// else message.likes.push(playerUid); 
		// this.fireChange();
	}
}
