import { test } from '@playwright/test';
import { homepageIsLoaded } from './helperFunctions.js';

// command to run: npx playwright test karshnerMuseumPage.spec.js
// command to run with UI visible: npx playwright test karshnerMuseumPage.spec.js --debug

test.describe('karshnerMuseumPage', () => {
  test.beforeEach('before test', async ({ page }) => {
    await homepageIsLoaded(page);
  });

  test.afterEach('after test', async ({ page }) => {
    await page.close();
  });

  test('goes to Karshner Museum webpage', async ({ page }) => {
    await page.getByRole('link', { name: 'Community ' }).hover();
    await page.getByRole('link', { name: 'Karshner Museum' }).click();
    await page.screenshot({ path: 'Karshner-Museum-homepage.png' });
    await page.getByRole('link', { name: 'Exhibits', exact: true }).hover();
    await page.getByRole('link', { name: 'From the Salish Sea to Mt.' }).click();
    await page.screenshot({ path: 'Karshner-Museum-salish-sea.png' });
  });

  test('goes to Karshner Museum webpage - Slow for children to see each step', async ({ page }) => {
    await page.getByRole('link', { name: 'Community ' }).hover();
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Karshner Museum' }).click();
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'Karshner-Museum-homepage.png' });
    await page.getByRole('link', { name: 'Exhibits', exact: true }).hover();
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'From the Salish Sea to Mt.' }).click();
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'Karshner-Museum-salish-sea.png' });
  });
});
