import { test, expect } from '@playwright/test';
import { homepageIsLoaded } from '../helperFunctions/homepageHelperFunctions.js';

// command to run: npx playwright test studentDemographicsPage.spec.js
// command to run with UI visible: npx playwright test studentDemographicsPage.spec.js --debug

//TODO: Add Tests for Student Demographics Page

test.describe('studentDemographicsPage', () => {
    test.beforeEach('before test', async ({ page }) => {
        await homepageIsLoaded(page);
    });

    test.afterEach('after test', async ({ page }) => {
        await page.close();
    });

    test('goes to Student Demographics Page', async ({ page }) => {
        // add tests here
    });
});