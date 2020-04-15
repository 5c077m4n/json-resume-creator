import { run } from '../rc/run-command';
import type { Resume } from '../../interfaces/resume';

const pkgNameRegex = /^@json-resume-creator\/theme-[\w-]+$/;

export async function addTheme(pkgName: string): Promise<void> {
	if (!pkgNameRegex.test(pkgName)) throw Error('Invalid theme package name.');
	await run(`npm install ${pkgName} --no-save --silent`);
}

export async function applyTheme(pkgName: string, json: Resume): Promise<void> {
	if (!pkgNameRegex.test(pkgName)) throw Error('Invalid theme package name.');
	const themePkg = await import(pkgName);
	await run(`${themePkg} build:prod`, { JSON_RESUME: JSON.stringify(json) });
}
