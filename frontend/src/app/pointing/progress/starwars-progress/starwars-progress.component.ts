import { Component, Input } from '@angular/core';
import { ProgressAnimation } from '@pointing/progress/progress-animation.class';
import { ProgressBase } from '@pointing/progress/progress-base.interface';

@Component({
	selector: 'starwars-progress',
	templateUrl: './starwars-progress.component.html',
	styleUrls: ['./starwars-progress.component.scss'],
	animations: [ProgressAnimation.defaultAnimation()],
})
export class StarwarsProgressComponent implements ProgressBase {

	@Input() progress: number;

	getState(threshold: number): string {
		return this.progress >= threshold ? 'show' : 'hide';
	}
}
