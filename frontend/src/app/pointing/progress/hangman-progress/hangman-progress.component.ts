import { Component, Input } from '@angular/core';
import { ProgressAnimation } from '@pointing/progress/progress-animation.class';
import { ProgressBase } from '@pointing/progress/progress-base.interface';

@Component({
	selector: 'hangman-progress',
	templateUrl: './hangman-progress.component.html',
	animations: [ProgressAnimation.defaultAnimation(true)],
})
export class HangmanProgressComponent implements ProgressBase {

	@Input() progress: number;

	getState(threshold: number): string {
		return this.progress >= threshold ? 'show' : 'hide';
	}

}
