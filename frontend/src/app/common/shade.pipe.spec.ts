import { ShadePipe } from './shade.pipe';

describe('ShadePipe', () => {
	let pipe: ShadePipe;
	beforeEach(() => {
		pipe = new ShadePipe();
	});

	it('create an instance', () => {
		expect(pipe).toBeDefined();
	});

	it('make lighter', () => {
		expect(pipe.transform('#ff0000', 0.5)).toBe('#ff8080');
	});

	it('make darken', () => {
		expect(pipe.transform('#ff0000', -0.5)).toBe('#880808');
	});
});
