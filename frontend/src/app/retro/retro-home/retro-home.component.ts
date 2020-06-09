import { Component, OnInit } from '@angular/core';
import { Pages } from '@app/common/pages.class';
import { Router } from '@angular/router';

interface Room {
	id: string;
}

@Component({
	selector: 'retro-home',
	templateUrl: './retro-home.component.html',
	styleUrls: ['./retro-home.component.scss']
})
export class RetroHomeComponent implements OnInit {

	rooms: Room[];

	constructor(private router: Router) { }

	ngOnInit(): void {}

	enterRoom(id: string): void {
		this.router.navigate(Pages.retro(id));
	}

}
