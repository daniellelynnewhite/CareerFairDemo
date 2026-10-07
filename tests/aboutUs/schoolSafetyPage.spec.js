import { test, expect } from '@playwright/test';
import { homepageIsLoaded } from '../helperFunctions/homepageHelperFunctions.js';

// command to run: npx playwright test schoolSafety.spec.js
// command to run with UI visible: npx playwright test schoolSafety.spec.js --debug

//TODO: Add Tests for School Safety Page

test.describe('schoolSafetyPage', () => {
    test.beforeEach('before test', async ({ page }) => {
        await homepageIsLoaded(page);
    });

    test.afterEach('after test', async ({ page }) => {
        await page.close();
    });

    test('goes to School Safety Page', async ({ page }) => {
        // add tests here
    });
});