import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { RetroMessage, MessageType } from '@app/retro/retro-state.class';
import { UserStateService } from '@app/common/user-state.service';
import { RetroApiService } from '@app/retro/retro-api.service';
import { RandomUtils } from '@app/common/random-utils.class';
import { includes } from 'lodash';

@Component({
	selector: 'lane-message',
	templateUrl: './lane-message.component.html',
	styleUrls: ['./lane-message.component.scss']
})
export class LaneMessageComponent implements OnInit {
	@Input() message: RetroMessage;
	@Input() viewMode: boolean;

	randomMessage: string;
	
	tempMessage: string;
	editing: boolean;

	constructor(
		private userState: UserStateService,
		private retroApi: RetroApiService,
		private element: ElementRef<HTMLElement>,
	) { }

	ngOnInit(): void {
		this.initBullshitMessage();
	}

	private initBullshitMessage(): void {
		let words: string[][] = [
			['a', 'ut', 'sit', 'amet', 'dolor', 'tempor', 'eiusmod', 'deserunt', 'cupidatat', 'adipiscing',
				'consectetur', 'consequuntur', 'reprehenderit', 'excepteur sint', 'lorem sed ipsum'],
			['o', 'in', 'est', 'sint', 'lorem', 'mollit', 'officia', 'proident', 'voluptate', 'aliquip ex',
				'veniam quis', 'magna aliqua', 'ut aliquip ex', 'sunt do fugiat', 'commodo consequat']
		];
		let index = 0;
		this.randomMessage = this.message.text.replace(/[\w\d]+/g, (value) => {
			let replacements = words[index++ % 2];
			if (value.length > replacements.length)
				return replacements[replacements.length - 1] + value.substr(replacements.length);
			else return replacements[value.length - 1];
		});
	}

	isMyMessage = (): boolean => {
		return this.message.authorUid === this.userState.getUid();
	}

	toggleLike = (): void => {
		/* istanbul ignore if */
		if (this.isMyMessage())
			return;
		this.retroApi.likeMessage(this.message.uid);
	}

	isLiked = (): boolean => {
		return includes(this.message.likes, this.userState.getUid());
	}

	createAction = (): void => {
		this.retroApi.saveMessage({
			uid: RandomUtils.generateUID(),
			authorName: this.userState.getName(),
			authorUid: this.userState.getUid(),
			type: MessageType.action,
			opened: true,
			text: this.message.text
		});
	}

	showMessage = (): void => {
		/* istanbul ignore if */
		if (!this.viewMode)
			return;
		this.retroApi.showMessage(this.message.uid);
	}

	enterEdit = (): void => {
		this.editing = true;
		this.tempMessage = this.message.text;
		setTimeout(() => {
			let input = this.element.nativeElement.querySelector('textarea') as HTMLElement;
			/* istanbul ignore next */ 
			input?.focus();
		});
	}

	updateMessage = (): void => {
		if (!!this.tempMessage.trim()) {
			this.message.text = this.tempMessage;
			this.retroApi.saveMessage(this.message);
		} else {
			this.retroApi.deleteMessage(this.message.uid);
		}
		this.editing = false;
	}

	isActionItem = (): boolean => {
		return this.message.type === MessageType.action;
	}


}
