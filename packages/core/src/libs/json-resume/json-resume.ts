import { readJSON, writeJSON, ensureFile } from 'fs-extra';
import fetch from 'node-fetch';

import { validateJsonResume } from '../validate-json-resume/validate-json-resume';
import type { Resume } from '../../interfaces/resume';

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
	const isValid = await validateJsonResume(json);
	if (!isValid) throw Error('The received json is invalid.');

	return json as Resume;
}
