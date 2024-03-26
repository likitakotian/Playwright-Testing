import { test, expect } from '@playwright/test';

test("Select multiple option which has selct tag in it", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    //select multiple option
    await page.selectOption("#colors", ['Red', 'Blue', 'Green'])
    const selectedColor = await page.locator('#colors').textContent();
    await expect(await selectedColor?.includes('Red')).toBeTruthy();
    await expect(await selectedColor?.includes('Blue')).toBeTruthy();
    await expect(await selectedColor?.includes('Green')).toBeTruthy();

    const availableColors = await page.locator("#colors option")
    await expect(await availableColors).toHaveCount(5)
})