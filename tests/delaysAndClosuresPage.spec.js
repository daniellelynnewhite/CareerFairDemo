import { test, expect } from '@playwright/test';

// command to run: npx playwright test demo.spec.js
// command to run with UI visible: npx playwright test demo.spec.js --debug

test.describe('Demo', () => {
  test.beforeEach('before test', async ({ page }) => {
    await page.goto('https://www.puyallupsd.org/');
  });

  test.afterEach('after test', async ({ page }) => {
    await page.close();
  });

  test('goes to Delays and Closures Info Page', async ({ page }) => {
    const title = await page.title();
    expect(title).toBe('Home - Puyallup School District');

    await page.getByRole('link', { name: 'Families' }).first().hover();
    await page.getByRole('link', { name: 'School Closures and Delays' }).click();
    await page.getByRole('tab', { name: 'Elementary' }).click();
    await page.getByRole('textbox', { name: 'Search' }).click();
    await page.getByRole('textbox', { name: 'Search' }).fill('hunt');
    await page.getByRole('button', { name: 'Search', exact: true }).click();
    expect(await page.getByRole('link', { name: 'Hunt Elementary' }).first()).toBeVisible();
  });

  test('goes to Delays and Closures Info Page - Slow for children to see each step', async ({ page }) => {
    const title = await page.title();
    expect(title).toBe('Home - Puyallup School District');

    await page.getByRole('link', { name: 'Families' }).first().hover();
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'School Closures and Delays' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('tab', { name: 'Elementary' }).click();
    await page.waitForTimeout(3000);
    await page.getByRole('textbox', { name: 'Search' }).click();
    await page.getByRole('textbox', { name: 'Search' }).fill('hunt');
    await page.waitForTimeout(1000);
    await page.getByRole('button', { name: 'Search', exact: true }).click();
    await page.waitForTimeout(3000);
    expect(await page.getByRole('link', { name: 'Hunt Elementary' }).first()).toBeVisible();
  });
});
