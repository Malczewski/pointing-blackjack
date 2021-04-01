import { Component, Input } from '@angular/core';
import { ProgressAnimation } from '@pointing/progress/progress-animation.class';
import { ProgressBase } from '@pointing/progress/progress-base.interface';

@Component({
	selector: 'soyuz-progress',
	templateUrl: './soyuz-progress.component.html',
	styleUrls: ['./soyuz-progress.component.scss'],
	animations: [ProgressAnimation.defaultAnimation()],
})
export class SoyuzProgressComponent implements ProgressBase {

	@Input() progress: number;

	getState(threshold: number): string {
		return this.progress >= threshold ? 'show' : 'hide';
	}
}
