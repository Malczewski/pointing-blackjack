import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetroHomeComponent } from './retro-home/retro-home.component';
import { RetroRoomComponent } from './retro-room/retro-room.component';
import { RetroSettingsComponent } from './settings/retro-settings/retro-settings.component';
import { RetroControlsComponent } from './settings/retro-controls/retro-controls.component';
import { RetroPlayersComponent } from './retro-players/retro-players.component';
import { LaneComponent } from './lanes/lane/lane.component';
import { LaneMessageComponent } from './lanes/lane-message/lane-message.component';
import { LaneInputComponent } from './lanes/lane-input/lane-input.component';
import { TrinityRingsSpinnerModule } from 'angular-epic-spinners';
import { SocketIoModule } from 'ngx-socket-io';
import { NgPipesModule } from 'ngx-pipes';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { RetroLanesComponent } from './retro-lanes/retro-lanes.component';



@NgModule({
	declarations: [
		RetroHomeComponent, 
		RetroRoomComponent, 
		RetroSettingsComponent, 
		RetroControlsComponent, 
		RetroPlayersComponent, 
		LaneComponent, 
		LaneMessageComponent, 
		LaneInputComponent, RetroLanesComponent],
	imports: [
		CommonModule,
		TrinityRingsSpinnerModule,
		SocketIoModule,
		NgPipesModule,
		FormsModule,
		BrowserModule,
		BrowserAnimationsModule,
		NgScrollbarModule,
	]
})
export class RetroModule { }
