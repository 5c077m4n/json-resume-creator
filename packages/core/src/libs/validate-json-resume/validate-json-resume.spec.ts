import { validateJsonResume } from './validate-json-resume';

describe('Validate Json Resume', () => {
	test('Sanity - import', async () => {
		const json = await import('../../../assets/resume.json');
		expect(json).toBeTruthy();
	});

	test('Sanity - validation', async () => {
		const json = {};
		const isValid = await validateJsonResume(json);

		expect(isValid).toBeTruthy();
	});

	test('The schame should be valid', async () => {
		const json = await import('../../../assets/resume.json');
		const isValid = await validateJsonResume(json);

		expect(isValid).toBeTruthy();
	});

	test('The schame should be invalid', async () => {
		const json = await import('../../../assets/resume.json');
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(json as any).invalidField = true;
		const isValid = await validateJsonResume(json);

		expect(isValid).toBeFalsy();
	});
});
