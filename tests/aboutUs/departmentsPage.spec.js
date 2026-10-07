import { test, expect } from '@playwright/test';
import { homepageIsLoaded } from '../helperFunctions/homepageHelperFunctions.js';

// command to run: npx playwright test departmentsPage.spec.js
// command to run with UI visible: npx playwright test departmentsPage.spec.js --debug

// TODO: Add Tests for Departments Page

test.describe('departmentsPage', () => {
    test.beforeEach('before test', async ({ page }) => {
        await homepageIsLoaded(page);
    });

    test.afterEach('after test', async ({ page }) => {
        await page.close();
    });

    test('goes to Departments Page', async ({ page }) => {
        // add tests here
    });
});