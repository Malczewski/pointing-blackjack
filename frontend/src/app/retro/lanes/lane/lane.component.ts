import { Component, OnInit, Input, Predicate, OnChanges, SimpleChanges } from '@angular/core';
import { RetroState, RetroMessage, MessageType } from '@app/retro/retro-state.class';
import { LaneDefinition } from '@app/retro/lanes/lane-definitions.class';
import * as _ from 'lodash';
import { RetroApiService } from '@app/retro/retro-api.service';
import { RandomUtils } from '@app/common/random-utils.class';
import { UserStateService } from '@app/common/user-state.service';
import { trigger, state, style, transition, animate } from '@angular/animations';



@Component({
	selector: 'lane',
	templateUrl: './lane.component.html',
	styleUrls: ['./lane.component.scss'],
	animations: [
		trigger('highlight', [
			state('none', style({'box-shadow': 'none'})),
			state('active', style({'box-shadow': '0 0 5px #00FF00'})),
			transition('none => active', animate('0.2s')),
			transition('active => none', animate('0.5s')),
		]),
	],
})
export class LaneComponent implements OnInit, OnChanges {
	@Input() laneConfig: LaneDefinition;
	@Input() messages: RetroMessage[];
	@Input() viewMode: boolean;
	@Input() lastMessageUpdate: string;

	currentMessages: RetroMessage[];
	highlightedMessages: {[uid: string]: any} = {};

	constructor(
		//private retroApi: RetroApiService,
		//private userStateService: UserStateService,
		) { }

	ngOnInit(): void {
		this.currentMessages = this.messages;
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.messages.currentValue !== changes.messages.previousValue) {
			this.currentMessages = _.map(changes.messages.currentValue, updatedMessage => {
				let existing = _.find(this.currentMessages, 
					msg => msg.uid === updatedMessage.uid && msg.text === updatedMessage.text);
				if (existing) {
					_.extend(existing, updatedMessage);
					return existing;
				} else return updatedMessage;
			});
		}
		if (changes.lastMessageUpdate && changes.lastMessageUpdate.currentValue !== changes.lastMessageUpdate.previousValue)
			this.highlightMessage(changes.lastMessageUpdate.currentValue);
	}

	isActionLane = (): boolean => {
		return this.laneConfig.type === MessageType.action;
	}

	private highlightMessage(uid: string): void {
		if (this.highlightedMessages[uid])
			clearTimeout(this.highlightedMessages[uid]);
		this.highlightedMessages[uid] = setTimeout(() => {
				delete this.highlightedMessages[uid];
		}, 500);
	}

}
