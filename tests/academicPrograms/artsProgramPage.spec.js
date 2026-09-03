import { test, expect } from '@playwright/test';
import { homepageIsLoaded } from '../helperFunctions/homepageHelperFunctions.js';
import { 
  artsProgramPageIsLoaded,
  historyOfTheVeseyMunsonPageIsLoaded,
  musicTheatreAndVisualPageIsLoaded,
  bandGrades5To12PageIsLoaded,
  choirGrades7To12PageIsLoaded,
  generalElementaryMusicPageIsLoaded,
  orchestraGrades5To12PageIsLoaded,
  theatreGrades7To12PageIsLoaded,
  visualArtsGrades7To12PageIsLoaded
} from '../helperFunctions/artPageHelperFunctions.js';

// command to run: npx playwright test artsProgramPage.spec.js
// command to run with UI visible: npx playwright test artsProgramPage.spec.js --debug

test.describe('artsProgramPage', () => {
  test.beforeEach('before test', async ({ page }) => {
    await homepageIsLoaded(page);
  });

  test.afterEach('after test', async ({ page }) => {
    await page.close();
  });

  // TODO: Add this test
  test.skip('goes to the Arts Program webpage - Validate Facebook Link', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Arts Program' }).click();
    await artsProgramPageIsLoaded(page);
    await page.pause()
  });

  // TODO: Add this test
  test.skip('goes to the Arts Program webpage - Validate Instagram Link', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Arts Program' }).click();
    await artsProgramPageIsLoaded(page);
    await page.pause()
  });

  test('goes to the Arts Program webpage - Validate Loads Event Calendar', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Arts Program' }).click();
    await artsProgramPageIsLoaded(page);
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'View More Events' }).click();
    const page1 = await page1Promise;
    await page1.getByRole('heading', { name: 'The ARTS in Puyallup: LIVE!' }).click();
    await page1.screenshot({ path: 'Hunt-Elementary-Art-Schedule.png' });
  });

  test('goes to the Arts Program webpage - Validate Loads Event Calendar - Slow for children to see each step', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.waitForTimeout(1000);
    await page.getByRole('link', { name: 'Arts Program' }).click();
    await page.waitForTimeout(2000);
    await artsProgramPageIsLoaded(page);
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'View More Events' }).click();
    await page.waitForTimeout(2000);
    const page1 = await page1Promise;
    await page1.getByRole('heading', { name: 'The ARTS in Puyallup: LIVE!' }).click();
    await page.waitForTimeout(2000);
    // TODO: Change validation to something else that isn't a screenshot because the calendar changes each month
    // await page1.screenshot({ path: 'Hunt-Elementary-Art-Schedule.png' });
  });

  test('goes to the Arts Program webpage - Empty Bowls Link', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Arts Program' }).click();
    await artsProgramPageIsLoaded(page);
    await page.getByRole('link', { name: 'Empty Bowls Program' }).click();
    await page.getByRole('heading', { name: 'Empty Bowls Program' }).click();
    await page.locator('#fsEl_66722').getByRole('heading', { name: 'Contact Info' }).click();
    await page.getByRole('heading', { name: 'Background' }).click();
    await page.getByRole('heading', { name: 'Empty Bowls in the Puyallup' }).click();
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'Empty-Bowls-Puyallup.png' });
  });

  test('goes to the Arts Program webpage - History of the Vesey/Munson Link', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Arts Program' }).click();
    await artsProgramPageIsLoaded(page);
    await page.getByRole('link', { name: 'History of the Vesey/Munson' }).click();
    await page.getByText('The Dan Vesey Awards begin in').click();
    await page.screenshot({ path: 'History-Vesey-Munson.png' });
    await page.getByRole('heading', { name: 'Vesey/Munson Art Show Winners' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Learn More and View the' }).click();
    const page1 = await page1Promise;
    await historyOfTheVeseyMunsonPageIsLoaded(page1);
  });

  test('goes to the Arts Program webpage - Music, Theatre, and Visual Link Loads', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Arts Program' }).click();
    await artsProgramPageIsLoaded(page);
    await page.getByRole('link', { name: 'Music, Theatre, and Visual' }).click();
    await page.getByText('Programs Across the District').click();
    await musicTheatreAndVisualPageIsLoaded(page);
  });

  test('goes to the Arts Program webpage - Music, Theatre, and Visual Link Loads - Click Band (Grades 5-12)', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Arts Program' }).click();
    await artsProgramPageIsLoaded(page);
    await page.getByRole('link', { name: 'Music, Theatre, and Visual' }).click();
    await page.getByText('Programs Across the District').click();
    await musicTheatreAndVisualPageIsLoaded(page);
    await page.getByRole('button', { name: 'Band (Grades 5-12)' }).click();
    await bandGrades5To12PageIsLoaded(page);
  });

  test('goes to the Arts Program webpage - Music, Theatre, and Visual Link Loads - Click Choir (Grades 7-12)', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Arts Program' }).click();
    await artsProgramPageIsLoaded(page);
    await page.getByRole('link', { name: 'Music, Theatre, and Visual' }).click();
    await page.getByText('Programs Across the District').click();
    await musicTheatreAndVisualPageIsLoaded(page);
    await page.getByRole('button', { name: 'Choir (Grades 7-12)' }).click();
    await choirGrades7To12PageIsLoaded(page);
  });

  test('goes to the Arts Program webpage - Music, Theatre, and Visual Link Loads - Click General Elementary Music (Grades K-6)', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Arts Program' }).click();
    await artsProgramPageIsLoaded(page);
    await page.getByRole('link', { name: 'Music, Theatre, and Visual' }).click();
    await page.getByText('Programs Across the District').click();
    await musicTheatreAndVisualPageIsLoaded(page);
    await page.getByRole('button', { name: 'General Elementary Music (' }).click();
    await generalElementaryMusicPageIsLoaded(page);
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Learn more about our' }).click();
    const page1 = await page1Promise;
    await page1.getByRole('heading', { name: 'Curriculum Overview' }).click();
    await expect(page1).toHaveURL("https://www.quavered.com/music/curriculum-overview/");
  });

  test('goes to the Arts Program webpage - Music, Theatre, and Visual Link Loads - Click Orchestra (Grades 5-12)', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Arts Program' }).click();
    await artsProgramPageIsLoaded(page);
    await page.getByRole('link', { name: 'Music, Theatre, and Visual' }).click();
    await page.getByText('Programs Across the District').click();
    await musicTheatreAndVisualPageIsLoaded(page);
    await page.getByRole('button', { name: 'Orchestra (Grades 5-12)' }).click();
    await orchestraGrades5To12PageIsLoaded(page);
  });

  test('goes to the Arts Program webpage - Music, Theatre, and Visual Link Loads - Theatre (Grades 7-12)', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Arts Program' }).click();
    await artsProgramPageIsLoaded(page);
    await page.getByRole('link', { name: 'Music, Theatre, and Visual' }).click();
    await page.getByText('Programs Across the District').click();
    await musicTheatreAndVisualPageIsLoaded(page);
    await page.getByRole('button', { name: 'Theatre (Grades 7-12)' }).click();
    await theatreGrades7To12PageIsLoaded(page);
  });

  test('goes to the Arts Program webpage - Music, Theatre, and Visual Link Loads - Visual Arts (Grades 7-12)', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Arts Program' }).click();
    await artsProgramPageIsLoaded(page);
    await page.getByRole('link', { name: 'Music, Theatre, and Visual' }).click();
    await page.getByText('Programs Across the District').click();
    await musicTheatreAndVisualPageIsLoaded(page);
    await page.getByRole('button', { name: 'Visual Arts (Grades 7-12)' }).click();
    await visualArtsGrades7To12PageIsLoaded(page);
  });

  test('goes to the Arts Program webpage - Music, Theatre, and Visual Link Loads - String Instrument Sizing Guide', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Arts Program' }).click();
    await artsProgramPageIsLoaded(page);
    await page.getByRole('link', { name: 'Music, Theatre, and Visual' }).click();
    await page.getByText('Programs Across the District').click();
    await musicTheatreAndVisualPageIsLoaded(page);
    await page.getByRole('button', { name: 'String Instrument Sizing Guide' }).click();
    const firstTable = await page.locator('//div[contains(@class, "table-overflow")]').first();
    expect(firstTable).toBeVisible();
    await firstTable.screenshot({ path: 'string-instrument-sizing-guide-first-table.png' });
    const secondTable = await page.locator('//div[contains(@class, "table-overflow")]').nth(1);
    expect(secondTable).toBeVisible();
    await secondTable.screenshot({ path: 'string-instrument-sizing-guide-second-table.png' });
    const thirdTable = await page.locator('//div[contains(@class, "table-overflow")]').nth(2);
    expect(thirdTable).toBeVisible();
    await thirdTable.screenshot({ path: 'string-instrument-sizing-guide-third-table.png' });
    const fourthTable = await page.locator('//div[contains(@class, "table-overflow")]').nth(3);
    expect(fourthTable).toBeVisible();
    await fourthTable.screenshot({ path: 'string-instrument-sizing-guide-fourth-table.png' });
  });

  test('goes to the Arts Program webpage - Music, Theatre, and Visual Link Loads - Ted Brown Music Rentals', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Arts Program' }).click();
    await artsProgramPageIsLoaded(page);
    await page.getByRole('link', { name: 'Music, Theatre, and Visual' }).click();
    await page.getByText('Programs Across the District').click();
    await musicTheatreAndVisualPageIsLoaded(page);
    await page.getByRole('button', { name: 'Ted Brown Music Rentals' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'begin the online rental' }).click();
    const page1 = await page1Promise;
    // page1 doesn't load correctly here, so it currently can't be validated. This is an issue with the website, not the test.
  });

  test('goes to the Arts Program webpage - Music, Theatre, and Visual Link Loads - Music & Arts Rentals', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Arts Program' }).click();
    await artsProgramPageIsLoaded(page);
    await page.getByRole('link', { name: 'Music, Theatre, and Visual' }).click();
    await page.getByText('Programs Across the District').click();
    await musicTheatreAndVisualPageIsLoaded(page);
    await page.getByRole('button', { name: 'Music & Arts Rentals' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'begin the online rental' }).click();
    const page1 = await page1Promise;
    await expect(page1).toHaveURL("https://www.musicarts.com/rentals");
  });

  test('goes to the Arts Program webpage - Music, Theatre, and Visual Link Loads - Applebaum Violin Shop', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Arts Program' }).click();
    await artsProgramPageIsLoaded(page);
    await page.getByRole('link', { name: 'Music, Theatre, and Visual' }).click();
    await page.getByText('Programs Across the District').click();
    await musicTheatreAndVisualPageIsLoaded(page);
    await page.getByRole('button', { name: 'Applebaum Violin Shop' }).click();
    expect(await page.getByText('Pacific Ave, Tacoma, WA 98402')).toBeVisible();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Learn more about Rentals and' }).click();
    const page1 = await page1Promise;
    await expect(page1).toHaveURL("https://www.applebaumviolinshop.com/rent");
  });

  test('goes to the Arts Program webpage - Music, Theatre, and Visual Link Loads - Hammond Ashley Violins', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Arts Program' }).click();
    await artsProgramPageIsLoaded(page);
    await page.getByRole('link', { name: 'Music, Theatre, and Visual' }).click();
    await page.getByText('Programs Across the District').click();
    await musicTheatreAndVisualPageIsLoaded(page);
    await page.getByRole('button', { name: 'Hammond Ashley Violins' }).click();
    expect(await page.getByText('970 5th Ave NW # 110,')).toBeVisible();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Rental Instrumentals -' }).click();
    const page1 = await page1Promise;
    await expect(page1).toHaveURL("https://rentals.hammondashley.com/");
  });
});
