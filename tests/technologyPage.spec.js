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

  test('goes to the Technology webpage', async ({ page }) => {
    const title = await page.title();
    expect(title).toBe('Home - Puyallup School District');

    await page.getByRole('link', { name: 'Services', exact: true }).hover();
    const page1Promise = page.waitForEvent('popup');
    await page.getByLabel('main').getByText('Technology(opens in new').click();
    const page1 = await page1Promise;
    await page1.getByText('Read More about Cybersecurity').click();
    await page1.screenshot({ path: 'Cybersecurity.png' });
    await page1.getByRole('button', { name: 'Close' }).click();
  });

  test('goes to the Technology webpage - Slow for children to see each step', async ({ page }) => {
    const title = await page.title();
    expect(title).toBe('Home - Puyallup School District');

    await page.getByRole('link', { name: 'Services', exact: true }).hover();
    await page.waitForTimeout(1000);
    const page1Promise = page.waitForEvent('popup');
    await page.getByLabel('main').getByText('Technology(opens in new').click();
    await page.waitForTimeout(2000);
    const page1 = await page1Promise;
    await page1.getByText('Read More about Cybersecurity').click();
    await page.waitForTimeout(2000);
    await page1.screenshot({ path: 'Cybersecurity.png' });
    await page1.getByRole('button', { name: 'Close' }).click();
  });
});
