import { exec } from 'child_process';

export function run(command: string): Promise<void> {
	return new Promise((resolve, reject) => {
		exec(command, (error, stdout, stderr) => {
			if (error) return reject(error);
			console.log(stdout);
			console.error(stderr);
			return resolve();
		});
	});
}
