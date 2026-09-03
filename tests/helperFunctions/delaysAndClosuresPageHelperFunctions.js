import { expect } from '@playwright/test';

// NOTE: Functions are listed in alphabetical order to make it easier to find them. 
// Please keep them in alphabetical order when adding new functions.

export async function inclementWeatherPageIsLoaded(page) {
    expect(await page.getByRole('heading', { name: 'Inclement Weather' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'School Closures and Delays' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'How Weather Decisions Are Made' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Early Morning Road Checks' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'District Terrain and Road' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Who Makes the Final Decision' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'When Families Can Expect a' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'How You Will Be Notified' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Automated Phone Calls, Emails' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Website Alerts' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Social Media' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Local TV/Radio Announcements' })).toBeVisible();
    expect(await page.getByText('School Closure and Delay')).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Family Plan' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Limited Transportation Routes' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Search' })).toBeVisible();
}

export async function searchHuntPageIsLoaded(page) {
    await page.waitForTimeout(5000);
    expect(await page.getByRole('link', { name: 'Hunt Elementary - 420', exact: true })).toBeVisible();
    expect(await page.getByRole('link', { name: 'Hunt Elementary - 419', exact: true })).toBeVisible();
    expect(await page.getByRole('link', { name: 'Hunt Elementary - 418', exact: true })).toBeVisible();
    expect(await page.getByRole('link', { name: 'Hunt Elementary - 416', exact: true })).toBeVisible();
    expect(await page.getByRole('link', { name: 'Hunt Elementary - 412', exact: true })).toBeVisible();
    expect(await page.getByRole('link', { name: 'Hunt Elementary - 411', exact: true })).toBeVisible();
    expect(await page.getByRole('link', { name: 'Hunt Elementary - 406', exact: true })).toBeVisible();
}
