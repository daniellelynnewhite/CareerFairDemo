import { test } from '@playwright/test';
import { homepageIsLoaded } from './helperFunctions.js';

// command to run: npx playwright test homepage.spec.js
// command to run with UI visible: npx playwright test homepage.spec.js --debug

test.describe('homepage', () => {
  test.beforeEach('before test', async ({ page }) => {
    await homepageIsLoaded(page);
  });

  test.afterEach('after test', async ({ page }) => {
    await page.close();
  });

  test('screenshot of the homepage', async ({ page }) => {
    await page.screenshot({ path: 'puyallup-homepage.png' });
  });
});
