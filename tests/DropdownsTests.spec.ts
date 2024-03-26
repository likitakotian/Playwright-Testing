import { test, expect } from '@playwright/test';

test("Handling normal drop down with select tag", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    //select tag
    await page.locator('#country').selectOption("canada");
    //await page.locator("#country").selectOption({label:'Canada'})
    //await page.locator("#country").selectOption({value:'Canada'})
    //await page.locator("#country").selectOption({index:1})
    //await page.selectOption('#country', 'Canada')
    const selectedCountry = await page.locator('#country').textContent();
    await expect(await selectedCountry?.includes('Canada')).toBeTruthy();

})