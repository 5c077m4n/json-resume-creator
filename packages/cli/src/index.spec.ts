import { resolve } from 'path';

import { run } from '@json-resume-creator/core';

describe('CLI testing', () => {
	test('Sanity', async () => {
		await run(`node ${resolve('./index')}`);
	});
});
