import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@pointing/home/home.component';
import { IsAuthenticatedGuard } from '@app/common/is-authenticated.guard';
import { RoomComponent } from '@pointing/room/room.component';
import { PointingDisconnectHookGuard } from '@pointing/pointing-disconnect-hook.guard';


const routes: Routes = [{
	path: '',
	component: HomeComponent,
	canActivate: [IsAuthenticatedGuard] 
}, { 
	path: ':id', 
	component: RoomComponent, 
	canActivate: [IsAuthenticatedGuard], 
	canDeactivate: [PointingDisconnectHookGuard] 
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	providers: [PointingDisconnectHookGuard],
})
export class PointingRoutingModule { }
