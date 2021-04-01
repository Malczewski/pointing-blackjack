import { Component, Input } from '@angular/core';
import { ProgressAnimation } from '@pointing/progress/progress-animation.class';
import { ProgressBase } from '@pointing/progress/progress-base.interface';

@Component({
	selector: 'christmas-progress',
	templateUrl: './christmas-progress.component.html',
	styleUrls: ['./christmas-progress.component.scss'],
	animations: [ProgressAnimation.defaultAnimation(true)],
})
export class ChristmasProgressComponent implements ProgressBase {

	@Input() progress: number;

	getState(threshold: number): string {
		return this.progress >= threshold ? 'show' : 'hide';
	}

}
