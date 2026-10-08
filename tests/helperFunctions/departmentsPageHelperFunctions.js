import { expect } from '@playwright/test';

// NOTE: Functions are listed in alphabetical order to make it easier to find them. 
// Please keep them in alphabetical order when adding new functions.

export async function athleticsAndActivitiesIsLoaded(page) {
    expect(await page.getByRole('heading', { name: 'Athletics and Activities' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Overview' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Mission Statement' })).toBeVisible();
}

export async function businessServicesIsLoaded(page) {
    expect(await page.getByRole('heading', { name: 'Business Services' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Business Office' })).toBeVisible();
}

export async function capitalProjectsIsLoaded(page) {
    await page.pause();
}

export async function communicationsIsLoaded(page) {
    expect(await page.getByRole('heading', { name: 'Communications', exact: true })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Overview' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Digital Communications' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Social Media' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Print Communications' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Media', exact: true })).toBeVisible();
}

export async function departmentsPageIsLoaded(page) {
    await page.getByRole('heading', { name: 'Departments' }).click();
    expect(await page.getByRole('heading', { name: 'Departments' })).toBeVisible();
}

export async function elementaryEducationIsLoaded(page) {
    expect(await page.getByRole('heading', { name: 'Elementary Education' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'How We Support Elementary' })).toBeVisible();
}

export async function goToAthleticsAndActivities(page) {
    await page.locator('a[href="/about-us/departments/athletics-and-activites"]').nth(3).click();
    await page.getByRole('heading', { name: 'Athletics and Activities' }).click();
}

export async function goToBusinessServices(page) {
    await page.locator('a[href="/about-us/departments/business-services"]').nth(3).click();
    await page.getByRole('heading', { name: 'Business Services' }).click();
}

export async function goToCapitalProjects(page) {
    await page.locator('a[href="/about-us/departments/capital-projects"]').nth(3).click();
    await page.pause();
}

export async function goToCommunications(page) {
    await page.locator('a[href="/about-us/departments/communications"]').nth(3).click();
    await page.getByRole('heading', { name: 'Communications', exact: true }).click();
}

export async function goToDepartmentsPage(page) {
    await page.getByRole('link', { name: 'About Us' }).hover();
    await page.getByRole('link', { name: 'Departments' }).click();
    await page.waitForTimeout(2000);
}

export async function goToElementaryEducation(page) {
    await page.locator('a[href="/about-us/departments/elementary-education"]').nth(3).click();
    await page.getByRole('heading', { name: 'Elementary Education' }).click();
}

export async function goToHumanResources(page) {
    await page.locator('a[href="/about-us/departments/human-resources"]').nth(3).click();
    await page.getByRole('heading', { name: 'Human Resources' }).click();
}

export async function goToOperations(page) {
    await page.locator('a[href="/about-us/departments/operations"]').nth(3).click();
    await page.getByRole('heading', { name: 'Operations', exact: true }).click();
}

export async function goToSchoolConstructionAndPlanning(page) {
    await page.locator('a[href="/about-us/departments/capital-projects"]').nth(3).click();
}

export async function goToSecondaryEducation(page) {
    await page.locator('a[href="/about-us/departments/secondary-education"]').nth(3).click();
    await page.getByRole('heading', { name: 'Secondary Education' }).click();
}

export async function goToStudentSuccess(page) {
    await page.locator('a[href="/about-us/departments/student-success"]').nth(3).click();
    await page.getByRole('heading', { name: 'Student Success' }).click();
}

export async function goToTeachingAndLearning(page) {
    await page.locator('a[href="/about-us/departments/teaching-and-learning"]').nth(3).click();
    await page.getByRole('heading', { name: 'Teaching and Learning' }).click();
}

export async function goToTechnology(page) {
    await page.locator('a[href="/about-us/departments/technology"]').nth(3).click();
    await page.getByRole('heading', { name: 'Technology' }).click();
}

export async function goToTransportation(page) {
    await page.locator('a[href="/about-us/departments/transportation-services"]').nth(3).click();
    await page.pause();
}

export async function humanResourcesIsLoaded(page) {
    expect(await page.getByRole('heading', { name: 'Human Resources' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Overview' })).toBeVisible();
}

export async function operationsIsLoaded(page) {
    expect(await page.getByRole('heading', { name: 'Operations', exact: true })).toBeVisible();
    expect(await page.getByText('District Priority #5: Facilities, Safety, and Security The district will ensure')).toBeVisible();
}

export async function schoolConstructionAndPlanningIsLoaded(page) {
    await page.pause();
}

export async function secondaryEducationIsLoaded(page) {
    expect(await page.getByRole('heading', { name: 'Secondary Education' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'How We Support Secondary' })).toBeVisible();
}

export async function studentSuccessIsLoaded(page) {
    expect(await page.getByRole('heading', { name: 'Student Success' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Overview' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Parent and Family Engagement' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Oversight Areas' })).toBeVisible();
}

export async function teachingAndLearningIsLoaded(page) {
    expect(await page.getByRole('heading', { name: 'Teaching and Learning' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Overview' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Request For Information' })).toBeVisible();
}

export async function technologyIsLoaded(page) {
    expect(await page.getByRole('heading', { name: 'Technology' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'Overview' })).toBeVisible();
    expect(await page.getByRole('heading', { name: 'News and Updates' })).toBeVisible();
}

export async function transportationIsLoaded(page) {
    await page.pause();
}