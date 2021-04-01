import { Component, Input } from '@angular/core';
import { ProgressAnimation } from '@pointing/progress/progress-animation.class';
import { ProgressBase } from '@pointing/progress/progress-base.interface';

@Component({
	selector: 'shuttle-progress',
	templateUrl: './shuttle-progress.component.html',
	styleUrls: ['./shuttle-progress.component.scss'],
	animations: [ProgressAnimation.defaultAnimation()],
})
export class ShuttleProgressComponent implements ProgressBase {

	@Input() progress: number;

	getState(threshold: number): string {
		return this.progress >= threshold ? 'show' : 'hide';
	}

}
