import { readJSON, writeJSON, ensureDir } from 'fs-extra';
import fetch from 'node-fetch';

import { Resume } from '../interfaces/resume';

export async function getRemoteJsonResume(url: string): Promise<Resume | undefined> {
	try {
		const response = await fetch(url);
		if (!response.ok) throw Error('There was an error in getting the requested json.');

		const json = await response.json();
		return json as Resume;
	} catch (err) {
		console.error(err);
	}
}

export async function writeExampleResume(toPath: string): Promise<void> {
	try {
		await ensureDir(toPath);
		const exampleResume: Resume = await readJSON('../assets/resume.json');
		await writeJSON(toPath, exampleResume);
	} catch (err) {
		console.error(err);
	}
}
