import { readJSON, writeJSON, ensureFile } from 'fs-extra';
import fetch from 'node-fetch';

import { run } from './run-command';
import { Resume } from '../interfaces/resume';

export { getPagePdf } from './get-pdf';

const pkgNameRegex = /^@json-resume-creator\/theme-[\w-]+$/;

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

export async function addTheme(pkgName: string): Promise<void> {
	if (!pkgNameRegex.test(pkgName)) throw Error('Invalid theme package name.');
	await run(`npm install --save ${pkgName}`);
}

export async function applyTheme(pkgName: string, json: Resume): Promise<unknown> {
	if (!pkgNameRegex.test(pkgName)) throw Error('Invalid theme package name.');
	const themePkg = await import(pkgName);
	return themePkg(json);
}
