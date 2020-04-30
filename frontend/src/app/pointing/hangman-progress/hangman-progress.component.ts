import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
	selector: 'hangman-progress',
	templateUrl: './hangman-progress.component.html',
	styleUrls: ['./hangman-progress.component.scss'],
	animations: [
		trigger('showHide', [
			// ...
			state('hide', style({
				opacity: 0
			})),
			state('show', style({
				opacity: 1
			})),
			transition('hide => show', animate('0.7s ease-in-out', keyframes([
				style({fill: '#000000', opacity: 0, offset: 0 }),
				//style({fill: '#000000', opacity: 1, offset: 0.6 }),
				//style({fill: '#dc3545', opacity: 1, offset: 0.8 }),
				style({fill: '#000000', opacity: 1, offset: 1 })
			]))),
			
			transition('show => hide', animate('0.5s ease-in-out', keyframes([
				style({opacity: 1, offset: 0 }),
				style({opacity: 0, offset: 1 })
			]))),
		]),
	],
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
