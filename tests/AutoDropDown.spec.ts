import { test, expect } from '@playwright/test';

test("Auto suggest dropdown", async ({ page }) => {
    await page.goto("https://www.redbus.in/")
    const from = await page.locator("//input[@id='src']");
    const to = await page.locator("//input[@id='dest']");

    await from.fill("delhi")
    //await expect(options.length).toBe(18)
    await page.waitForSelector("//li[@class='sc-iwsKbI jTMXri']//div//text[1]");
    const value = await page.$$("//li[@class='sc-iwsKbI jTMXri']//div//text[1]");

    for (const option of value) {
        const fromCity = await option.textContent();
        console.log(fromCity);
        if (await fromCity?.includes("Mayur Vihar")) {
            await option.click();
        }

    }
})