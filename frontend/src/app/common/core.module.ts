import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IsAuthenticatedGuard } from '@app/common/is-authenticated.guard';
import { RoomLogComponent } from '@app/common/room-log/room-log.component';
import { ShadePipe } from '@app/common/shade.pipe';
import { UserStateService } from '@app/common/user-state.service';

@NgModule({
	declarations: [
		ShadePipe,
		RoomLogComponent,
	],
	exports: [
		ShadePipe,
		RoomLogComponent,
	],
	imports: [
		CommonModule,
	],
	providers: [
		IsAuthenticatedGuard,
		UserStateService,

	]
})
export class CoreModule { }
