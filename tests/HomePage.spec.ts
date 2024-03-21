import { test, expect } from '@playwright/test';

test('validate the title og the test', async({ page })=>{
     await page.goto("https://www.demoblaze.com/")
     expect(await page.title()).toBe("STORE");
     await expect(page).toHaveTitle("STORE")
     expect( page.url()).toBe("https://www.demoblaze.com/")
     await expect(page).toHaveURL("https://www.demoblaze.com/")
     await page.close();

})