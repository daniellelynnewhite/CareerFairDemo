import { test, expect } from '@playwright/test';
import { homepageIsLoaded } from './helperFunctions.js';

// command to run: npx playwright test delaysAndClosuresPage.spec.js
// command to run with UI visible: npx playwright test delaysAndClosuresPage.spec.js --debug

// TODO: Refactor Test Validation into functions to reduce code repetition and make tests more readable.

test.describe('delaysAndClosuresPage', () => {
  test.beforeEach('before test', async ({ page }) => {
    await homepageIsLoaded(page);
  });

  test.afterEach('after test', async ({ page }) => {
    await page.close();
  });

  // skipped because there is nothing for children to really see for this test
  test.skip('goes to Delays and Closures Info Page - Validate Loads All Headings', async ({ page }) => {
    await page.getByRole('link', { name: 'Families' }).first().hover();
    await page.getByRole('link', { name: 'School Closures and Delays' }).click();
    await page.getByRole('heading', { name: 'Inclement Weather' }).click();
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
  });

  test('goes to Delays and Closures Info Page - Search Hunt', async ({ page }) => {
    await page.getByRole('link', { name: 'Families' }).first().hover();
    await page.getByRole('link', { name: 'School Closures and Delays' }).click();
    await page.getByRole('tab', { name: 'Elementary' }).click();
    expect(await page.getByRole('link', { name: 'Hunt Elementary' }).first()).toBeVisible();
    await page.getByRole('textbox', { name: 'Search' }).click();
    await page.getByRole('textbox', { name: 'Search' }).fill('hunt');
    await page.getByRole('button', { name: 'Search', exact: true }).click();
    expect(await page.getByRole('link', { name: 'Hunt Elementary' }).first()).toBeVisible();
    expect(await page.getByRole('link', { name: 'Hunt Elementary - 420' })).toBeVisible();
    expect(await page.getByRole('link', { name: 'Hunt Elementary - 419' })).toBeVisible();
    expect(await page.getByRole('link', { name: 'Hunt Elementary - 418' })).toBeVisible();
    expect(await page.getByRole('link', { name: 'Hunt Elementary - 416' })).toBeVisible();
    expect(await page.getByRole('link', { name: 'Hunt Elementary - 412' })).toBeVisible();
    expect(await page.getByRole('link', { name: 'Hunt Elementary - 411' })).toBeVisible();
    expect(await page.getByRole('link', { name: 'Hunt Elementary - 406' })).toBeVisible();
  });

  test('goes to Delays and Closures Info Page - Search Hunt - Slow for children to see each step', async ({ page }) => {
    await page.getByRole('link', { name: 'Families' }).first().hover();
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'School Closures and Delays' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('tab', { name: 'Elementary' }).click();
    expect(await page.getByRole('link', { name: 'Hunt Elementary' }).first()).toBeVisible();
    await page.waitForTimeout(3000);
    await page.getByRole('textbox', { name: 'Search' }).click();
    await page.getByRole('textbox', { name: 'Search' }).fill('hunt');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(3000);
    expect(await page.getByRole('link', { name: 'Hunt Elementary - 420' })).toBeVisible();
    expect(await page.getByRole('link', { name: 'Hunt Elementary - 419' })).toBeVisible();
    expect(await page.getByRole('link', { name: 'Hunt Elementary - 418' })).toBeVisible();
    expect(await page.getByRole('link', { name: 'Hunt Elementary - 416' })).toBeVisible();
    expect(await page.getByRole('link', { name: 'Hunt Elementary - 412' })).toBeVisible();
    expect(await page.getByRole('link', { name: 'Hunt Elementary - 411' })).toBeVisible();
    expect(await page.getByRole('link', { name: 'Hunt Elementary - 406' })).toBeVisible();
  });

  test('goes to Delays and Closures Info Page - Search Filter Hunt Elementary', async ({ page }) => {
    await page.getByRole('link', { name: 'Families' }).first().hover();
    await page.getByRole('link', { name: 'School Closures and Delays' }).click();
    await page.getByRole('tab', { name: 'Elementary' }).click();
    expect(await page.getByRole('link', { name: 'Hunt Elementary' }).first()).toBeVisible();
    await page.getByRole('link', { name: 'Hunt Elementary' }).click();
    await page.waitForTimeout(3000);
    expect(await page.getByRole('link', { name: 'Hunt Elementary - 420' })).toBeVisible();
    expect(await page.getByRole('link', { name: 'Hunt Elementary - 419' })).toBeVisible();
    expect(await page.getByRole('link', { name: 'Hunt Elementary - 418' })).toBeVisible();
    expect(await page.getByRole('link', { name: 'Hunt Elementary - 416' })).toBeVisible();
    expect(await page.getByRole('link', { name: 'Hunt Elementary - 412' })).toBeVisible();
    expect(await page.getByRole('link', { name: 'Hunt Elementary - 411' })).toBeVisible();
    expect(await page.getByRole('link', { name: 'Hunt Elementary - 406' })).toBeVisible();
  });

  test('goes to Delays and Closures Info Page - Search Filter Hunt Elementary Bus Route 420', async ({ page }) => {
    await page.getByRole('link', { name: 'Families' }).first().hover();
    await page.getByRole('link', { name: 'School Closures and Delays' }).click();
    await page.getByRole('tab', { name: 'Elementary' }).click();
    expect(await page.getByRole('link', { name: 'Hunt Elementary' }).first()).toBeVisible();
    await page.getByRole('link', { name: 'Hunt Elementary' }).click();
    await page.waitForTimeout(3000);
    expect(await page.getByRole('link', { name: 'Hunt Elementary - 420' })).toBeVisible();
    await page.getByRole('link', { name: 'Hunt Elementary - 420' }).click();
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'Bus-Route-420.png' });
  });

  test('goes to Delays and Closures Info Page - Click Facebook Link', async ({ page }) => {
    await page.getByRole('link', { name: 'Families' }).first().hover();
    await page.getByRole('link', { name: 'School Closures and Delays' }).click();
    await page.getByRole('heading', { name: 'Inclement Weather' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Facebook' }).click();
    const page1 = await page1Promise;
    await page1.getByText('See more from Puyallup School').first().click();
    await page1.screenshot({ path: 'Facebook-Login.png' });
    await page1.getByRole('button', { name: 'Close' }).click();
  });

  test('goes to Delays and Closures Info Page - Click Instagram Link', async ({ page }) => {
    await page.getByRole('link', { name: 'Families' }).first().hover();
    await page.getByRole('link', { name: 'School Closures and Delays' }).click();
    await page.getByRole('heading', { name: 'Inclement Weather' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Instagram' }).click();
    const page1 = await page1Promise;
    await page1.getByText('See more from').click();
    await page1.screenshot({ path: 'Instagram-Login.png' });
    await page1.getByRole('button', { name: 'Close' }).click();
  });

  test('goes to Delays and Closures Info Page - School Closure and Delay Scenarios Accordians', async ({ page }) => {
    await page.getByRole('link', { name: 'Families' }).first().hover();
    await page.getByRole('link', { name: 'School Closures and Delays' }).click();
    await page.getByRole('heading', { name: 'Inclement Weather' }).click();
    await page.locator('#ae-accrdId-0').click();
    await page.getByText('Schools will operate and').click();
    await page.locator('#ae-accrdId-1').click();
    await page.getByText('All schools in the Puyallup').click();
    await page.locator('#ae-accrdId-2').click();
    await page.getByText('All schools will begin 1-hour').click();
    await page.locator('#ae-accrdId-3').click();
    await page.getByText('All schools will begin 2-').click();
    await page.locator('#ae-accrdId-4').click();
    await page.getByText('Monday, Tuesday, Thursday and').click();
    await page.locator('#ae-accrdId-5').click();
    await page.getByText('Right At School will align').click();
  });
});
