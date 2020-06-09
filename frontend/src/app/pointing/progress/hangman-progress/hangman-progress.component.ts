import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { ProgressAnimation } from '@pointing/progress/progress-animation.class';

@Component({
	selector: 'hangman-progress',
	templateUrl: './hangman-progress.component.html',
	styleUrls: ['./hangman-progress.component.scss'],
	animations: [ProgressAnimation.defaultAnimation()],
})
export class HangmanProgressComponent implements OnInit {

	@Input() progress: number;

	constructor() { }

	ngOnInit(): void {
	}

	/* getProgressClasses(): string {
		let progressPct = this.progress * 100;
		return _.chain(_.range(10, 101, 10))
			.filter(pct => pct <= progressPct)
			.map(pct => `has-${pct}`)
			.join(' ')
			.value();
	} */

	getState(threshold: number): string {
		return this.progress >= threshold ? 'show' : 'hide';
	}

}
