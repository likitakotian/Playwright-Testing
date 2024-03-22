import { test, expect } from '@playwright/test';

test("soft assertion demo", async ({page})=>{
    await page.goto("https://www.demoblaze.com/")
    //hard assertion
    await expect(page).toHaveTitle("STORE");
    await expect(page).toHaveURL("https://www.demoblaze.com/");
    //soft assertion
   // await expect.soft(page).toHaveTitle("STORE123");
    await expect.soft(page).toHaveURL("https://www.demoblaze.com/");

})