import { validateJsonResume } from './validate-json-resume';

describe('Validate Json Resume', () => {
	test('Sanity', async () => {
		const json = await import('../schemas/resume.schema');
		expect(json).toBeTruthy();
	});
});
