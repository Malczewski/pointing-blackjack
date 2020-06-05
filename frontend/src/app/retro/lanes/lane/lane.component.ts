import { Component, OnInit, Input, Predicate } from '@angular/core';
import { RetroState, RetroMessage } from '@app/retro/retro-state.class';
import { LaneDefinition } from '@app/retro/lanes/lane-definitions.class';
import * as _ from 'lodash';
import { RetroApiService } from '@app/retro/retro-api.service';
import { RandomUtils } from '@app/common/random-utils.class';
import { UserStateService } from '@app/common/user-state.service';



@Component({
	selector: 'lane',
	templateUrl: './lane.component.html',
	styleUrls: ['./lane.component.scss']
})
export class LaneComponent implements OnInit {
	@Input() laneConfig: LaneDefinition;
	@Input() messages: RetroMessage[];

	newMessage: RetroMessage;

	constructor(
		private retroApi: RetroApiService,
		private userStateService: UserStateService,
		) { }

	ngOnInit(): void {
		this.resetNewMessage();
	}

	private resetNewMessage(): void {
		this.newMessage = {
			uid: RandomUtils.generateUID(),
			authorName: this.userStateService.getUser().name,
			authorUid: this.userStateService.getUid(),
			type: this.laneConfig.type,
			subtype: this.laneConfig.subType,
			visible: false,
			text: ''
		};
	}

	addMessage = (): void => {
		this.newMessage.text = this.newMessage.text.replace('\n', '<br/>');
		this.retroApi.saveMessage(this.newMessage);
		this.resetNewMessage();
	}
		



}
