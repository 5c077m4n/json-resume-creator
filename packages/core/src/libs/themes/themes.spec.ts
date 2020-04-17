import { addTheme } from './themes';

describe('Theme testing', () => {
	test('Add an invalid theme', async () => {
		await expect(addTheme('some-package')).rejects.toThrowError();
	});

	test('Add a non existent theme', async () => {
		await expect(addTheme('@json-resume-creator/theme-non-existent')).rejects.toEqual(1);
	});
});
