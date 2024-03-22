import { test, expect } from '@playwright/test';

test('handle input box', async ({page})=>{
    await page.goto("https://demo.nopcommerce.com/register");
    //input box
    const firstNameInput = await page.locator("#FirstName");
    await expect(firstNameInput).toBeVisible();
    await expect(firstNameInput).toBeEditable();
    await expect(firstNameInput).toBeEmpty();
    await firstNameInput.fill("randomFirstName");
    await expect(firstNameInput).not.toBeEmpty();
    // other type
    //await page.locator("#FirstName").fill("randomFirstName");
    await page.fill("#FirstName", "randomname")
    await page.waitForTimeout(1000)
})