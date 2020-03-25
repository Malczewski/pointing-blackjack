import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { UserStateService } from '../../common/user-state.service';
import { Pages } from '../../common/pages.class';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	userName: string;
	constructor(
		private userStateService: UserStateService,
		private router: Router) { }

	ngOnInit() {
	}

	onSubmit() {
		if (!_.isEmpty(this.userName)) {
			this.userStateService.login(this.userName);
			this.router.navigate(Pages.home());
		}
	}


}
