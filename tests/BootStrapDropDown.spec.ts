import { test, expect } from '@playwright/test';

test('BootStrap dropDown', async ({ page }) => {
    await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2")
    //total number of drop down
    await page.locator(".btn-group > button").click();
    // const options = await page.locator("ul>li >a >label>input");
    // await expect(options).toHaveCount(11);
    //or
    const options = await page.$$("ul>li label")
    //await expect(options.length).toBe(11)

    for (let option of options) {
        const value = await option.textContent();
        console.log(value);
        if (value?.includes('Bootstrap') || value?.includes('Java') || value?.includes('Databases')) {
            await option.click();
        }
    }
    await page.waitForTimeout(500);
   

})