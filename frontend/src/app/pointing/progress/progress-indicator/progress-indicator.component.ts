import { ChangeDetectionStrategy, Component, ComponentFactoryResolver, ComponentRef,
	Input, OnChanges, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ProgressBase } from '@pointing/progress/progress-base.interface';
import dayjs from 'dayjs';

@Component({
	selector: 'progress-indicator',
	template: `<ng-template #indicator></ng-template>`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressIndicatorComponent implements OnInit, OnChanges {

	@ViewChild('indicator', { read: ViewContainerRef }) private indicatorRef: ViewContainerRef;
	@Input() progress: number;
	@Input() randomSeed: string;

	private component: ComponentRef<ProgressBase>;

	constructor(
		private cfr: ComponentFactoryResolver
	) {}

	ngOnInit() {
		let today = dayjs();
		let indicators = [
			() => this.initSoyuz(),
			() => this.initShuttle(),
			() => this.initStarwars(),
		];
		if (today.month() >= 11 || today.month() === 0 && today.date() < 15) {
			indicators.push(() => this.initChristmas());
			indicators.push(() => this.initChristmas());
			indicators.push(() => this.initChristmas());
		} else if (today.month() >= 2 && today.month() < 5) {
			//indicators.push(() => this.initSpring());
			//indicators.push(() => this.initSpring());
		} else if (today.month() >= 5 && today.month() < 8) {
			//indicators.push(() => this.initSummer());
			//indicators.push(() => this.initSummer());
		}else if (today.month() >= 8 && today.month() < 11) {
			//indicators.push(() => this.initAutumn());
			//indicators.push(() => this.initAutumn());
		}

		let progressIndicatorIndex = (this.randomSeed.length * 31 + dayjs().date()) % indicators.length;
		indicators[progressIndicatorIndex]().then(() => {
			this.component.instance.progress = this.progress || 0;
			this.component.changeDetectorRef.markForCheck();
		});

	}

	ngOnChanges() {
		if (this.component) {
			this.component.instance.progress = this.progress;
		}
	}

	async initHangman() {
		const { HangmanProgressComponent } = await import('../hangman-progress/hangman-progress.component');
		this.component = this.indicatorRef.createComponent(
			this.cfr.resolveComponentFactory(HangmanProgressComponent)
		);
	}

	async initChristmas() {
		const { ChristmasProgressComponent } = await import('../christmas-progress/christmas-progress.component');
		this.component = this.indicatorRef.createComponent(
			this.cfr.resolveComponentFactory(ChristmasProgressComponent)
		);
	}

	async initShuttle() {
		const { ShuttleProgressComponent } = await import('../shuttle-progress/shuttle-progress.component');
		this.component = this.indicatorRef.createComponent(
			this.cfr.resolveComponentFactory(ShuttleProgressComponent)
		);
	}

	async initSoyuz() {
		const { SoyuzProgressComponent } = await import('../soyuz-progress/soyuz-progress.component');
		this.component = this.indicatorRef.createComponent(
			this.cfr.resolveComponentFactory(SoyuzProgressComponent)
		);
	}

	async initStarwars() {
		const { StarwarsProgressComponent } = await import('../starwars-progress/starwars-progress.component');
		this.component = this.indicatorRef.createComponent(
			this.cfr.resolveComponentFactory(StarwarsProgressComponent)
		);
	}

}
