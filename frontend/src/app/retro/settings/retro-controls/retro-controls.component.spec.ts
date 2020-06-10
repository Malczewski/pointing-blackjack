import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { RetroControlsComponent } from './retro-controls.component';
import { RetroApiService } from '@app/retro/retro-api.service';
import { RetroState } from '@app/retro/retro-state.class';
import { By } from '@angular/platform-browser';
import { RetroModule } from '@app/retro/retro.module';
import { RetroExportService } from '@app/retro/retro-export.service';

describe('RetroControlsComponent', () => {
	let component: RetroControlsComponent;
	let fixture: ComponentFixture<RetroControlsComponent>;
	let apiSpy: jasmine.SpyObj<RetroApiService>;
	let exportSpy: jasmine.SpyObj<RetroExportService>;

	beforeEach(async(() => {
		apiSpy = jasmine.createSpyObj(['viewMode', 'writeMode']);
		exportSpy = jasmine.createSpyObj(['exportSession']);
		TestBed.configureTestingModule({
			imports: [RetroModule],
			declarations: [ RetroControlsComponent ],
			providers: [
				{provide: RetroApiService, useValue: apiSpy},
				{provide: RetroExportService, useValue: exportSpy},
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RetroControlsComponent);
		component = fixture.componentInstance;
		component.state = {
			viewMode: false
		} as RetroState;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('viewMode', fakeAsync(() => {
		fixture.debugElement.queryAll(By.css('.mode-selector .mat-button-toggle-label-content'))[1].nativeElement.click();
		fixture.detectChanges();
		expect(apiSpy.viewMode).toHaveBeenCalled();
	}));

	it('editMode', () => {
		component.state.viewMode = true;
		fixture.detectChanges();
		fixture.debugElement.queryAll(By.css('.mode-selector .mat-button-toggle-label-content'))[0].nativeElement.click();
		fixture.detectChanges();
		expect(apiSpy.writeMode).toHaveBeenCalled();
	});

	it('export', () => {
		fixture.debugElement.queryAll(By.css('.fa-download'))[0].nativeElement.click();
		fixture.detectChanges();
		expect(exportSpy.exportSession).toHaveBeenCalled();
	});
});
