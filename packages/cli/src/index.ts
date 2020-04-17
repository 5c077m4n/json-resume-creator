#!/usr/bin/env node

import { program } from 'commander';

(async function main(): Promise<void> {
	await program
		.arguments('<jsonUrl>')
		.option('-t, --theme <type>', 'Choose the theme package that you wish for', '@json-resume-creator/theme-base')
		.option('--html', 'Generate an HTML file of the resume', true)
		.option('--pdf', 'Generate a PDF file of the resume', false)
		.parseAsync();
})();
