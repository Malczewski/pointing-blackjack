import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './home/home/home.component';

import { PointingModule } from 'src/app/pointing/pointing.module';

@NgModule({
	declarations: [
	AppComponent,
	LoginComponent,
	HomeComponent,
	],
	imports: [
	BrowserModule,
	AppRoutingModule,
	FormsModule,
	PointingModule,
	],
	providers: [
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
