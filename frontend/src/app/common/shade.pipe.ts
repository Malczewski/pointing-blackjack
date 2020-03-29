import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
	name: 'shade'
})
export class ShadePipe implements PipeTransform {

	transform(value: string, percentage: number): string {
		let baseColor = percentage > 0 ? '#ffffff' : '#101010';
		return this.blendColors(value, baseColor, Math.abs(percentage));
	}

	private blendColors(color1: string, color2: string, percentage: number): string {
		let regex = /#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/;
		if (!regex.test(color1) || !regex.test(color2))
			return color1;
		let matcher1 = color1.match(regex);
		let matcher2 = color2.match(regex);

		let rgb1 = _.range(1, 4).map(i => parseInt(matcher1[i], 16));
		let rgb2 = _.range(1, 4).map(i => parseInt(matcher2[i], 16));
		return '#' + _.range(0, 3)
			.map(i => rgb1[i] * (1 - percentage) + rgb2[i] * percentage)
			.map(num => Math.round(num).toString(16))
			.map(str => str.length === 2 ? str : ('0' + str))
			.join('');
		/* return '#' + (0x1000000
			+ (Math.round((rgb1[0] - rgb2[0]) * percentage) + rgb1[0]) * 0x10000
			+ (Math.round((rgb1[1] - rgb2[1]) * percentage) + rgb1[1]) * 0x100
			+ (Math.round((rgb1[2] - rgb2[2]) * percentage) + rgb1[2]))
				.toString(16).slice(1); */
	}

	

}
