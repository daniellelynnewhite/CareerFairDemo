import { test, expect } from '@playwright/test';
import { homepageIsLoaded } from './helperFunctions.js';

// command to run: npx playwright test lushootseedPage.spec.js
// command to run with UI visible: npx playwright test lushootseedPage.spec.js --debug

test.describe('lushootseedPage', () => {
  test.beforeEach('before test', async ({ page }) => {
    await homepageIsLoaded(page);
  });

  test.afterEach('after test', async ({ page }) => {
    await page.close();
  });

  test('goes to Lushootseed Info Page', async ({ page }) => {
    await page.getByRole('menuitem', { name: 'About Us' }).hover();
    await page.getByRole('menuitem', { name: 'Land Acknowledgement' }).click();
    await page.getByRole('link', { name: 'Lushootseed' }).click();
    const title2 = await page.title();
    expect(title2).toBe('Puyallup Tribal Language - Culture');
  });

  test('goes to Lushootseed Info Page - Slow for children to see each step', async ({ page }) => {
    await page.getByRole('link', { name: 'About Us' }).hover();
    await page.waitForTimeout(1000);
    await page.getByLabel('main').getByText('Land Acknowledgement').click();
    await page.waitForTimeout(3000);
    await page.getByRole('link', { name: 'Lushootseed' }).click();
    await page.waitForTimeout(3000);
    const title2 = await page.title();
    expect(title2).toBe('Puyallup Tribal Language - Culture');
  });
});
