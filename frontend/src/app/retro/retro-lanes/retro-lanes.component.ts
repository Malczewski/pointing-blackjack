import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RetroState, RetroConfig, RetroType, RetroMessage } from '@app/retro/retro-state.class';
import { LaneDefinition, LaneDefinitionType, LaneDefinitions, LanePredicates } from '@app/retro/lanes/lane-definitions.class';
import * as _ from 'lodash';


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
				|| !_.isEqual(this.lastState.config, currentState.config)) {
					this.initLanes();
				}
		}
	}

	private initLanes(): void {
		let types: LaneDefinitionType[];
		if (this.state.config.type === RetroType.startStop)
			types = [LaneDefinitionType.START, LaneDefinitionType.STOP, LaneDefinitionType.CONTINUE];
		else types = [LaneDefinitionType.GOOD, LaneDefinitionType.IMPROVE];

		if (this.state.config.slowdowns)
			types.push(LaneDefinitionType.SLOWDOWNS);
		if (this.state.config.achievements)
			types.push(LaneDefinitionType.ACHIEVEMENTS);
		if (this.state.isViewMode())
			types.push(LaneDefinitionType.ACTION);
		let newLanes = _.map(types, type => LaneDefinitions.getDefinition(type, this.state.config));
		let oldLanes = this.lanes.splice(0, this.lanes.length);
		_.each(newLanes, newLane => {
			let exisingLane = _.find(oldLanes, oldLane => _.isEqual(oldLane, newLane));
			this.lanes.push(exisingLane || newLane);
		});

		this.viewMode = this.state.isViewMode();
		this.lastState = _.cloneDeep(_.pick(this.state, 'config', 'viewMode'));
	}

	getLaneMessages(lane: LaneDefinition): RetroMessage[] {
		return _.filter(this.state.messages, message => LanePredicates.matchFilters(message, lane.filters));
	}



}
