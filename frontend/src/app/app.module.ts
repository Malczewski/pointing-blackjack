import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { RoomComponent } from './pointing/room/room.component';
import { RoomPlayersComponent } from './pointing/room-players/room-players.component';
import { RoomCardsComponent } from './pointing/room-cards/room-cards.component';
import { RoomResultsComponent } from './pointing/room-results/room-results.component';
import { RoomLogComponent } from './pointing/room-log/room-log.component';
import { ClipboardModule } from 'ngx-clipboard';
import {NgPipesModule} from 'ngx-pipes';
import {SelfBuildingSquareSpinnerModule, CirclesToRhumbusesSpinnerModule, AtomSpinnerModule} from 'angular-epic-spinners';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HangmanProgressComponent } from './pointing/hangman-progress/hangman-progress.component';
import { ComplicationIndicatorComponent } from './pointing/complication-indicator/complication-indicator.component';
import { ShadePipe } from './common/shade.pipe';
import { SocketIoModule } from 'ngx-socket-io';
import { AppSocket } from 'src/app/common/sockets/app-socket';
import { PointingApiService } from 'src/app/pointing/pointing-api.service';

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
	ComplicationIndicatorComponent,
	ShadePipe
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
	AtomSpinnerModule,
	BrowserAnimationsModule,
	SocketIoModule,
	],
	providers: [
		AppSocket,
		PointingApiService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
