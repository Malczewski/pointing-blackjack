import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaneMessageComponent } from './lane-message.component';
import { UserStateService } from '@app/common/user-state.service';
import { RetroApiService } from '@app/retro/retro-api.service';
import { MessageType } from '@app/retro/retro-state.class';
import { RetroModule } from '@app/retro/retro.module';
import { By } from '@angular/platform-browser';
import { noop } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('LaneMessageComponent', () => {
	let component: LaneMessageComponent;
	let fixture: ComponentFixture<LaneMessageComponent>;
	let apiMock: jasmine.SpyObj<RetroApiService>;

	beforeEach(async(() => {
		apiMock = jasmine.createSpyObj([ 'likeMessage', 'saveMessage', 'showMessage', 'deleteMessage' ]);
		TestBed.configureTestingModule({
			imports: [RetroModule, NoopAnimationsModule],
			declarations: [ LaneMessageComponent ],
			providers: [
				{provide: UserStateService, useValue: {getUid: () => 'my_id', getName: noop}},
				{provide: RetroApiService, useValue: apiMock},
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LaneMessageComponent);
		component = fixture.componentInstance;
		component.message = {
			uid: '1',
			authorName: 'king',
			authorUid: '123',
			text: 'secret',
			type: MessageType.evil
		};
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	function getText(): string {
		return fixture.debugElement.query(By.css('markdown')).nativeElement.textContent.trim();
	}

	describe('my message', () => {
		beforeEach(() => {
			component.message.authorUid = 'my_id';
			fixture.detectChanges();
		});

		it('should highlight with primary color', () => {
			expect(fixture.debugElement.query(By.css('.author')).classes['mat-text-primary']).toBeTruthy();
			component.message.authorUid = 'not_mine';
			fixture.detectChanges();
			expect(fixture.debugElement.query(By.css('.author')).classes['mat-text-primary']).toBeFalsy();
		});

		it('should show real message', () => {
			expect(getText()).toBe('secret');
		});

		it('should edit message', () => {
			fixture.debugElement.query(By.css('.edit-indicator')).nativeElement.click();
			fixture.detectChanges();
			let input = fixture.debugElement.query(By.css('textarea')).nativeElement;
			input.value = 'not a secret';
			input.dispatchEvent(new Event('input'));
			fixture.detectChanges();
			input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', ctrlKey: true }));
			fixture.detectChanges();
			expect(getText()).toBe('not a secret');
			expect(apiMock.saveMessage).toHaveBeenCalled();
			expect(apiMock.saveMessage.calls.mostRecent().args[0].text).toBe('not a secret');
		});

		it('should cancel editing message', () => {
			fixture.debugElement.query(By.css('.edit-indicator')).nativeElement.click();
			fixture.detectChanges();
			let input = fixture.debugElement.query(By.css('textarea')).nativeElement;
			input.value = 'not a secret';
			input.dispatchEvent(new Event('input'));
			fixture.detectChanges();
			input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
			fixture.detectChanges();
			expect(getText()).toBe('secret');
			expect(apiMock.saveMessage).not.toHaveBeenCalled();
		});

		it('should delete message', () => {
			fixture.debugElement.query(By.css('.edit-indicator')).nativeElement.click();
			fixture.detectChanges();
			let input = fixture.debugElement.query(By.css('textarea')).nativeElement;
			input.value = '';
			input.dispatchEvent(new Event('input'));
			fixture.detectChanges();
			input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', ctrlKey: true }));
			fixture.detectChanges();
			expect(apiMock.deleteMessage).toHaveBeenCalledWith('1');
		});

		it('can show in view mode', () => {
			component.viewMode = true;
			fixture.detectChanges();
			fixture.debugElement.query(By.css('.hidden-mask .fa')).nativeElement.click();
			fixture.detectChanges();
			expect(apiMock.showMessage).toHaveBeenCalledWith('1');
		});

		it('can create an action item', () => {
			component.viewMode = true;
			component.message.opened = true;
			fixture.detectChanges();
			fixture.debugElement.query(By.css('.fa-check-square-o')).nativeElement.click();
			fixture.detectChanges();
			expect(apiMock.saveMessage).toHaveBeenCalled();
			let message = apiMock.saveMessage.calls.mostRecent().args[0];
			expect(message.text).toBe('secret');
			expect(message.uid).not.toBe(component.message.uid);
			expect(message.type).toBe(MessageType.action);
			expect(message.authorUid).toBe('my_id');
		});
	});

	describe('others message', () => {
		beforeEach(() => {
			component.message.authorUid = 'other_uid';
			fixture.detectChanges();
		});
		
		it('should not highlight with primary color', () => {
			expect(fixture.debugElement.query(By.css('.author')).classes['mat-text-primary']).toBeFalsy();
		});

		it('should not show real message', () => {
			expect(getText()).not.toContain('secret');
		});

		it('should not allow editing', () => {
			expect(fixture.debugElement.queryAll(By.css('.edit-indicator')).length).toBe(0);
		});

		it('can show in view mode', () => {
			component.viewMode = true;
			fixture.detectChanges();
			fixture.debugElement.query(By.css('.hidden-mask .fa')).nativeElement.click();
			fixture.detectChanges();
			expect(apiMock.showMessage).toHaveBeenCalledWith('1');
		});

		it('can create an action item', () => {
			component.viewMode = true;
			component.message.opened = true;
			fixture.detectChanges();
			fixture.debugElement.query(By.css('.fa-check-square-o')).nativeElement.click();
			fixture.detectChanges();
			expect(apiMock.saveMessage).toHaveBeenCalled();
			let message = apiMock.saveMessage.calls.mostRecent().args[0];
			expect(message.text).toBe('secret');
			expect(message.uid).not.toBe(component.message.uid);
			expect(message.type).toBe(MessageType.action);
			expect(message.authorUid).toBe('my_id');
		});
		
		it('can like', () => {
			component.viewMode = true;
			component.message.opened = true;
			fixture.detectChanges();
			expect(fixture.debugElement.queryAll(By.css('.fa-thumbs-up')).length).toBe(0);
			fixture.debugElement.query(By.css('.fa-thumbs-o-up')).nativeElement.click();
			fixture.detectChanges();
			expect(apiMock.likeMessage).toHaveBeenCalledWith('1');
		});

		it('show filled icon if already liked', () => {
			component.viewMode = true;
			component.message.opened = true;
			component.message.likes = ['some_id', 'my_id'];
			fixture.detectChanges();
			expect(fixture.debugElement.queryAll(By.css('.fa-thumbs-up')).length).not.toBe(0);
		});
	});

	it('should regenerate bullshit message on change', () => {
		fixture = TestBed.createComponent(LaneMessageComponent);
		component = fixture.componentInstance;
		component.message = {
			uid: '1',
			authorName: 'king',
			authorUid: '123',
			text: 'helloworldhowareyou',
			type: MessageType.evil
		};
		fixture.detectChanges();
		expect(component.randomMessage.length).toBe(component.message.text.length);
	});

	describe('action item', () => {
		beforeEach(() => {
			component.message.type = MessageType.action;
			component.viewMode = true;
			fixture.detectChanges();
		});

		it('no actions', () => {
			expect(fixture.debugElement.queryAll(By.css('.fa-thumbs-o-up')).length).toBe(0);
			expect(fixture.debugElement.queryAll(By.css('.fa-check-square-o')).length).toBe(0);
		});
		
	});
});
