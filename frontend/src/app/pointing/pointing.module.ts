import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from 'ngx-clipboard';
import { AtomSpinnerModule } from 'angular-epic-spinners';
import { SocketIoModule } from 'ngx-socket-io';
import { PointingApiService } from '@pointing/pointing-api.service';
import { RoomComponent } from '@pointing/room/room.component';
import { RoomPlayersComponent } from '@pointing/room-players/room-players.component';
import { RoomCardsComponent } from '@pointing/room-cards/room-cards.component';
import { RoomResultsComponent } from '@pointing/room-results/room-results.component';
import { RoomLogComponent } from '@pointing/room-log/room-log.component';
import { ComplicationIndicatorComponent } from '@pointing/complication-indicator/complication-indicator.component';
import { NgPipesModule } from 'ngx-pipes';
import { PointingSocket } from '@pointing/pointing-socket';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '@pointing/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { PointingRoutingModule } from '@pointing/routing/pointing-routing.module';
import { CoreModule } from '@app/common/core.module';
import { ProgressIndicatorComponent } from './progress/progress-indicator/progress-indicator.component';
import { StarwarsProgressComponent } from './progress/starwars-progress/starwars-progress.component';

@NgModule({
	declarations: [
		HomeComponent,
		RoomComponent,
		RoomPlayersComponent,
		RoomCardsComponent,
		RoomResultsComponent,
		RoomLogComponent,
		ComplicationIndicatorComponent,
		ProgressIndicatorComponent,
		StarwarsProgressComponent,
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
