import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PointingDisconnectHookGuard } from '@pointing/pointing-disconnect-hook.guard';
import { LoginComponent } from '@app/login/login/login.component';
import { HomeComponent } from '@pointing/home/home.component';
import { IsAuthenticatedGuard } from '@app/common/is-authenticated.guard';
import { RoomComponent } from '@app/pointing/room/room.component';


const routes: Routes = [
	{ path: '', redirectTo: 'space', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'space', component: HomeComponent, canActivate: [IsAuthenticatedGuard] },
	{ path: 'space/:id', component: RoomComponent, canActivate: [IsAuthenticatedGuard], canDeactivate: [PointingDisconnectHookGuard] },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
