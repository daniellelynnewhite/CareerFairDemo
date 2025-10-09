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

  test('goes to Native American Education webpage', async ({ page }) => {
    const title = await page.title();
    expect(title).toBe('Home - Puyallup School District');

    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Native American Education' }).click();
    await page.getByRole('heading', { name: 'Native American Education' }).click();
  });

  test('goes to Native American Education webpage - Slow for children to see each step', async ({ page }) => {
    const title = await page.title();
    expect(title).toBe('Home - Puyallup School District');

    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Native American Education' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('heading', { name: 'Native American Education' }).click();
  });
});
