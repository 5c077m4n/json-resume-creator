import { readJSON, writeJSON, ensureDir } from 'fs-extra';

import { Resume } from '../interfaces/resume';

export async function writeExampleResume(toPath: string): Promise<void> {
	try {
		const exampleResume: Resume = await readJSON('../assets/resume.json');
		await ensureDir(toPath);
		await writeJSON(toPath, exampleResume);
	} catch (err) {
		console.error(err);
	}
}
