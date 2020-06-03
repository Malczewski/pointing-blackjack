import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { Planets } from '@pointing/home/planets.const';
import { Pages } from '@app/common/pages.class';

interface Door {
	id: string;
	name: string;
	rotation: number;
	glass: number;
}

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	doors: Door[];
	constructor(private router: Router) { }

	ngOnInit() {
		this.doors = _.map(Planets, planet => ({ 
			id: planet, 
			name: planet, url: `assets/planets/${planet}.jpg`,
			rotation: _.random(0, 359, false),
			glass: _.random(100) > 80 ? _.random(2, 3, false) : undefined,
		}));
	}

	enterRoom(id: string): void {
		this.router.navigate(Pages.room(id));
	}

}
