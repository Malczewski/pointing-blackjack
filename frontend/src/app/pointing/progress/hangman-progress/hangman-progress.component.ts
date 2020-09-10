import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import * as _ from 'lodash';
import { ProgressAnimation } from '@pointing/progress/progress-animation.class';

@Component({
	selector: 'hangman-progress',
	templateUrl: './hangman-progress.component.html',
	styleUrls: ['./hangman-progress.component.scss'],
	animations: [ProgressAnimation.defaultAnimation(true)],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HangmanProgressComponent implements OnInit {

	@Input() progress: number;

	constructor() { }

	ngOnInit(): void {
	}

	getState(threshold: number): string {
		return this.progress >= threshold ? 'show' : 'hide';
	}

}
