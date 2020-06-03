import { Component, OnInit, Input } from '@angular/core';
import { RetroState } from '@app/retro/retro-state.class';

@Component({
	selector: 'retro-controls',
	templateUrl: './retro-controls.component.html',
	styleUrls: ['./retro-controls.component.scss']
})
export class RetroControlsComponent implements OnInit {

	@Input() state: RetroState;
	
	constructor() { }

	ngOnInit(): void {
	}

}
