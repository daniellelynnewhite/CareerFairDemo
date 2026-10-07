import { test, expect } from '@playwright/test';
import { homepageIsLoaded } from '../helperFunctions/homepageHelperFunctions.js';

// command to run: npx playwright test nonDiscriminationPage.spec.js
// command to run with UI visible: npx playwright test nonDiscriminationPage.spec.js --debug

//TODO: Add Tests for Non-Discrimination Page

test.describe('nonDiscriminationPage', () => {
    test.beforeEach('before test', async ({ page }) => {
        await homepageIsLoaded(page);
    });

    test.afterEach('after test', async ({ page }) => {
        await page.close();
    });

    test('goes to Non-Discrimination Page', async ({ page }) => {
        // add tests here
    });
});