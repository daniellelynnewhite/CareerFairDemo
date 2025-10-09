import { test } from '@playwright/test';
import { homepageIsLoaded } from './helperFunctions.js';

// command to run: npx playwright test artsProgramPage.spec.js
// command to run with UI visible: npx playwright test artsProgramPage.spec.js --debug

test.describe('artsProgramPage', () => {
  test.beforeEach('before test', async ({ page }) => {
    await homepageIsLoaded(page);
  });

  test.afterEach('after test', async ({ page }) => {
    await page.close();
  });

  test('goes to the Arts Program webpage', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Arts Program' }).click();
    await page.getByRole('heading', { name: 'Arts Program' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'View More Events' }).click();
    const page1 = await page1Promise;
    await page1.getByRole('heading', { name: 'The ARTS in Puyallup: LIVE!' }).click();
    await page1.screenshot({ path: 'Hunt-Elementary-Schedule.png' });
  });

  test('goes to the Arts Program webpage - Slow for children to see each step', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Arts Program' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('heading', { name: 'Arts Program' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'View More Events' }).click();
    await page.waitForTimeout(2000);
    const page1 = await page1Promise;
    await page1.getByRole('heading', { name: 'The ARTS in Puyallup: LIVE!' }).click();
    await page.waitForTimeout(2000);
    await page1.screenshot({ path: 'Hunt-Elementary-Schedule.png' });
  });
});
