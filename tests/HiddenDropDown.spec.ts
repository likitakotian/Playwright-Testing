import { test, expect } from '@playwright/test';

test("Hidden drop down", async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();
    await page.locator("//ul/li/a[contains(.,'PIM')]").click();
    await page.locator('div:nth-child(6) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
    await page.getByText('Account Assistant').click();
    await expect(page.locator('form')).toContainText('Account Assistant');



    await page.waitForTimeout(5000)
})