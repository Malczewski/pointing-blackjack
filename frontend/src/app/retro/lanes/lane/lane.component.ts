import { Component, OnInit, Input, Predicate } from '@angular/core';
import { RetroState, RetroMessage, MessageType } from '@app/retro/retro-state.class';
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
	@Input() viewMode: boolean;

	constructor(
		//private retroApi: RetroApiService,
		//private userStateService: UserStateService,
		) { }

	ngOnInit(): void {
	}

	isActionLane = (): boolean => {
		return this.laneConfig.type === MessageType.action;
	}

}
