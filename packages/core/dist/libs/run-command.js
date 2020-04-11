'use strict';
var __assign =
	(this && this.__assign) ||
	function () {
		__assign =
			Object.assign ||
			function (t) {
				for (var s, i = 1, n = arguments.length; i < n; i++) {
					s = arguments[i];
					for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
				}
				return t;
			};
		return __assign.apply(this, arguments);
	};
Object.defineProperty(exports, '__esModule', { value: true });
var child_process_1 = require('child_process');
function run(cmd, envData) {
	if (envData === void 0) {
		envData = {};
	}
	return new Promise(function (resolve, reject) {
		var task = child_process_1.spawn(cmd, {
			cwd: process.cwd(),
			stdio: 'inherit',
			windowsHide: true,
			shell: true,
			env: __assign(__assign({}, process.env), envData),
		});
		task.on('close', function (code) {
			if (code !== 0) return reject(code);
			else return resolve();
		});
	});
}
exports.run = run;
//# sourceMappingURL=run-command.js.map
