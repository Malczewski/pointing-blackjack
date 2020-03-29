import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { RoomComponent } from './pointing/room/room.component';
import { RoomPlayersComponent } from './pointing/room-players/room-players.component';
import { RoomCardsComponent } from './pointing/room-cards/room-cards.component';
import { RoomResultsComponent } from './pointing/room-results/room-results.component';
import { RoomLogComponent } from './pointing/room-log/room-log.component';
import { ClipboardModule } from 'ngx-clipboard';
import { UidInterceptor } from 'src/app/common/uid.interceptor';
import {NgPipesModule} from 'ngx-pipes';
import {SelfBuildingSquareSpinnerModule, CirclesToRhumbusesSpinnerModule} from 'angular-epic-spinners';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import { HangmanProgressComponent } from './pointing/hangman-progress/hangman-progress.component';
import { ComplicationIndicatorComponent } from './pointing/complication-indicator/complication-indicator.component';

@NgModule({
	declarations: [
	AppComponent,
	LoginComponent,
	HomeComponent,
	RoomComponent,
	RoomPlayersComponent,
	RoomCardsComponent,
	RoomResultsComponent,
	RoomLogComponent,
	HangmanProgressComponent,
	ComplicationIndicatorComponent
	],
	imports: [
	BrowserModule,
	AppRoutingModule,
	HttpClientModule,
	FormsModule,
	ReactiveFormsModule,
	NgbModule,
	ClipboardModule,
	NgPipesModule,
	SelfBuildingSquareSpinnerModule,
	CirclesToRhumbusesSpinnerModule,
	BrowserAnimationsModule,
	//MatInputModule,
	//MatProgressBarModule,
	//MatButtonModule,
	],
	providers: [CookieService, { provide: HTTP_INTERCEPTORS, useClass: UidInterceptor, multi: true }, ],
	bootstrap: [AppComponent]
})
export class AppModule { }
