import { expect } from '@playwright/test';

// NOTE: Functions are listed in alphabetical order to make it easier to find them. 
// Please keep them in alphabetical order when adding new functions.

export async function artsProgramPageIsLoaded(page) {
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Vision Statement' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Follow Us on Social Media!' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Upcoming Events' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Arts Program' })).toBeVisible();
}

export async function bandGrades5To12PageIsLoaded(page) {
    expect(await page.getByText('Watch our band instrument')).toBeVisible();
    expect(await page.getByText('Clarinet', { exact: true })).toBeVisible();
    expect(await page.getByText('Flute', { exact: true })).toBeVisible();
    expect(await page.getByText('Trombone', { exact: true })).toBeVisible();
    expect(await page.getByText('Trumpet', { exact: true })).toBeVisible();
}

export async function choirGrades7To12PageIsLoaded(page) {
    expect(await page.getByText('The Puyallup School District offers a continuous choir pathway for students in')).toBeVisible();
}

export async function generalElementaryMusicPageIsLoaded(page) {
    expect(await page.getByText('Curriculum Overview')).toBeVisible();
    expect(await page.getByText('Conceptual Progression:')).toBeVisible();
    expect(await page.getByText('Integrated Musical Practices:')).toBeVisible();
    expect(await page.getByText('Cultural and Historical')).toBeVisible();
    expect(await page.getByText('Creative Composition Emphasis:')).toBeVisible();
    expect(await page.getByText('Assessment & Formative Tools:')).toBeVisible();
}

export async function historyOfTheVeseyMunsonPageIsLoaded(page) {
    await page.getByText('The 28th Annual Vesey/Munson').click();
    expect(await page.getByRole('heading', { name: '2026 Vesey/Munson Art Show' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Best in Show' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Superintendent Award' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Black and White Drawing' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Ceramics / 3D Art' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Color Drawing' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Mixed Media' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Painting' })).toBeVisible();
}

export async function musicTheatreAndVisualPageIsLoaded(page) {
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
}

export async function orchestraGrades5To12PageIsLoaded(page) {
    expect(await page.getByText('Watch out orchestra')).toBeVisible();
    expect(await page.getByText('Bass', { exact: true })).toBeVisible();
    expect(await page.getByText('Cello', { exact: true })).toBeVisible();
    expect(await page.getByText('Viola', { exact: true })).toBeVisible();
    expect(await page.getByText('Violin', { exact: true })).toBeVisible();
}

export async function theatreGrades7To12PageIsLoaded(page) {
    expect(await page.getByText('PSD Drama classes foster')).toBeVisible();
}

export async function visualArtsGrades7To12PageIsLoaded(page) {
    expect(await page.getByText('In Puyallup, our visual arts')).toBeVisible();
}
