import { test, expect } from '@playwright/test';
import { homepageIsLoaded } from '../helperFunctions/homepageHelperFunctions.js';

// command to run: npx playwright test superintendentsOfficePage.spec.js
// command to run with UI visible: npx playwright test superintendentsOfficePage.spec.js --debug

//TODO: Add Tests for Superintendents Office Page

test.describe('superintendentsOfficePage', () => {
    test.beforeEach('before test', async ({ page }) => {
        await homepageIsLoaded(page);
    });

    test.afterEach('after test', async ({ page }) => {
        await page.close();
    });

    test('goes to Superintendents Office Page', async ({ page }) => {
        // add tests here
    });
});