import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisconnectHookGuard } from '@pointing/disconnect-hook.guard';
import { LoginComponent } from '@app/login/login/login.component';
import { HomeComponent } from '@app/home/home/home.component';
import { IsAuthenticatedGuard } from '@app/common/is-authenticated.guard';
import { RoomComponent } from '@app/pointing/room/room.component';


const routes: Routes = [
	{ path: '', redirectTo: 'galaxy', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'galaxy', component: HomeComponent, canActivate: [IsAuthenticatedGuard] },
	{ path: 'planet/:id', component: RoomComponent, canActivate: [IsAuthenticatedGuard], canDeactivate: [DisconnectHookGuard] },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
