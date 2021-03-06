import { Component, OnInit, Input } from '@angular/core';
import { LaneDefinition } from '@app/retro/lanes/lane-definitions.class';
import { RandomUtils } from '@app/common/random-utils.class';
import { RetroMessage, MessageType } from '@app/retro/retro-state.class';
import { RetroApiService } from '@app/retro/retro-api.service';
import { UserStateService } from '@app/common/user-state.service';

@Component({
	selector: 'lane-input',
	templateUrl: './lane-input.component.html',
	styleUrls: ['./lane-input.component.scss']
})
export class LaneInputComponent implements OnInit {
	@Input() laneConfig: LaneDefinition;

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
			authorName: this.userStateService.getName(),
			authorUid: this.userStateService.getUid(),
			type: this.laneConfig.type,
			subtype: this.laneConfig.subType,
			opened: this.laneConfig.type === MessageType.action,
			text: ''
		};
	}

	addMessage = (): void => {
		if (!this.newMessage.text.trim())
			return;
		this.retroApi.saveMessage(this.newMessage);
		this.resetNewMessage();
	}

}
