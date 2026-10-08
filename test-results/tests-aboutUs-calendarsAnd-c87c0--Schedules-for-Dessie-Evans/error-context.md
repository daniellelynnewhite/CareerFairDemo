# Test info

- Name: calendarsAndBellSchedules >> goes to Calendars and Bell Schedules Page and click School Bell Schedules for Dessie Evans
- Location: C:\Users\Danielle White\Documents\GitHub\CareerFairDemo\tests\aboutUs\calendarsAndBellSchedulesPage.spec.js:48:9

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://www.puyallupsd.org/", waiting until "load"

    at homepageIsLoaded (C:\Users\Danielle White\Documents\GitHub\CareerFairDemo\tests\helperFunctions\homepageHelperFunctions.js:7:16)
    at C:\Users\Danielle White\Documents\GitHub\CareerFairDemo\tests\aboutUs\calendarsAndBellSchedulesPage.spec.js:12:31
```

# Test source

```ts
   1 | import { expect } from '@playwright/test';
   2 |
   3 | // NOTE: Functions are listed in alphabetical order to make it easier to find them. 
   4 | // Please keep them in alphabetical order when adding new functions.
   5 |
   6 | export async function homepageIsLoaded(page) {
>  7 |     await page.goto('https://www.puyallupsd.org/');
     |                ^ Error: page.goto: Target page, context or browser has been closed
   8 |     await validateHomepageTitle(page)
   9 | }
  10 |
  11 | export async function validateHomepageTitle(page) {
  12 |     const title = await page.title();
  13 |     expect(title).toBe('Home - Puyallup School District');
  14 |     await page.waitForTimeout(2000);
  15 | }
  16 |
```