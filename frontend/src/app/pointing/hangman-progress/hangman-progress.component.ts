import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
@Component({
	selector: 'hangman-progress',
	templateUrl: './hangman-progress.component.html',
	styleUrls: ['./hangman-progress.component.scss']
})
export class HangmanProgressComponent implements OnInit {

	@Input() progress: number;

	constructor() { }

	ngOnInit(): void {
	}

	getProgressClasses(): string {
		let progressPct = this.progress * 100;
		return _.chain(_.range(10, 101, 10))
			.filter(pct => pct <= progressPct)
			.map(pct => `has-${pct}`)
			.join(' ')
			.value();
	}

}
