import { test, expect } from '@playwright/test';
import { homepageIsLoaded } from '../helperFunctions/homepageHelperFunctions.js';

// command to run: npx playwright test ospiReportCardPage.spec.js
// command to run with UI visible: npx playwright test ospiReportCardPage.spec.js --debug

//TODO: Add Tests for OSPi Report Card Page

test.describe('ospiReportCardPage', () => {
    test.beforeEach('before test', async ({ page }) => {
        await homepageIsLoaded(page);
    });

    test.afterEach('after test', async ({ page }) => {
        await page.close();
    });

    test('goes to OSPi Report Card Page', async ({ page }) => {
        // add tests here
    });
});