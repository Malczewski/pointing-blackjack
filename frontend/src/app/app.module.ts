import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';

import { PointingModule } from 'src/app/pointing/pointing.module';
import { RetroModule } from '@app/retro/retro.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [
	AppComponent,
	LoginComponent
	],
	imports: [
	BrowserModule,
	AppRoutingModule,
	FormsModule,
	PointingModule,
	RetroModule,
	BrowserAnimationsModule,
	],
	providers: [
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
