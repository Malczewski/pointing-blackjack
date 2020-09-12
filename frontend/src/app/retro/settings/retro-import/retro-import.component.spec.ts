import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { RetroImportComponent } from './retro-import.component';
import { RetroModule } from '@app/retro/retro.module';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RetroHistoryService, RetroSession } from '@app/retro/retro-history.service';
import { MatDialogRef } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { RetroConfig } from '@app/retro/retro-state.class';
import { noop } from 'rxjs';

describe('RetroImportComponent', () => {
	let component: RetroImportComponent;
	let fixture: ComponentFixture<RetroImportComponent>;

	let historySpy: jasmine.SpyObj<RetroHistoryService>;
	let snackSpy: jasmine.SpyObj<MatSnackBar>;
	let dialogSpy: jasmine.SpyObj<MatDialogRef<any>>;
	let fileContent: string;

	beforeEach(async(() => {
		historySpy = jasmine.createSpyObj(['getSessions', 'saveSession']);
		historySpy.getSessions.and.returnValue({aaa: {
			config: {} as RetroConfig, 
			startDate: '', 
			sessionId: '123', 
			messages: []
		}});
		snackSpy = jasmine.createSpyObj(['open']);
		dialogSpy = jasmine.createSpyObj(['close']);
		spyOn(window, 'FileReader').and.returnValue({
			readAsText: noop,
			addEventListener: (event, fn) => fn({target: {
				result: fileContent
			}})
		} as any);
		TestBed.configureTestingModule({
			imports: [RetroModule],
			declarations: [ RetroImportComponent ],
			providers: [
				{provide: RetroHistoryService, useValue: historySpy},
				{provide: MatSnackBar, useValue: snackSpy},
				{provide: MatDialogRef, useValue: dialogSpy}
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RetroImportComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('cancel', () => {
		fixture.debugElement.query(By.css('[mat-dialog-actions] button:first-child')).nativeElement.click();
		expect(dialogSpy.close).toHaveBeenCalledWith();
	});

	it('import', () => {
		fixture.debugElement.query(By.css('[mat-dialog-actions] button:last-child')).nativeElement.click();
		expect(dialogSpy.close).not.toHaveBeenCalledWith();
		fixture.debugElement.query(By.css('mat-row')).nativeElement.click();
		fixture.detectChanges();
		fixture.debugElement.query(By.css('[mat-dialog-actions] button:last-child')).nativeElement.click();
		expect(dialogSpy.close).toHaveBeenCalled();
		expect(dialogSpy.close.calls.mostRecent().args[0].sessionId).toBe('123');
	});

	function fileEvent({ name = 'file.txt', content = '', type = 'application/json', lastModified = new Date() }) {
		fileContent = content;
		const blob = new Blob([content], { type });
		
		(blob as any).lastModifiedDate = lastModified;
	
		return {
			target: {
				files: [new File([blob], name)]
			}
		};
	}

	it('upload file success', () => {
		let content = JSON.stringify({
			sessionId: '123',
			startDate: 'today',
			messages: [],
			config: {}
		} as RetroSession);
		component.onFileChanged(fileEvent({content}));
		fixture.detectChanges();
		expect(component.selectedState.sessionId).toBe('123');
		expect(historySpy.saveSession).toHaveBeenCalled();
	});

	it('upload file invalid session', () => {
		let content = JSON.stringify({
			messages: [],
			config: {}
		} as RetroSession);
		component.onFileChanged(fileEvent({content}));
		expect(component.selectedState).toBeUndefined();
		expect(historySpy.saveSession).not.toHaveBeenCalled();
		expect(snackSpy.open).toHaveBeenCalled();
	});

	it('upload file invalid file', () => {
		component.onFileChanged(fileEvent({content: 'blabla'}));
		fixture.detectChanges();
		expect(component.selectedState).toBeUndefined();
		expect(historySpy.saveSession).not.toHaveBeenCalled();
		expect(snackSpy.open).toHaveBeenCalled();
	});
	
});
