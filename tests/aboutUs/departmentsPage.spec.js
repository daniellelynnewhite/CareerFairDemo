import { test, expect } from '@playwright/test';
import { homepageIsLoaded } from '../helperFunctions/homepageHelperFunctions.js';
import { 
    goToDepartmentsPage,
    departmentsPageIsLoaded,
    goToAthleticsAndActivities,
    athleticsAndActivitiesIsLoaded,
    goToBusinessServices,
    businessServicesIsLoaded,
    goToCommunications,
    communicationsIsLoaded,
    goToElementaryEducation,
    elementaryEducationIsLoaded,
    goToHumanResources,
    humanResourcesIsLoaded,
    goToOperations,
    operationsIsLoaded,
    goToSchoolConstructionAndPlanning,
    schoolConstructionAndPlanningIsLoaded,
    goToSecondaryEducation,
    secondaryEducationIsLoaded,
    goToStudentSuccess,
    studentSuccessIsLoaded,
    goToTeachingAndLearning,
    teachingAndLearningIsLoaded,
    goToTechnology,
    technologyIsLoaded,
    goToTransportation,
    transportationIsLoaded,
} from '../helperFunctions/departmentsPageHelperFunctions.js';

// command to run: npx playwright test departmentsPage.spec.js
// command to run with UI visible: npx playwright test departmentsPage.spec.js --debug

test.describe('departmentsPage', () => {
    test.beforeEach('before test', async ({ page }) => {
        await homepageIsLoaded(page);
    });

    test.afterEach('after test', async ({ page }) => {
        await page.close();
    });

    test('goes to Departments Page', async ({ page }) => {
        await goToDepartmentsPage(page);
        await departmentsPageIsLoaded(page);
    });

    test('goes to Departments Page and click Athletics and Activities', async ({ page }) => {
        await goToDepartmentsPage(page);
        await departmentsPageIsLoaded(page);
        await goToAthleticsAndActivities(page);
        await athleticsAndActivitiesIsLoaded(page);
    });

    // TODO: Add more tests for Athletics and Activities Options

    test('goes to Departments Page and click Business Services', async ({ page }) => {
        await goToDepartmentsPage(page);
        await departmentsPageIsLoaded(page);
        await goToBusinessServices(page);
        await businessServicesIsLoaded(page);
    });

    // TODO: Add more tests for Business Services Options

    test('goes to Departments Page and click Communications', async ({ page }) => {
        await goToDepartmentsPage(page);
        await departmentsPageIsLoaded(page);
        await goToCommunications(page);
        await communicationsIsLoaded(page);
    });

    // TODO: Add more tests for Communications Options

    test('goes to Departments Page and click Elementary Education', async ({ page }) => {
        await goToDepartmentsPage(page);
        await departmentsPageIsLoaded(page);
        await goToElementaryEducation(page);
        await elementaryEducationIsLoaded(page);
    });
        
    // TODO: Add more tests for Elementary Education Options

    test('goes to Departments Page and click Human Resources', async ({ page }) => {
        await goToDepartmentsPage(page);
        await departmentsPageIsLoaded(page);
        await goToHumanResources(page);
        await humanResourcesIsLoaded(page);
    });

    // TODO: Add more tests for Human Resources Options

    test('goes to Departments Page and click Operations', async ({ page }) => {
        await goToDepartmentsPage(page);
        await departmentsPageIsLoaded(page);
        await goToOperations(page);
        await operationsIsLoaded(page);
    });

    // TODO: Add more tests for Operations Options

    // TODO: Fix this test case
    test.skip('goes to Departments Page and click School Construction & Planning', async ({ page }) => {
        await goToDepartmentsPage(page);
        await departmentsPageIsLoaded(page);
        await goToSchoolConstructionAndPlanning(page);
        await schoolConstructionAndPlanningIsLoaded(page);
    });

    // TODO: Add more tests for School Construction & Planning Options

    test('goes to Departments Page and click Secondary Education', async ({ page }) => {
        await goToDepartmentsPage(page);
        await departmentsPageIsLoaded(page);
        await goToSecondaryEducation(page);
        await secondaryEducationIsLoaded(page);
    });

    // TODO: Add more tests for Secondary Education Options

    test('goes to Departments Page and click Student Success', async ({ page }) => {
        await goToDepartmentsPage(page);
        await departmentsPageIsLoaded(page);
        await goToStudentSuccess(page);
        await studentSuccessIsLoaded(page);
    });

    // TODO: Add more tests for Student Success Options

    test('goes to Departments Page and click Teaching and Learning', async ({ page }) => {
        await goToDepartmentsPage(page);
        await departmentsPageIsLoaded(page);
        await goToTeachingAndLearning(page);
        await teachingAndLearningIsLoaded(page);
    });

    // TODO: Add more tests for Teaching and Learning Options

    test('goes to Departments Page and click Technology', async ({ page }) => {
        await goToDepartmentsPage(page);
        await departmentsPageIsLoaded(page);
        await goToTechnology(page);
        await technologyIsLoaded(page);
    });

    // TODO: Add more tests for Technology Options

    // TODO: fix this test
    test.skip('goes to Departments Page and click Transportation', async ({ page }) => {
        await goToDepartmentsPage(page);
        await departmentsPageIsLoaded(page);
        await goToTransportation(page);
        await transportationIsLoaded(page);
    });
    
    // TODO: Add more tests for Transportation Services Options
});