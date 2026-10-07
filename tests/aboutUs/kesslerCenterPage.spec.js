import { test, expect } from '@playwright/test';
import { homepageIsLoaded } from '../helperFunctions/homepageHelperFunctions.js';

// command to run: npx playwright test kesslerCenterPage.spec.js
// command to run with UI visible: npx playwright test kesslerCenterPage.spec.js --debug

// TODO: Add Tests for Kessler Center Page

test.describe('kesslerCenterPage', () => {
    test.beforeEach('before test', async ({ page }) => {
        await homepageIsLoaded(page);
    });

    test.afterEach('after test', async ({ page }) => {
        await page.close();
    });

    test('goes to Kessler Center Page', async ({ page }) => {
        // add tests here
    });
});