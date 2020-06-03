import { Component, OnInit, Input } from '@angular/core';
import { RetroState } from '@app/retro/retro-state.class';

@Component({
	selector: 'lane',
	templateUrl: './lane.component.html',
	styleUrls: ['./lane.component.scss']
})
export class LaneComponent implements OnInit {
	@Input() state: RetroState;

	constructor() { }

	ngOnInit(): void {
	}

}
