import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from 'ngx-clipboard';
import { SelfBuildingSquareSpinnerModule, CirclesToRhumbusesSpinnerModule, AtomSpinnerModule } from 'angular-epic-spinners';
import { SocketIoModule } from 'ngx-socket-io';
import { PointingApiService } from '@pointing/pointing-api.service';
import { RoomComponent } from '@pointing/room/room.component';
import { RoomPlayersComponent } from '@pointing/room-players/room-players.component';
import { RoomCardsComponent } from '@pointing/room-cards/room-cards.component';
import { RoomResultsComponent } from '@pointing/room-results/room-results.component';
import { RoomLogComponent } from '@pointing/room-log/room-log.component';
import { HangmanProgressComponent } from '@pointing/hangman-progress/hangman-progress.component';
import { ComplicationIndicatorComponent } from '@pointing/complication-indicator/complication-indicator.component';
import { ShadePipe } from '@app/common/shade.pipe';
import { NgPipesModule } from 'ngx-pipes';
import { AppSocket } from '@app/common/sockets/app-socket';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
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
		CommonModule,
		ClipboardModule,
		SelfBuildingSquareSpinnerModule,
		CirclesToRhumbusesSpinnerModule,
		AtomSpinnerModule,
		SocketIoModule,
		NgPipesModule,
		FormsModule,
	],
	providers: [
		AppSocket,
		PointingApiService,
	]
})
export class PointingModule { }
