import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { CoreModule } from '@app/common/core.module';
import { ComplicationIndicatorComponent } from '@pointing/complication-indicator/complication-indicator.component';
import { HomeComponent } from '@pointing/home/home.component';
import { PointingApiService } from '@pointing/pointing-api.service';
import { PointingSocket } from '@pointing/pointing-socket';
import { RoomCardsComponent } from '@pointing/room-cards/room-cards.component';
import { RoomPlayersComponent } from '@pointing/room-players/room-players.component';
import { RoomResultsComponent } from '@pointing/room-results/room-results.component';
import { RoomComponent } from '@pointing/room/room.component';
import { PointingRoutingModule } from '@pointing/routing/pointing-routing.module';
import { AtomSpinnerModule } from 'angular-epic-spinners';
import { ClipboardModule } from 'ngx-clipboard';
import { NgPipesModule } from 'ngx-pipes';
import { SocketIoModule } from 'ngx-socket-io';
import { ProgressIndicatorComponent } from './progress/progress-indicator/progress-indicator.component';

@NgModule({
	declarations: [
		HomeComponent,
		RoomComponent,
		RoomPlayersComponent,
		RoomCardsComponent,
		RoomResultsComponent,
		ComplicationIndicatorComponent,
		ProgressIndicatorComponent,
	],
	imports: [
		CommonModule,
		PointingRoutingModule,
		ClipboardModule,
		AtomSpinnerModule,
		SocketIoModule,
		NgPipesModule,
		FormsModule,
		MatButtonModule,
		MatRippleModule,
		CoreModule,
	],
	providers: [
		PointingSocket,
		PointingApiService,
	]
})
export class PointingModule { }
