import { test } from '@playwright/test';
import { homepageIsLoaded } from './helperFunctions.js';

// command to run: npx playwright test nativeAmericanEducationPage.spec.js
// command to run with UI visible: npx playwright test nativeAmericanEducationPage.spec.js --debug

test.describe('nativeAmericanEducationPage', () => {
  test.beforeEach('before test', async ({ page }) => {
    await homepageIsLoaded(page);
  });

  test.afterEach('after test', async ({ page }) => {
    await page.close();
  });

  test('goes to Native American Education webpage', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Native American Education' }).click();
    await page.getByRole('heading', { name: 'Native American Education' }).click();
  });

  test('goes to Native American Education webpage - Slow for children to see each step', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Native American Education' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('heading', { name: 'Native American Education' }).click();
  });
});
