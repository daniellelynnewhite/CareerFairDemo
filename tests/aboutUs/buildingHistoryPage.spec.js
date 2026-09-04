import { test, expect } from '@playwright/test';
import { homepageIsLoaded } from '../helperFunctions/homepageHelperFunctions.js';
import { buildingHistoryPageIsLoaded } from '../helperFunctions/buildingHistoryPageHelperFunctions.js';

// command to run: npx playwright test buildingHistoryPage.spec.js
// command to run with UI visible: npx playwright test buildingHistoryPage.spec.js --debug

test.describe('buildingHistoryPage', () => {
  test.beforeEach('before test', async ({ page }) => {
    await homepageIsLoaded(page);
  });

  test.afterEach('after test', async ({ page }) => {
    await page.close();
  });

  test('goes to Building History Page', async ({ page }) => {
    await page.getByRole('link', { name: 'About Us' }).hover();
    await page.getByLabel('Main', { exact: true }).getByText('Building History').click();
    await page.waitForTimeout(2000);
    await buildingHistoryPageIsLoaded(page);
  });

  test('goes to Building History Page - Hunt Elementary School', async ({ page }) => {
    await page.getByRole('link', { name: 'About Us' }).hover();
    await page.getByLabel('Main', { exact: true }).getByText('Building History').click();
    await page.waitForTimeout(2000);
    await buildingHistoryPageIsLoaded(page);
    await page.getByRole('heading', { name: ' Brouillet Elementary School' }).click();
    await page.getByRole('heading', { name: ' Hunt Elementary School' }).click();
    expect(await page.getByText('12801144th Street East')).toBeVisible();
  });

  test.only('goes to Building History Page - Waller Road Elementary School', async ({ page }) => {
    //await page.pause();
    await page.getByRole('link', { name: 'About Us' }).hover();
    await page.getByLabel('Main', { exact: true }).getByText('Building History').click();
    await page.waitForTimeout(2000);
    await buildingHistoryPageIsLoaded(page);
    await page.getByRole('heading', { name: ' Brouillet Elementary School' }).click();
    await page.getByRole('heading', { name: ' Waller Road Elementary' }).click();
    expect(await page.getByText('Waller Road Tacoma, WA 98443')).toBeVisible();
  });
});
