import { test, expect } from '@playwright/test';
import { homepageIsLoaded } from '../helperFunctions/homepageHelperFunctions.js';

// command to run: npx playwright test registrationPage.spec.js
// command to run with UI visible: npx playwright test registrationPage.spec.js --debug

//TODO: Add Tests for Registration Page

test.describe('registrationPage', () => {
    test.beforeEach('before test', async ({ page }) => {
        await homepageIsLoaded(page);
    });

    test.afterEach('after test', async ({ page }) => {
        await page.close();
    });

    test('goes to Registration Page', async ({ page }) => {
        // add tests here
    });
});