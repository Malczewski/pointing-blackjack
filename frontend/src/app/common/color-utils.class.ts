import * as _ from 'lodash';
export class ColorUtils {

	static blendColors(color1: string, color2: string, percentage: number): string {
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
	}
}
