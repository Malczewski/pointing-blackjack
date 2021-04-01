import { Pipe, PipeTransform } from '@angular/core';
import { ColorUtils } from '@app/common/color-utils.class';
@Pipe({
	name: 'shade'
})
export class ShadePipe implements PipeTransform {

	transform(value: string, percentage: number): string {
		let baseColor = percentage > 0 ? '#ffffff' : '#101010';
		return ColorUtils.blendColors(value, baseColor, Math.abs(percentage));
	}

}
