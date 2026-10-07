import { test, expect } from '@playwright/test';
import { homepageIsLoaded } from '../helperFunctions/homepageHelperFunctions.js';

// command to run: npx playwright test titleIXPage.spec.js
// command to run with UI visible: npx playwright test titleIXPage.spec.js --debug

//TODO: Add Tests for Title IX Page

test.describe('titleIXPage', () => {
    test.beforeEach('before test', async ({ page }) => {
        await homepageIsLoaded(page);
    });

    test.afterEach('after test', async ({ page }) => {
        await page.close();
    });

    test('goes to Title IX Page', async ({ page }) => {
        // add tests here
    });
});