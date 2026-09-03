import { expect } from '@playwright/test';

// NOTE: Functions are listed in alphabetical order to make it easier to find them. 
// Please keep them in alphabetical order when adding new functions.

export async function homepageIsLoaded(page) {
    await page.goto('https://www.puyallupsd.org/');
    await validateHomepageTitle(page)
}

export async function validateHomepageTitle(page) {
    const title = await page.title();
    expect(title).toBe('Home - Puyallup School District');
    await page.waitForTimeout(2000);
}
