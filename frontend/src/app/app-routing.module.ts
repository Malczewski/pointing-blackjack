import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { IsAuthenticatedGuard } from './common/is-authenticated.guard';
import { RoomComponent } from './pointing/room/room.component';
import { DisconnectHookGuard } from 'src/app/common/disconnect-hook.guard';


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
