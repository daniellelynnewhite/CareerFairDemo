import { test, expect } from '@playwright/test';
import { homepageIsLoaded } from '../helperFunctions/homepageHelperFunctions.js';

// command to run: npx playwright test calendarsAndBellSchedulesPage.spec.js
// command to run with UI visible: npx playwright test calendarsAndBellSchedulesPage.spec.js --debug

// TODO: Add Tests for Calendars and Bell Schedules

test.describe('calendarsAndBellSchedules', () => {
    test.beforeEach('before test', async ({ page }) => {
        await homepageIsLoaded(page);
    });

    test.afterEach('after test', async ({ page }) => {
        await page.close();
    });

    test('goes to Calendars and Bell Schedules Page', async ({ page }) => {
        // add tests here
    });
});