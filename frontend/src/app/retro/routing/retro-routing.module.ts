import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetroHomeComponent } from '@app/retro/retro-home/retro-home.component';
import { IsAuthenticatedGuard } from '@app/common/is-authenticated.guard';
import { RetroRoomComponent } from '@app/retro/retro-room/retro-room.component';
import { RetroDisconnectHookGuard } from '@app/retro/retro-disconnect-hook.guard';

const routes: Routes = [{ 
	path: '', 
	component: RetroHomeComponent, 
	canActivate: [IsAuthenticatedGuard] 
}, { 
	path: ':id', 
	component: RetroRoomComponent, 
	canActivate: [IsAuthenticatedGuard], 
	canDeactivate: [RetroDisconnectHookGuard] 
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	providers: [RetroDisconnectHookGuard],
})
export class RetroRoutingModule { }