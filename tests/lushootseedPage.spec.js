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

  test('goes to Lushootseed Info Page', async ({ page }) => {
    const title = await page.title();
    expect(title).toBe('Home - Puyallup School District');

    await page.getByRole('menuitem', { name: 'About Us' }).hover();
    await page.getByRole('menuitem', { name: 'Land Acknowledgement' }).click();
    await page.getByRole('link', { name: 'Lushootseed' }).click();
    const title2 = await page.title();
    expect(title2).toBe('Puyallup Tribal Language - Culture');
  });

  test('goes to Lushootseed Info Page - Slow for children to see each step', async ({ page }) => {
    const title = await page.title();
    expect(title).toBe('Home - Puyallup School District');
    await page.waitForTimeout(3000);

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
