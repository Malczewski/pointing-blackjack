import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RetroState, RetroConfig, RetroType, RetroMessage } from '@app/retro/retro-state.class';
import { LaneDefinition, LaneDefinitionType, LaneDefinitions, LanePredicates } from '@app/retro/lanes/lane-definitions.class';
import { cloneDeep, each, filter, find, isEqual, map, pick } from 'lodash';

@Component({
	selector: 'retro-lanes',
	templateUrl: './retro-lanes.component.html',
	styleUrls: ['./retro-lanes.component.scss']
})
export class RetroLanesComponent implements OnInit, OnChanges {
	@Input() state: RetroState;
	private lastState: Pick<RetroState, 'config' | 'viewMode'>;

	lanes: LaneDefinition[] = [];
	viewMode: boolean;

	constructor() { }

	ngOnInit(): void {
		//this.initLanes();
	}

	ngOnChanges(changes: SimpleChanges): void {
		/* istanbul ignore else */
		if (changes.state.currentValue !== changes.state.previousValue) {
			let currentState = changes.state.currentValue as RetroState;
			if (!this.lastState 
				|| this.lastState.viewMode !== currentState.viewMode 
				|| !isEqual(this.lastState.config, currentState.config)) {
					this.initLanes();
				}
		}
	}

	private initLanes(): void {
		let types: LaneDefinitionType[];
		switch (this.state.config.type) {
			case RetroType.startStop: 
				types = [LaneDefinitionType.START, LaneDefinitionType.STOP, LaneDefinitionType.CONTINUE]; 
				break;
			case RetroType.goodImprove: 
				types = [LaneDefinitionType.GOOD, LaneDefinitionType.IMPROVE]; 
				break;
			case RetroType.llll: 
				types = [LaneDefinitionType.LIKED, LaneDefinitionType.LEARNED, LaneDefinitionType.LACKED, LaneDefinitionType.LONGED_FOR]; 
				break;
		}

		if (this.state.config.slowdowns)
			types.push(LaneDefinitionType.SLOWDOWNS);
		if (this.state.config.achievements)
			types.push(LaneDefinitionType.ACHIEVEMENTS);
		if (this.state.isViewMode())
			types.push(LaneDefinitionType.ACTION);
		let newLanes = map(types, type => LaneDefinitions.getDefinition(type, this.state.config));
		let oldLanes = this.lanes.splice(0, this.lanes.length);
		each(newLanes, newLane => {
			let exisingLane = find(oldLanes, oldLane => isEqual(oldLane, newLane));
			this.lanes.push(exisingLane || newLane);
		});

		this.viewMode = this.state.isViewMode();
		this.lastState = cloneDeep(pick(this.state, 'config', 'viewMode'));
	}

	getLaneMessages(lane: LaneDefinition): RetroMessage[] {
		return filter(this.state.messages, message => LanePredicates.matchFilters(message, lane.filters));
	}



}
