import { expect } from '@playwright/test';

// NOTE: Functions are listed in alphabetical order to make it easier to find them. 
// Please keep them in alphabetical order when adding new functions.

export async function buildingHistoryPageIsLoaded(page) {
    await page.getByRole('heading', { name: 'Building History' }).click();
    expect(await page.getByRole('button', { name: 'Brouillet Elementary School' })).toBeVisible();
    expect(await page.getByText('17207 94th Avenue East')).toBeVisible();
}