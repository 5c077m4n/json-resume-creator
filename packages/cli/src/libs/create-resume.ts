import { program } from 'commander';
import {} from '@json-resume-creator/core';

export async function createResume(): Promise<void> {
	await program
		.option('-t, --theme <type>', 'Choose the theme package that you wish for', '@json-resume-creator/theme-base')
		.option('--html', 'Generate an HTML file of the resume', true)
		.option('--pdf', 'Generate a PDF file of the resume', false)
		.parseAsync(process.argv);

	return;
}
