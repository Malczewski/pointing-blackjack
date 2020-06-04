import { Component, OnInit, Input, Predicate } from '@angular/core';
import { RetroState, RetroMessage } from '@app/retro/retro-state.class';
import { LaneDefinition } from '@app/retro/lanes/lane-definitions.class';



@Component({
	selector: 'lane',
	templateUrl: './lane.component.html',
	styleUrls: ['./lane.component.scss']
})
export class LaneComponent implements OnInit {
	@Input() laneConfig: LaneDefinition;
	@Input() messages: RetroMessage[];

	constructor() { }

	ngOnInit(): void {
	}



}
