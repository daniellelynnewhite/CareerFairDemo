import { test, expect } from '@playwright/test';
import { homepageIsLoaded } from '../helperFunctions/homepageHelperFunctions.js';

// command to run: npx playwright test schoolRecognitionandAwardsPage.spec.js
// command to run with UI visible: npx playwright test schoolRecognitionandAwardsPage.spec.js --debug

//TODO: Add Tests for School Recognition and Awards Page

test.describe('schoolRecognitionandAwardsPage', () => {
    test.beforeEach('before test', async ({ page }) => {
        await homepageIsLoaded(page);
    });

    test.afterEach('after test', async ({ page }) => {
        await page.close();
    });

    test('goes to School Recognition and Awards Page', async ({ page }) => {
        // add tests here
    });
});