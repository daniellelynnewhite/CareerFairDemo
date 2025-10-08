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

  test('goes to Karshner Museum webpage', async ({ page }) => {
    const title = await page.title();
    expect(title).toBe('Home - Puyallup School District');
    await page.waitForTimeout(2000);

    await page.getByRole('link', { name: 'Community ' }).hover();
    await page.getByRole('link', { name: 'Karshner Museum' }).click();
    await page.screenshot({ path: 'Karshner-Museum-homepage.png' });
    await page.getByRole('link', { name: 'Exhibits', exact: true }).hover();
    await page.getByRole('link', { name: 'From the Salish Sea to Mt.' }).click();
    await page.screenshot({ path: 'Karshner-Museum-salish-sea.png' });
  });

  test('goes to Karshner Museum webpage - Slow for children to see each step', async ({ page }) => {
    const title = await page.title();
    expect(title).toBe('Home - Puyallup School District');
    await page.waitForTimeout(2000);

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

  test.skip('goes to Native American Education webpage', async ({ page }) => {
    const title = await page.title();
    expect(title).toBe('Home - Puyallup School District');

    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Native American Education' }).click();
    await page.getByRole('heading', { name: 'Native American Education' }).click();
  });

  test.skip('goes to Native American Education webpage - Slow for children to see each step', async ({ page }) => {
    const title = await page.title();
    expect(title).toBe('Home - Puyallup School District');

    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Native American Education' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('heading', { name: 'Native American Education' }).click();
  });

  test.skip('goes to the Arts Program webpage', async ({ page }) => {
    const title = await page.title();
    expect(title).toBe('Home - Puyallup School District');

    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Arts Program' }).click();
    await page.getByRole('heading', { name: 'Arts Program' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'View More Events' }).click();
    const page1 = await page1Promise;
    await page1.getByRole('heading', { name: 'The ARTS in Puyallup: LIVE!' }).click();
    await page1.getByRole('link', { name: 'Hunt Elementary Orchestra and' }).click();
    await page1.screenshot({ path: 'Hunt-Elementary-Schedule.png' });
  });

  test.skip('goes to the Arts Program webpage - Slow for children to see each step', async ({ page }) => {
    const title = await page.title();
    expect(title).toBe('Home - Puyallup School District');

    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Arts Program' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('heading', { name: 'Arts Program' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'View More Events' }).click();
    await page.waitForTimeout(2000);
    const page1 = await page1Promise;
    await page1.getByRole('heading', { name: 'The ARTS in Puyallup: LIVE!' }).click();
    await page1.getByRole('link', { name: 'Hunt Elementary Orchestra and' }).click();
    await page.waitForTimeout(2000);
    await page1.screenshot({ path: 'Hunt-Elementary-Schedule.png' });
  });

  test.skip('goes to the Technology webpage', async ({ page }) => {
    const title = await page.title();
    expect(title).toBe('Home - Puyallup School District');

    await page.getByRole('link', { name: 'Services', exact: true }).hover();
    const page1Promise = page.waitForEvent('popup');
    await page.getByLabel('main').getByText('Technology(opens in new').click();
    const page1 = await page1Promise;
    await page1.getByText('Read More about Cybersecurity').click();
    await page1.screenshot({ path: 'Cybersecurity.png' });
    await page1.getByRole('button', { name: 'Close' }).click();
    await page1.getByText('Read More about Student').click();
    await page1.screenshot({ path: 'Student-Regulations.png' });
    await page1.getByRole('button', { name: 'Close' }).click();
  });

  test.skip('goes to the Technology webpage - Slow for children to see each step', async ({ page }) => {
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
    await page1.getByText('Read More about Student').click();
    await page.waitForTimeout(2000);
    await page1.screenshot({ path: 'Student-Regulations.png' });
    await page1.getByRole('button', { name: 'Close' }).click();
  });
});
