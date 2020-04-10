import { spawn, ChildProcess } from 'child_process';

export function run(command: string): Promise<void> {
	return new Promise((resolve, reject) => {
		const task: ChildProcess = spawn(command);

		task.stdout?.on('data', console.log);
		task.stderr?.on('data', console.error);
		task.on('close', (code) => {
			if (code !== 0) return reject(code);
			return resolve();
		});
	});
}
