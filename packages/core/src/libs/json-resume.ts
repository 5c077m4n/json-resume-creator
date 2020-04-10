import { readJSON, writeJSON, ensureFile } from 'fs-extra';
import fetch from 'node-fetch';

import { Resume } from '../interfaces/resume';
export async function writeExampleResume(toPath = './resume.json'): Promise<void> {
	await ensureFile(toPath);
	const exampleResume: Resume = await readJSON('../assets/resume.json');
	await writeJSON(toPath, exampleResume);
}

export async function getRemoteJsonResume(url: string): Promise<Resume> {
	if (typeof url !== 'string' || !url.endsWith('.json')) throw Error('The given URL is invalid.');

	const response = await fetch(url);
	if (!response.ok) throw Error('There was an error in getting the requested json.');

	const json = await response.json();
	return json as Resume;
}
