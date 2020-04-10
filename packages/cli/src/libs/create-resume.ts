import { program } from 'commander';

export async function createResume(): Promise<void> {
	program
		.option('-t, --theme <type>', 'Choose the theme package that you wish for', 'base')
		.optin('--html', 'Generate an HTML file of the resume', true)
		.optin('--pdf', 'Generate a PDF file of the resume', false)
		.parse(process.argv);

	return;
}
