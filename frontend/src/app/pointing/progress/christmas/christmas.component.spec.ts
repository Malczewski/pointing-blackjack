import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ChristmasComponent } from './christmas.component';

describe('ChristmasComponent', () => {
	let component: ChristmasComponent;
	let fixture: ComponentFixture<ChristmasComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [NoopAnimationsModule],
			declarations: [ ChristmasComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ChristmasComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
