import { trigger, state, style, transition, animate, keyframes, AnimationTriggerMetadata } from '@angular/animations';

export class ProgressAnimation {
	static defaultAnimation(): AnimationTriggerMetadata {
		return trigger('showHide', [
			// ...
			state('hide', style({
				opacity: 0
			})),
			state('show', style({
				opacity: 1
			})),
			transition('hide => show', animate('0.7s ease-in-out', keyframes([
				style({fill: '#000000', opacity: 0, offset: 0 }),
				style({fill: '#000000', opacity: 1, offset: 1 })
			]))),
			
			transition('show => hide', animate('0.5s ease-in-out', keyframes([
				style({opacity: 1, offset: 0 }),
				style({opacity: 0, offset: 1 })
			]))),
		]);
	}
}
