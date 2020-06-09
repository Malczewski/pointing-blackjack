import { Component, OnInit, Input } from '@angular/core';
import { ProgressAnimation } from '@pointing/progress/progress-animation.class';

@Component({
	selector: 'shuttle-progress',
	templateUrl: './shuttle-progress.component.html',
	styleUrls: ['./shuttle-progress.component.scss'],
	animations: [ProgressAnimation.defaultAnimation()],
})
export class ShuttleProgressComponent implements OnInit {

	@Input() progress: number;
	
	constructor() { }

	ngOnInit(): void {
	}

	getState(threshold: number): string {
		return this.progress >= threshold ? 'show' : 'hide';
	}

}
