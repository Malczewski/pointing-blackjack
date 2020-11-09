import { Component, OnInit, Input } from '@angular/core';
import { ProgressAnimation } from '@pointing/progress/progress-animation.class';

@Component({
	selector: 'soyuz-progress',
	templateUrl: './soyuz-progress.component.html',
	styleUrls: ['./soyuz-progress.component.scss'],
	animations: [ProgressAnimation.defaultAnimation()],
})
export class SoyuzProgressComponent {

	@Input() progress: number;

	getState(threshold: number): string {
		return this.progress >= threshold ? 'show' : 'hide';
	}
}
