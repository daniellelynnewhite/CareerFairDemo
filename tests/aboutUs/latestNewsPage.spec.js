import { test, expect } from '@playwright/test';
import { homepageIsLoaded } from '../helperFunctions/homepageHelperFunctions.js';

// command to run: npx playwright test latestNewsPage.spec.js
// command to run with UI visible: npx playwright test latestNewsPage.spec.js --debug

// TODO: Add Tests for Latest News Page

test.describe('latestNewsPage', () => {
    test.beforeEach('before test', async ({ page }) => {
        await homepageIsLoaded(page);
    });

    test.afterEach('after test', async ({ page }) => {
        await page.close();
    });

    test('goes to Latest News Page', async ({ page }) => {
        // add tests here
    });
});