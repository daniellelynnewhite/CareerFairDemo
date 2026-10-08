import { test, expect } from '@playwright/test';
import { homepageIsLoaded } from '../helperFunctions/homepageHelperFunctions.js';
import { goToCalendarsAndBellSchedulesPage, calendarsAndBellSchedulesPageIsLoaded, clickSchoolBellSchedulesLink } from '../helperFunctions/calendarsAndBellSchedulesPageHelperFunctions.js';

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
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
    });

    test('goes to Calendars and Bell Schedules Page and click District Events', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await page.getByRole('link', { name: 'District Events' }).click();
        await page.getByRole('heading', { name: 'District Events' }).click();
        expect(await page.getByRole('heading', { name: 'District Events' })).toBeVisible();
    });

    test('goes to Calendars and Bell Schedules Page and click School Bell Schedules for Brouillet', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await clickSchoolBellSchedulesLink(page);
        await page.getByRole('button', { name: 'Brouillet' }).click();
        await page.screenshot({ path: 'Brouillet-school-bell-schedules.png' });
    });

    test('goes to Calendars and Bell Schedules Page and click School Bell Schedules for Carson', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await clickSchoolBellSchedulesLink(page);
        await page.getByRole('button', { name: 'Carson' }).click();
        await page.screenshot({ path: 'Carson-school-bell-schedules.png' });
    });

    test('goes to Calendars and Bell Schedules Page and click School Bell Schedules for Dessie Evans', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await clickSchoolBellSchedulesLink(page);
        await page.getByRole('button', { name: 'Dessie Evans' }).click();
        await page.screenshot({ path: 'Dessie-Evans-school-bell-schedules.png' });
    });

    test('goes to Calendars and Bell Schedules Page and click School Bell Schedules for Edgerton', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await clickSchoolBellSchedulesLink(page);
        await page.getByRole('button', { name: 'Edgerton' }).click();
        await page.screenshot({ path: 'Edgerton-school-bell-schedules.png' });
    });

    test('goes to Calendars and Bell Schedules Page and click School Bell Schedules for Firgrove', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await clickSchoolBellSchedulesLink(page);
        await page.getByRole('button', { name: 'Firgrove' }).click();
        await page.screenshot({ path: 'Firgrove-school-bell-schedules.png' });
    });

    test('goes to Calendars and Bell Schedules Page and click School Bell Schedules for Fruitland', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await clickSchoolBellSchedulesLink(page);
        await page.getByRole('button', { name: 'Fruitland' }).click();
        await page.screenshot({ path: 'Fruitland-school-bell-schedules.png' });
    });

    test('goes to Calendars and Bell Schedules Page and click School Bell Schedules for Hunt', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await clickSchoolBellSchedulesLink(page);
        await page.getByRole('button', { name: 'Hunt' }).click();
        await page.screenshot({ path: 'Hunt-school-bell-schedules.png' });
    });

    test('goes to Calendars and Bell Schedules Page and click School Bell Schedules for Maplewood', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await clickSchoolBellSchedulesLink(page);
        await page.getByRole('button', { name: 'Maplewood' }).click();
        await page.screenshot({ path: 'Maplewood-school-bell-schedules.png' });
    });

    test('goes to Calendars and Bell Schedules Page and click School Bell Schedules for Mt. View', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await clickSchoolBellSchedulesLink(page);
        await page.getByRole('button', { name: 'Mt. View' }).click();
        await page.screenshot({ path: 'Mt. View-school-bell-schedules.png' });
    });

    test('goes to Calendars and Bell Schedules Page and click School Bell Schedules for Karshner', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await clickSchoolBellSchedulesLink(page);
        await page.getByRole('button', { name: 'Karshner' }).click();
        await page.screenshot({ path: 'Karshner-school-bell-schedules.png' });
    });

    test('goes to Calendars and Bell Schedules Page and click School Bell Schedules for Meeker', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await clickSchoolBellSchedulesLink(page);
        await page.getByRole('button', { name: 'Meeker' }).click();
        await page.screenshot({ path: 'Meeker-school-bell-schedules.png' });
    });

    test('goes to Calendars and Bell Schedules Page and click School Bell Schedules for Northwood', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await clickSchoolBellSchedulesLink(page);
        await page.getByRole('button', { name: 'Northwood' }).click();
        await page.screenshot({ path: 'Northwood-school-bell-schedules.png' });
    });

    test('goes to Calendars and Bell Schedules Page and click School Bell Schedules for Pope', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await clickSchoolBellSchedulesLink(page);
        await page.getByRole('button', { name: 'Pope' }).click();
        await page.screenshot({ path: 'Pope-school-bell-schedules.png' });
    });

    test('goes to Calendars and Bell Schedules Page and click School Bell Schedules for Ridgecrest', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await clickSchoolBellSchedulesLink(page);
        await page.getByRole('button', { name: 'Ridgecrest' }).click();
        await page.screenshot({ path: 'Ridgecrest-school-bell-schedules.png' });
    });

    test('goes to Calendars and Bell Schedules Page and click School Bell Schedules for Shaw Road', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await clickSchoolBellSchedulesLink(page);
        await page.getByRole('button', { name: 'Shaw Road' }).click();
        await page.screenshot({ path: 'Shaw-Road-school-bell-schedules.png' });
    });

    test('goes to Calendars and Bell Schedules Page and click School Bell Schedules for Spinning', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await clickSchoolBellSchedulesLink(page);
        await page.getByRole('button', { name: 'Spinning' }).click();
        await page.screenshot({ path: 'Spinning-school-bell-schedules.png' });
    });

    test('goes to Calendars and Bell Schedules Page and click School Bell Schedules for Stewart', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await clickSchoolBellSchedulesLink(page);
        await page.getByRole('button', { name: 'Stewart' }).click();
        await page.screenshot({ path: 'Stewart-school-bell-schedules.png' });
    });

    test('goes to Calendars and Bell Schedules Page and click School Bell Schedules for Sunrise', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await clickSchoolBellSchedulesLink(page);
        await page.getByRole('button', { name: 'Sunrise' }).click();
        await page.screenshot({ path: 'Sunrise-school-bell-schedules.png' });
    });

    test('goes to Calendars and Bell Schedules Page and click School Bell Schedules for Waller Road', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await clickSchoolBellSchedulesLink(page);
        await page.getByRole('button', { name: 'Waller Road' }).click();
        await page.screenshot({ path: 'Waller-Road-school-bell-schedules.png' });
    });

    test('goes to Calendars and Bell Schedules Page and click School Bell Schedules for Wildwood', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await clickSchoolBellSchedulesLink(page);
        await page.getByRole('button', { name: 'Wildwood' }).click();
        await page.screenshot({ path: 'Wildwood-school-bell-schedules.png' });
    });

    test('goes to Calendars and Bell Schedules Page and click School Bell Schedules for Woodland', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await clickSchoolBellSchedulesLink(page);
        await page.getByRole('button', { name: 'Woodland' }).click();
        await page.screenshot({ path: 'Woodland-school-bell-schedules.png' });
    });

    test('goes to Calendars and Bell Schedules Page and click School Bell Schedules for Zeiger', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await clickSchoolBellSchedulesLink(page);
        await page.getByRole('button', { name: 'Zeiger' }).click();
        await page.screenshot({ path: 'Zeiger-school-bell-schedules.png' });
    });

    test('goes to Calendars and Bell Schedules Page and click School Bell Schedules for Aylen', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await clickSchoolBellSchedulesLink(page);
        await page.getByRole('button', { name: 'Aylen' }).click();
        await page.screenshot({ path: 'Aylen-school-bell-schedules.png' });
    });

    test('goes to Calendars and Bell Schedules Page and click School Bell Schedules for Ballou', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await clickSchoolBellSchedulesLink(page);
        await page.getByRole('button', { name: 'Ballou' }).click();
        await page.screenshot({ path: 'Ballou-school-bell-schedules.png' });
    });

    test('goes to Calendars and Bell Schedules Page and click School Bell Schedules for Edgemont', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await clickSchoolBellSchedulesLink(page);
        await page.getByRole('button', { name: 'Edgemont' }).click();
        await page.screenshot({ path: 'Edgemont-school-bell-schedules.png' });
    });

    test('goes to Calendars and Bell Schedules Page and click School Bell Schedules for Ferrucci', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await clickSchoolBellSchedulesLink(page);
        await page.getByRole('button', { name: 'Ferrucci' }).click();
        await page.screenshot({ path: 'Ferrucci-school-bell-schedules.png' });
    });

    test('goes to Calendars and Bell Schedules Page and click School Bell Schedules for Glacier View', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await clickSchoolBellSchedulesLink(page);
        await page.getByRole('button', { name: 'Glacier View' }).click();
        await page.screenshot({ path: 'Glacier View-school-bell-schedules.png' });
    });

    test('goes to Calendars and Bell Schedules Page and click School Bell Schedules for Kalles', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await clickSchoolBellSchedulesLink(page);
        await page.getByRole('button', { name: 'Kalles' }).click();
        await page.screenshot({ path: 'Kalles-school-bell-schedules.png' });
    });

    test('goes to Calendars and Bell Schedules Page and click School Bell Schedules for Stahl', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await clickSchoolBellSchedulesLink(page);
        await page.getByRole('button', { name: 'Stahl' }).click();
        await page.screenshot({ path: 'Stahl-school-bell-schedules.png' });
    });

    test('goes to Calendars and Bell Schedules Page and click School Bell Schedules for Emerald Ridge', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await clickSchoolBellSchedulesLink(page);
        await page.getByRole('button', { name: 'Emerald Ridge' }).click();
        await page.screenshot({ path: 'Emerald Ridge-school-bell-schedules.png' });
    });

    test('goes to Calendars and Bell Schedules Page and click School Bell Schedules for Puyallup', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await clickSchoolBellSchedulesLink(page);
        await page.getByRole('button', { name: 'Puyallup' }).click();
        await page.screenshot({ path: 'Puyallup-school-bell-schedules.png' });
    });

    test('goes to Calendars and Bell Schedules Page and click School Bell Schedules for Walker', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await clickSchoolBellSchedulesLink(page);
        await page.getByRole('button', { name: 'Walker' }).click();
        await page.screenshot({ path: 'Walker-school-bell-schedules.png' });
    });

    test('goes to Calendars and Bell Schedules Page and click School Bell Schedules for Rogers', async ({ page }) => {
        await goToCalendarsAndBellSchedulesPage(page);
        await calendarsAndBellSchedulesPageIsLoaded(page);
        await clickSchoolBellSchedulesLink(page);
        await page.getByRole('button', { name: 'Rogers' }).click();
        await page.screenshot({ path: 'Rogers-school-bell-schedules.png' });
    });
});