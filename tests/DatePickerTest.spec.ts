import { test, expect } from '@playwright/test';

test("Date picker", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")
    //filll methd
    const day = "04/18/2024"
    await page.locator('//input[@id="datepicker"]').fill(day);
    const year = "2024"
    const month = "March"
    const date = "13"

    await page.locator('//input[@id="datepicker"]').click();
    while (true) {
        const current_year = await page.locator(".ui-datepicker-year").textContent();
        const current_month = await page.locator(".ui-datepicker-month").textContent();

        if (current_year == year && current_month == month) {
            break;
        }
        await page.locator('[title="Prev"]').click();
    }
    const dates = await page.$$(".ui-state-default")
    for (const dt of dates) {
        if (await dt.textContent() == date)
            await dt.click();
        break;
    }

    console.log(await page.locator('//input[@id="datepicker"]').textContent())

})