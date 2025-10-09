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

  test('screenshot of the homepage', async ({ page }) => {
    const title = await page.title();
    expect(title).toBe('Home - Puyallup School District');
    await page.waitForTimeout(2000);

    await page.screenshot({ path: 'puyallup-homepage.png' });
  });
});
