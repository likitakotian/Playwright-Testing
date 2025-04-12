// Imagine you're testing a website where users need to be logged in to access a specific page. You can create a fixture to log in once and reuse that session in multiple tests.
import { test, chromium, expect } from '@playwright/test';



// Steps:

// Write a fixture to log in.

// Write a test that checks if the user is logged in and sees their profile page.
test.use({
    storageState: '.auth/user.json',
})

test.only("login test to use auth session", async({page})=>{

    await page.goto("https://www.geeksforgeeks.org/");
    await expect(page).toHaveTitle('GeeksforGeeks | A computer science portal for geeks')
    page.getByText
    

})