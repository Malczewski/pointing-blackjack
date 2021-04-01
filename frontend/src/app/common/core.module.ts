import { NgModule } from '@angular/core';
import { IsAuthenticatedGuard } from '@app/common/is-authenticated.guard';
import { ShadePipe } from '@app/common/shade.pipe';
import { UserStateService } from '@app/common/user-state.service';

@NgModule({
	declarations: [
		ShadePipe
	],
	exports: [
		ShadePipe
	],
	imports: [
	],
	providers: [
		IsAuthenticatedGuard,
		UserStateService,

	]
})
export class CoreModule { }
