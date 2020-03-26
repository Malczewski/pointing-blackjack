import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { UserStateService } from '../../common/user-state.service';
import { Pages } from '../../common/pages.class';

@Component({
	selector: 'app-login',
	template: `
		<div class="login-container">
			<form role="form" (ngSubmit)="onSubmit()">
				<div class="input-group">
					<input type="text"
						[(ngModel)]="userName"
						class="form-control"
						placeholder="Now, say my name"
						id="name" name="name"
						#name="ngModel"
						required minlength="3" />
					<div class="input-group-append">
						<button type="submit" [disabled]="name.invalid" class="btn btn-icon btn-primary">
							<i class="fa fa-sign-in"></i>
						</button>
					</div>
				</div>
				<div [hidden]="!alertVisible" class="alert alert-info m-t-8 p-t-4 p-b-4">You're God damn right</div>
			</form>
		</div>
	`,
	styles: [`
		.login-container {
			display: flex;
			height: 100%;
			width: 100%;
			justify-content: center;
			align-items: center;
			form {
				display: flex;
			}
		}
	`]
})
export class LoginComponent implements OnInit {
	userName: string;
	alertVisible = false;
	constructor(
		private userStateService: UserStateService,
		private router: Router) { }

	ngOnInit() {
	}

	onSubmit() {
		if (!_.isEmpty(this.userName)) {
			this.userStateService.login(this.userName);
			if (/heisenberg/i.test(this.userName)) {
				this.alertVisible = true;
				setTimeout(() => {
					this.router.navigate(Pages.home());
				}, 2000);
			} else this.router.navigate(Pages.home());
		}
	}


}
