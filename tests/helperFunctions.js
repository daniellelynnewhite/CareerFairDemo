import { expect } from '@playwright/test';

export async function validateHomepageTitle(page) {
    const title = await page.title();
    expect(title).toBe('Home - Puyallup School District');
    await page.waitForTimeout(2000);
}

export async function homepageIsLoaded(page) {
    await page.goto('https://www.puyallupsd.org/');
    await validateHomepageTitle(page)
}