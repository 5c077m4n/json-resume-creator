import puppeteer from 'puppeteer';
import { ensureFile } from 'fs-extra';

export async function getPagePdf(filePath: string): Promise<void> {
	await ensureFile(filePath);

	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(filePath);

	await page.emulateMediaType('screen');
	await page.pdf();

	await browser.close();
}
