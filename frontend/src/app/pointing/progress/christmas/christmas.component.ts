import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ProgressAnimation } from '@pointing/progress/progress-animation.class';

@Component({
	selector: 'christmas',
	templateUrl: './christmas.component.html',
	styleUrls: ['./christmas.component.scss'],
	animations: [ProgressAnimation.defaultAnimation(true)],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChristmasComponent {

	@Input() progress: number;

	getState(threshold: number): string {
		return this.progress >= threshold ? 'show' : 'hide';
	}

}
