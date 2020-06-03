import { Component, OnInit, Input } from '@angular/core';
import { RetroState } from '@app/retro/retro-state.class';

@Component({
	selector: 'retro-lanes',
	templateUrl: './retro-lanes.component.html',
	styleUrls: ['./retro-lanes.component.scss']
})
export class RetroLanesComponent implements OnInit {
	@Input() state: RetroState;

	constructor() { }

	ngOnInit(): void {
	}

}
