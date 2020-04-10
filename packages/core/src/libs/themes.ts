import { run } from './run-command';
import { Resume } from '../interfaces/resume';

const pkgNameRegex = /^@json-resume-creator\/theme-[\w-]+$/;

export async function addTheme(pkgName: string): Promise<void> {
	if (!pkgNameRegex.test(pkgName)) throw Error('Invalid theme package name.');
	await run(`npm install --save ${pkgName}`);
}

export async function applyTheme(pkgName: string, json: Resume): Promise<unknown> {
	if (!pkgNameRegex.test(pkgName)) throw Error('Invalid theme package name.');
	const themePkg = await import(pkgName);
	return themePkg(json);
}
