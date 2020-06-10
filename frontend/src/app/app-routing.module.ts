import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PointingDisconnectHookGuard } from '@pointing/pointing-disconnect-hook.guard';
import { LoginComponent } from '@app/login/login/login.component';
import { HomeComponent } from '@pointing/home/home.component';
import { IsAuthenticatedGuard } from '@app/common/is-authenticated.guard';
import { RoomComponent } from '@app/pointing/room/room.component';
import { RetroHomeComponent } from '@app/retro/retro-home/retro-home.component';
import { RetroRoomComponent } from '@app/retro/retro-room/retro-room.component';
import { RetroDisconnectHookGuard } from '@app/retro/retro-disconnect-hook.guard';


const routes: Routes = [
	{ path: '', redirectTo: 'space', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'space', component: HomeComponent, canActivate: [IsAuthenticatedGuard] },
	{ path: 'space/:id', component: RoomComponent, canActivate: [IsAuthenticatedGuard], canDeactivate: [PointingDisconnectHookGuard] },
	{ path: 'time', component: RetroHomeComponent, canActivate: [IsAuthenticatedGuard] },
	{ path: 'time/:id', component: RetroRoomComponent, canActivate: [IsAuthenticatedGuard], canDeactivate: [RetroDisconnectHookGuard] },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
