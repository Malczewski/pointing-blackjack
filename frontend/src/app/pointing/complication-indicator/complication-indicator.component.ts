import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';
@Component({
	selector: 'complication-indicator',
	templateUrl: './complication-indicator.component.html',
	styleUrls: ['./complication-indicator.component.scss']
})
export class ComplicationIndicatorComponent implements OnInit {

	private readonly COMPLEXITY_MAPPING = {
		1: [2],
		2: [1, 2, 5],
		3: _.range(1, 6),
		5: _.range(1, 8),
		8: _.range(1, 11),
		13: _.range(1, 14)
	}

	@Input() complexity: number;

	constructor() { }

	ngOnInit(): void {
	}

	getClasses(): string {
		return _.map(this.COMPLEXITY_MAPPING[this.complexity], i => `show-m${i}`).join(' ');
	}

}
