'use strict';
exports.__esModule = true;
var child_process_1 = require('child_process');
function run(cmd) {
	return new Promise(function (resolve, reject) {
		var task = child_process_1.spawn(cmd, {
			cwd: process.cwd(),
			stdio: 'inherit',
			windowsHide: true,
			shell: true,
		});
		task.on('close', function (code) {
			if (code !== 0) return reject(code);
			else return resolve();
		});
	});
}
exports.run = run;
//# sourceMappingURL=run-command.js.map
