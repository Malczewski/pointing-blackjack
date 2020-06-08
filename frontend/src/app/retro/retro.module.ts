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
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { RetroLanesComponent } from './retro-lanes/retro-lanes.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDividerModule} from '@angular/material/divider';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { ResizeableTextareaComponent } from './lanes/resizeable-textarea/resizeable-textarea.component';
import { RetroTimelineComponent } from './retro-timeline/retro-timeline.component';
import { ClipboardModule } from 'ngx-clipboard';


@NgModule({
	declarations: [
		RetroHomeComponent, 
		RetroRoomComponent, 
		RetroSettingsComponent, 
		RetroControlsComponent, 
		RetroPlayersComponent, 
		LaneComponent, 
		LaneMessageComponent, 
		LaneInputComponent, 
		RetroLanesComponent, 
		ResizeableTextareaComponent, 
		RetroTimelineComponent],
	imports: [
		CommonModule,
		TrinityRingsSpinnerModule,
		SocketIoModule,
		NgPipesModule,
		FormsModule,
		BrowserModule,
		BrowserAnimationsModule,
		MatExpansionModule,
		MatSelectModule,
		MatSlideToggleModule,
		MatButtonToggleModule,
		MatTooltipModule,
		MatCheckboxModule,
		MatInputModule,
		MatButtonModule,
		MatBadgeModule,
		MatDividerModule,
		PerfectScrollbarModule,
		ClipboardModule,
		MarkdownModule.forRoot({
			markedOptions: {
				provide: MarkedOptions,
				useValue: {
					gfm: true,
					breaks: true,
				},
			}
		}),
	]
})
export class RetroModule { }
