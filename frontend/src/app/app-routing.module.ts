import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { HasCookieGuard } from './common/has-cookie.guard';
import { RoomComponent } from './pointing/room/room.component';
import { DisconnectHookGuard } from 'src/app/common/disconnect-hook.guard';


const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'home', component: HomeComponent, canActivate: [HasCookieGuard] },
	{ path: 'room/:id', component: RoomComponent, canActivate: [HasCookieGuard], canDeactivate: [DisconnectHookGuard] },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
