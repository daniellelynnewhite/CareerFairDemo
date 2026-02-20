import { test, expect } from '@playwright/test';
import { homepageIsLoaded } from './helperFunctions.js';

// command to run: npx playwright test artsProgramPage.spec.js
// command to run with UI visible: npx playwright test artsProgramPage.spec.js --debug

// TODO: Refactor Test Validation into functions to reduce code repetition and make tests more readable.

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
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Vision Statement' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Follow Us on Social Media!' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Upcoming Events' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    await page.pause()
  });

  // TODO: Add this test
  test.skip('goes to the Arts Program webpage - Validate Instagram Link', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Arts Program' }).click();
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Vision Statement' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Follow Us on Social Media!' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Upcoming Events' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    await page.pause()
  });

  test('goes to the Arts Program webpage - Validate Loads Event Calendar', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Arts Program' }).click();
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Vision Statement' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Follow Us on Social Media!' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Upcoming Events' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
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
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Vision Statement' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Follow Us on Social Media!' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Upcoming Events' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'View More Events' }).click();
    await page.waitForTimeout(2000);
    const page1 = await page1Promise;
    await page1.getByRole('heading', { name: 'The ARTS in Puyallup: LIVE!' }).click();
    await page.waitForTimeout(2000);
    await page1.screenshot({ path: 'Hunt-Elementary-Art-Schedule.png' });
  });

  test('goes to the Arts Program webpage - Empty Bowls Link', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Arts Program' }).click();
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Vision Statement' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Follow Us on Social Media!' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Upcoming Events' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
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
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Vision Statement' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Follow Us on Social Media!' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Upcoming Events' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    await page.getByRole('link', { name: 'History of the Vesey/Munson' }).click();
    await page.getByRole('heading', { name: 'History of the Vesey/Munson' }).click();
    await page.screenshot({ path: 'History-Vesey-Munson.png' });
    await page.getByRole('heading', { name: 'Vesey/Munson Art Show Winners' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Learn More and View the' }).click();
    const page1 = await page1Promise;
    expect(await page1.getByRole('heading', { name: '2025 Vesey/Munson Art Show' })).toBeVisible();
    expect(await page1.getByRole('heading', { name: 'Best in Show' })).toBeVisible();
    expect(await page1.getByRole('heading', { name: 'Superintendent Award' })).toBeVisible();
    expect(await page1.getByRole('heading', { name: 'Black and White Drawing' })).toBeVisible();
    expect(await page1.getByRole('heading', { name: 'Ceramics / 3D Art' })).toBeVisible();
    expect(await page1.getByRole('heading', { name: 'Color Drawing' })).toBeVisible();
    expect(await page1.getByRole('heading', { name: 'Mixed Media' })).toBeVisible();
    expect(await page1.getByRole('heading', { name: 'Painting' })).toBeVisible();
    expect(await page1.getByRole('heading', { name: 'Photography/Digital' })).toBeVisible();
  });

  test('goes to the Arts Program webpage - Music, Theatre, and Visual Link Loads', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Arts Program' }).click();
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Vision Statement' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Follow Us on Social Media!' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Upcoming Events' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    await page.getByRole('link', { name: 'Music, Theatre, and Visual' }).click();
    await page.getByText('Programs Across the District').click();
    expect(await page.getByRole('heading', { name: 'Music, Theatre, and Visual' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Overview' })).toBeVisible();
    expect(await page.getByText('Programs Across the District')).toBeVisible();
    expect(await page.getByText('Instrument Rentals')).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Resources' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Band (Grades 5-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Choir (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'General Elementary Music (' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Orchestra (Grades 5-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Theatre (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Visual Arts (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'String Instrument Sizing Guide' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Ted Brown Music Rentals' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Music & Arts Rentals' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Applebaum Violin Shop' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Hammond Ashley Violins' })).toBeVisible();
  });

  test('goes to the Arts Program webpage - Music, Theatre, and Visual Link Loads - Click Band (Grades 5-12)', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Arts Program' }).click();
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Vision Statement' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Follow Us on Social Media!' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Upcoming Events' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    await page.getByRole('link', { name: 'Music, Theatre, and Visual' }).click();
    await page.getByText('Programs Across the District').click();
    expect(await page.getByRole('heading', { name: 'Music, Theatre, and Visual' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Overview' })).toBeVisible();
    expect(await page.getByText('Programs Across the District')).toBeVisible();
    expect(await page.getByText('Instrument Rentals')).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Resources' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Band (Grades 5-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Choir (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'General Elementary Music (' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Orchestra (Grades 5-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Theatre (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Visual Arts (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'String Instrument Sizing Guide' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Ted Brown Music Rentals' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Music & Arts Rentals' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Applebaum Violin Shop' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Hammond Ashley Violins' })).toBeVisible();
    await page.getByRole('button', { name: 'Band (Grades 5-12)' }).click();
    expect(await page.getByText('Watch our band instrument')).toBeVisible();
    expect(await page.getByText('Clarinet', { exact: true })).toBeVisible();
    expect(await page.getByText('Flute', { exact: true })).toBeVisible();
    expect(await page.getByText('Trombone', { exact: true })).toBeVisible();
    expect(await page.getByText('Trumpet', { exact: true })).toBeVisible();
  });

  test('goes to the Arts Program webpage - Music, Theatre, and Visual Link Loads - Click Choir (Grades 7-12)', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Arts Program' }).click();
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Vision Statement' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Follow Us on Social Media!' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Upcoming Events' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    await page.getByRole('link', { name: 'Music, Theatre, and Visual' }).click();
    await page.getByText('Programs Across the District').click();
    expect(await page.getByRole('heading', { name: 'Music, Theatre, and Visual' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Overview' })).toBeVisible();
    expect(await page.getByText('Programs Across the District')).toBeVisible();
    expect(await page.getByText('Instrument Rentals')).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Resources' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Band (Grades 5-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Choir (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'General Elementary Music (' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Orchestra (Grades 5-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Theatre (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Visual Arts (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'String Instrument Sizing Guide' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Ted Brown Music Rentals' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Music & Arts Rentals' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Applebaum Violin Shop' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Hammond Ashley Violins' })).toBeVisible();
    await page.getByRole('button', { name: 'Choir (Grades 7-12)' }).click();
    expect(await page.getByText('The Puyallup School District offers a continuous choir pathway for students in')).toBeVisible();
  });

  test('goes to the Arts Program webpage - Music, Theatre, and Visual Link Loads - Click General Elementary Music (Grades K-6)', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Arts Program' }).click();
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Vision Statement' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Follow Us on Social Media!' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Upcoming Events' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    await page.getByRole('link', { name: 'Music, Theatre, and Visual' }).click();
    await page.getByText('Programs Across the District').click();
    expect(await page.getByRole('heading', { name: 'Music, Theatre, and Visual' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Overview' })).toBeVisible();
    expect(await page.getByText('Programs Across the District')).toBeVisible();
    expect(await page.getByText('Instrument Rentals')).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Resources' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Band (Grades 5-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Choir (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'General Elementary Music (' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Orchestra (Grades 5-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Theatre (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Visual Arts (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'String Instrument Sizing Guide' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Ted Brown Music Rentals' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Music & Arts Rentals' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Applebaum Violin Shop' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Hammond Ashley Violins' })).toBeVisible();
    await page.getByRole('button', { name: 'General Elementary Music (' }).click();
    expect(await page.getByText('Curriculum Overview')).toBeVisible();
    expect(await page.getByText('Conceptual Progression:')).toBeVisible();
    expect(await page.getByText('Integrated Musical Practices:')).toBeVisible();
    expect(await page.getByText('Cultural and Historical')).toBeVisible();
    expect(await page.getByText('Creative Composition Emphasis:')).toBeVisible();
    expect(await page.getByText('Assessment & Formative Tools:')).toBeVisible();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Learn more about our' }).click();
    const page1 = await page1Promise;
    await page1.getByRole('heading', { name: 'Curriculum Overview' }).click();
    await expect(page1).toHaveURL("https://www.quavered.com/music/curriculum-overview/");
  });

  test('goes to the Arts Program webpage - Music, Theatre, and Visual Link Loads - Click Orchestra (Grades 5-12)', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Arts Program' }).click();
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Vision Statement' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Follow Us on Social Media!' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Upcoming Events' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    await page.getByRole('link', { name: 'Music, Theatre, and Visual' }).click();
    await page.getByText('Programs Across the District').click();
    expect(await page.getByRole('heading', { name: 'Music, Theatre, and Visual' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Overview' })).toBeVisible();
    expect(await page.getByText('Programs Across the District')).toBeVisible();
    expect(await page.getByText('Instrument Rentals')).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Resources' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Band (Grades 5-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Choir (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'General Elementary Music (' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Orchestra (Grades 5-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Theatre (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Visual Arts (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'String Instrument Sizing Guide' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Ted Brown Music Rentals' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Music & Arts Rentals' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Applebaum Violin Shop' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Hammond Ashley Violins' })).toBeVisible();
    await page.getByRole('button', { name: 'Orchestra (Grades 5-12)' }).click();
    expect(await page.getByText('Watch out orchestra')).toBeVisible();
    expect(await page.getByText('Bass', { exact: true })).toBeVisible();
    expect(await page.getByText('Cello', { exact: true })).toBeVisible();
    expect(await page.getByText('Viola', { exact: true })).toBeVisible();
    expect(await page.getByText('Violin', { exact: true })).toBeVisible();
  });

  test('goes to the Arts Program webpage - Music, Theatre, and Visual Link Loads - Theatre (Grades 7-12)', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Arts Program' }).click();
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Vision Statement' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Follow Us on Social Media!' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Upcoming Events' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    await page.getByRole('link', { name: 'Music, Theatre, and Visual' }).click();
    await page.getByText('Programs Across the District').click();
    expect(await page.getByRole('heading', { name: 'Music, Theatre, and Visual' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Overview' })).toBeVisible();
    expect(await page.getByText('Programs Across the District')).toBeVisible();
    expect(await page.getByText('Instrument Rentals')).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Resources' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Band (Grades 5-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Choir (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'General Elementary Music (' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Orchestra (Grades 5-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Theatre (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Visual Arts (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'String Instrument Sizing Guide' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Ted Brown Music Rentals' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Music & Arts Rentals' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Applebaum Violin Shop' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Hammond Ashley Violins' })).toBeVisible();
    await page.getByRole('button', { name: 'Theatre (Grades 7-12)' }).click();
    expect(await page.getByText('PSD Drama classes foster')).toBeVisible();
  });

  test('goes to the Arts Program webpage - Music, Theatre, and Visual Link Loads - Visual Arts (Grades 7-12)', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Arts Program' }).click();
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Vision Statement' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Follow Us on Social Media!' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Upcoming Events' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    await page.getByRole('link', { name: 'Music, Theatre, and Visual' }).click();
    await page.getByText('Programs Across the District').click();
    expect(await page.getByRole('heading', { name: 'Music, Theatre, and Visual' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Overview' })).toBeVisible();
    expect(await page.getByText('Programs Across the District')).toBeVisible();
    expect(await page.getByText('Instrument Rentals')).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Resources' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Band (Grades 5-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Choir (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'General Elementary Music (' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Orchestra (Grades 5-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Theatre (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Visual Arts (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'String Instrument Sizing Guide' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Ted Brown Music Rentals' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Music & Arts Rentals' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Applebaum Violin Shop' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Hammond Ashley Violins' })).toBeVisible();
    await page.getByRole('button', { name: 'Visual Arts (Grades 7-12)' }).click();
    expect(await page.getByText('In Puyallup, our visual arts')).toBeVisible();
  });

  test('goes to the Arts Program webpage - Music, Theatre, and Visual Link Loads - String Instrument Sizing Guide', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Arts Program' }).click();
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Vision Statement' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Follow Us on Social Media!' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Upcoming Events' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    await page.getByRole('link', { name: 'Music, Theatre, and Visual' }).click();
    await page.getByText('Programs Across the District').click();
    expect(await page.getByRole('heading', { name: 'Music, Theatre, and Visual' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Overview' })).toBeVisible();
    expect(await page.getByText('Programs Across the District')).toBeVisible();
    expect(await page.getByText('Instrument Rentals')).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Resources' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Band (Grades 5-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Choir (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'General Elementary Music (' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Orchestra (Grades 5-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Theatre (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Visual Arts (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'String Instrument Sizing Guide' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Ted Brown Music Rentals' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Music & Arts Rentals' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Applebaum Violin Shop' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Hammond Ashley Violins' })).toBeVisible();
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
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Vision Statement' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Follow Us on Social Media!' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Upcoming Events' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    await page.getByRole('link', { name: 'Music, Theatre, and Visual' }).click();
    await page.getByText('Programs Across the District').click();
    expect(await page.getByRole('heading', { name: 'Music, Theatre, and Visual' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Overview' })).toBeVisible();
    expect(await page.getByText('Programs Across the District')).toBeVisible();
    expect(await page.getByText('Instrument Rentals')).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Resources' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Band (Grades 5-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Choir (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'General Elementary Music (' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Orchestra (Grades 5-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Theatre (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Visual Arts (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'String Instrument Sizing Guide' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Ted Brown Music Rentals' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Music & Arts Rentals' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Applebaum Violin Shop' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Hammond Ashley Violins' })).toBeVisible();
    await page.getByRole('button', { name: 'Ted Brown Music Rentals' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'begin the online rental' }).click();
    const page1 = await page1Promise;
    // page1 doesn't load correctly here, so it currently can't be validated. This is an issue with the website, not the test.
  });

  test('goes to the Arts Program webpage - Music, Theatre, and Visual Link Loads - Music & Arts Rentals', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Arts Program' }).click();
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Vision Statement' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Follow Us on Social Media!' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Upcoming Events' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    await page.getByRole('link', { name: 'Music, Theatre, and Visual' }).click();
    await page.getByText('Programs Across the District').click();
    expect(await page.getByRole('heading', { name: 'Music, Theatre, and Visual' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Overview' })).toBeVisible();
    expect(await page.getByText('Programs Across the District')).toBeVisible();
    expect(await page.getByText('Instrument Rentals')).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Resources' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Band (Grades 5-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Choir (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'General Elementary Music (' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Orchestra (Grades 5-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Theatre (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Visual Arts (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'String Instrument Sizing Guide' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Ted Brown Music Rentals' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Music & Arts Rentals' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Applebaum Violin Shop' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Hammond Ashley Violins' })).toBeVisible();
    await page.getByRole('button', { name: 'Music & Arts Rentals' }).click();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'begin the online rental' }).click();
    const page1 = await page1Promise;
    await expect(page1).toHaveURL("https://www.musicarts.com/rentals");
  });

  test('goes to the Arts Program webpage - Music, Theatre, and Visual Link Loads - Applebaum Violin Shop', async ({ page }) => {
    await page.getByRole('link', { name: 'Academic Programs' }).hover();
    await page.getByRole('link', { name: 'Arts Program' }).click();
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Vision Statement' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Follow Us on Social Media!' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Upcoming Events' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    await page.getByRole('link', { name: 'Music, Theatre, and Visual' }).click();
    await page.getByText('Programs Across the District').click();
    expect(await page.getByRole('heading', { name: 'Music, Theatre, and Visual' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Overview' })).toBeVisible();
    expect(await page.getByText('Programs Across the District')).toBeVisible();
    expect(await page.getByText('Instrument Rentals')).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Resources' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Band (Grades 5-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Choir (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'General Elementary Music (' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Orchestra (Grades 5-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Theatre (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Visual Arts (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'String Instrument Sizing Guide' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Ted Brown Music Rentals' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Music & Arts Rentals' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Applebaum Violin Shop' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Hammond Ashley Violins' })).toBeVisible();
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
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Vision Statement' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Follow Us on Social Media!' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Upcoming Events' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    await page.getByRole('link', { name: 'Music, Theatre, and Visual' }).click();
    await page.getByText('Programs Across the District').click();
    expect(await page.getByRole('heading', { name: 'Music, Theatre, and Visual' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Overview' })).toBeVisible();
    expect(await page.getByText('Programs Across the District')).toBeVisible();
    expect(await page.getByText('Instrument Rentals')).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Resources' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Band (Grades 5-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Choir (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'General Elementary Music (' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Orchestra (Grades 5-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Theatre (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Visual Arts (Grades 7-12)' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'String Instrument Sizing Guide' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Ted Brown Music Rentals' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Music & Arts Rentals' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Applebaum Violin Shop' })).toBeVisible();
    expect(await page.getByRole('button', { name: 'Hammond Ashley Violins' })).toBeVisible();
    await page.getByRole('button', { name: 'Hammond Ashley Violins' }).click();
    expect(await page.getByText('970 5th Ave NW # 110,')).toBeVisible();
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: 'Rental Instrumentals -' }).click();
    const page1 = await page1Promise;
    await expect(page1).toHaveURL("https://rentals.hammondashley.com/");
  });
});
