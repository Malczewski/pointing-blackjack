import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroSettingsComponent } from './retro-settings.component';
import { RetroApiService } from '@app/retro/retro-api.service';
import { RetroModule } from '@app/retro/retro.module';
import { RetroType, RetroState } from '@app/retro/retro-state.class';
import { By } from '@angular/platform-browser';

describe('RetroSettingsComponent', () => {
	let component: RetroSettingsComponent;
	let fixture: ComponentFixture<RetroSettingsComponent>;
	let apiSpy: jasmine.SpyObj<RetroApiService>;

	beforeEach(async(() => {
		apiSpy = jasmine.createSpyObj(['setConfig']);
		TestBed.configureTestingModule({
			imports: [RetroModule],
			declarations: [ RetroSettingsComponent ],
			providers: [{provide: RetroApiService, useValue: apiSpy}]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RetroSettingsComponent);
		component = fixture.componentInstance;
		component.state = {
			config: {
				type: RetroType.startStop
			}
		} as RetroState;
		fixture.detectChanges();
		fixture.debugElement.query(By.css('mat-expansion-panel-header')).nativeElement.click();
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should change type', () => {
		fixture.debugElement.query(By.css('.type-selector')).nativeElement.click();
		fixture.detectChanges();
		fixture.debugElement.queryAll(By.css('mat-option'))[1].nativeElement.click();
		fixture.detectChanges();
		expect(apiSpy.setConfig).toHaveBeenCalledWith('type', RetroType.goodImprove);
	});

	it('should toggle slowdowns', () => {
		fixture.debugElement.query(By.css('.slowdown-toggle input')).nativeElement.click();
		fixture.detectChanges();
		expect(apiSpy.setConfig).toHaveBeenCalledWith('slowdowns', true);
	});
});
