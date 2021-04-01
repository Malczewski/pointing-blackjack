import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@app/common/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { ScalingSquaresSpinnerModule } from 'angular-epic-spinners';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent
	],
	imports: [
		CommonModule,
		AppRoutingModule,
		FormsModule,
		BrowserModule,
		BrowserAnimationsModule,
		CoreModule,
		ScalingSquaresSpinnerModule,
	],
	providers: [
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
