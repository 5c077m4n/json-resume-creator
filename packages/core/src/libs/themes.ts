import { run } from './run-command';

const pkgNameRegex = /^@json-resume-creator\/theme-[\w-]+$/;

export async function addTheme(pkgName: string, global = false): Promise<void> {
	if (!pkgNameRegex.test(pkgName)) throw Error('Invalid theme package name.');
	await run(`npm install ${pkgName}${global ? ' -g' : ''}`);
}

export async function applyTheme(pkgName: string, json: Resume): Promise<void> {
	if (!pkgNameRegex.test(pkgName)) throw Error('Invalid theme package name.');
	const themePkg = await import(pkgName);
	await run(`${themePkg} build`, { JSON_RESUME: JSON.stringify(json) });
}
