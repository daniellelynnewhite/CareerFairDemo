import { test, expect } from '@playwright/test';
import { homepageIsLoaded } from '../helperFunctions/homepageHelperFunctions.js';

// command to run: npx playwright test districtDepartmentAndSchoolDirectoryPage.spec.js
// command to run with UI visible: npx playwright test districtDepartmentAndSchoolDirectoryPage.spec.js --debug

// TODO: Add Tests for District Department and School Directory Page

test.describe('districtDepartmentAndSchoolDirectoryPage', () => {
    test.beforeEach('before test', async ({ page }) => {
        await homepageIsLoaded(page);
    });

    test.afterEach('after test', async ({ page }) => {
        await page.close();
    });

    test('goes to District Department and School Directory Page', async ({ page }) => {
        // add tests here
    });
});