import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './home/home/home.component';

@NgModule({
	declarations: [
	AppComponent,
	LoginComponent,
	HomeComponent
	],
	imports: [
	BrowserModule,
	AppRoutingModule,
	HttpClientModule,
	FormsModule,
	NgbModule
	],
	providers: [CookieService],
	bootstrap: [AppComponent]
})
export class AppModule { }
