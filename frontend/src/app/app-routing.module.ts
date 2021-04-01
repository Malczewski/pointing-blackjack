import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@app/login/login/login.component';
import { IsAuthenticatedGuard } from '@app/common/is-authenticated.guard';

const routes: Routes = [
	{ path: '', redirectTo: 'space', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ 
		path: 'space', 
		loadChildren: () => import('./pointing/pointing.module').then(m => m.PointingModule),
		canActivate: [IsAuthenticatedGuard] 
	},
	{ 
		path: 'time', 
		loadChildren: () => import('./retro/retro.module').then(m => m.RetroModule),
		canActivate: [IsAuthenticatedGuard] 
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
