import { ColorUtils } from '@app/common/color-utils.class';

describe('ColorUtils', () => {
	describe('blendColors', () => {
		it('100%', () => {
			expect(ColorUtils.blendColors('#ff0000', '#111111', 1)).toBe('#111111');
		});
		it('0%', () => {
			expect(ColorUtils.blendColors('#ff0000', '#111111', 0)).toBe('#ff0000');
		});
		it('50%', () => {
			expect(ColorUtils.blendColors('#ff0000', '#00ff00', 0.5)).toBe('#808000');
		});
		it('invalid', () => {
			expect(ColorUtils.blendColors('#ff0000', 'red', 0.5)).toBe('#ff0000');
			expect(ColorUtils.blendColors('red', '#ff0000', 0.5)).toBe('red');
		});
	});
});
