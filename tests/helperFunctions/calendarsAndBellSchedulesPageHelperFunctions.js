import { expect } from '@playwright/test';

// NOTE: Functions are listed in alphabetical order to make it easier to find them. 
// Please keep them in alphabetical order when adding new functions.

export async function calendarsAndBellSchedulesPageIsLoaded(page) {
    await page.getByRole('heading', { name: 'Calendars and Bell Schedules' }).click();
    expect(await page.getByRole('heading', { name: 'Calendars and Bell Schedules' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Puyallup School District Key' })).toBeVisible();
}

export async function clickSchoolBellSchedulesLink(page) {
    await page.getByRole('link', { name: 'School Bell Schedules' }).click();
    expect(await page.getByRole('heading', { name: 'School Bell Schedules' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Overview' })).toBeVisible();
    expect(await page.getByText('Below times are the exact')).toBeVisible();
}

export async function goToCalendarsAndBellSchedulesPage(page) {
    await page.getByRole('link', { name: 'About Us' }).hover();
    await page.getByLabel('Main', { exact: true }).getByRole('link', { name: 'Calendars and Bell Schedules' }).click();
    await page.waitForTimeout(2000);
}