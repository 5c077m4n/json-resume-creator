import { readJSON, writeJSON, ensureDir } from 'fs-extra';
import fetch from 'node-fetch';

import { Resume } from '../interfaces/resume';

export async function getRemoteJsonResume(url: string): Promise<Resume | undefined> {
	if (typeof url !== 'string' || !url.length) throw Error('The given URL is invalid.');

	const response = await fetch(url);
	if (!response.ok) throw Error('There was an error in getting the requested json.');

	const json = await response.json();
	return json as Resume;
}

export async function writeExampleResume(toPath = './'): Promise<void> {
	await ensureDir(toPath);
	const exampleResume: Resume = await readJSON('../assets/resume.json');
	await writeJSON(toPath, exampleResume);
}
