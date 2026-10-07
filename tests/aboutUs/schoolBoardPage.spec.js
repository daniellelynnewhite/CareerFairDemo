import { test, expect } from '@playwright/test';
import { homepageIsLoaded } from '../helperFunctions/homepageHelperFunctions.js';

// command to run: npx playwright test schoolBoardPage.spec.js
// command to run with UI visible: npx playwright test schoolBoardPage.spec.js --debug

//TODO: Add Tests for School Board Page

test.describe('schoolBoardPage', () => {
    test.beforeEach('before test', async ({ page }) => {
        await homepageIsLoaded(page);
    });

    test.afterEach('after test', async ({ page }) => {
        await page.close();
    });

    test('goes to School Board Page', async ({ page }) => {
        // add tests here
    });
});