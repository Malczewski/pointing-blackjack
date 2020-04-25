import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { Planets } from '@app/home/home/planets.const';
import { Pages } from '@app/common/pages.class';

interface Door {
	id: string;
	name: string;
}

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	doors: Door[];
	constructor(private router: Router) { }

	ngOnInit() {
		this.doors = _.map(Planets, planet => ({ id: planet, name: planet, url: `assets/planets/${planet}.jpg` }));
	}

	enterRoom(id: string): void {
		this.router.navigate(Pages.room(id));
	}

}
