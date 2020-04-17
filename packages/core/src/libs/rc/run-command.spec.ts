import { run } from './run-command';

describe('RC tests', () => {
	test('Sanity', async () => {
		const res = await run('echo "Sanity test."');
		expect(res).toEqual(0);
	});

	test('Sanity - error', async () => {
		await expect(run('exit 1')).rejects.toEqual(1);
	});
});
