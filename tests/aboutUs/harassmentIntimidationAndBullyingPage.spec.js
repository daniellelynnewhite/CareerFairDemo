import { test, expect } from '@playwright/test';
import { homepageIsLoaded } from '../helperFunctions/homepageHelperFunctions.js';

// command to run: npx playwright test harassmentIntimidationAndBullyingPage.spec.js
// command to run with UI visible: npx playwright test harassmentIntimidationAndBullyingPage.spec.js --debug

// TODO: Add Tests for Harassment, Intimidation, and Bullying Page

test.describe('harassmentIntimidationAndBullyingPage', () => {
    test.beforeEach('before test', async ({ page }) => {
        await homepageIsLoaded(page);
    });

    test.afterEach('after test', async ({ page }) => {
        await page.close();
    });

    test('goes to Harassment, Intimidation, and Bullying Page', async ({ page }) => {
        // add tests here
    });
});