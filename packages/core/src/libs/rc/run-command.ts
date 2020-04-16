import { spawn, ChildProcess } from 'child_process';

export function run(cmd: string, envData = {}): Promise<number> {
	return new Promise((resolve, reject) => {
		const task: ChildProcess = spawn(cmd, {
			cwd: process.cwd(),
			stdio: 'inherit',
			windowsHide: true,
			shell: true,
			env: { ...process.env, ...envData },
		});
		task.on('close', (code) => {
			if (code !== 0) return reject(code);
			else return resolve(code);
		});
	});
}
