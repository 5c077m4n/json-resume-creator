import { launch } from 'puppeteer';
import { ensureFile } from 'fs-extra';

export async function getPagePdf(filePath: string): Promise<void> {
	await ensureFile(filePath);

	const browser = await launch();
	const page = await browser.newPage();
	await page.goto(filePath);
	await page.waitForNavigation({ waitUntil: 'networkidle2' });

	await page.emulateMediaType('screen');
	await page.pdf();

	await browser.close();
}
