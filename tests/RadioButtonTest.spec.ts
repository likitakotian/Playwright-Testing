import { test, expect } from '@playwright/test';

test('handle radio button', async ({page})=>{
    await page.goto("https://demo.nopcommerce.com/register");
    const maleRadioButton = await page.locator("#gender-male");
    const femaleRadioButton = await page.locator("#gender-female");
    await expect(maleRadioButton).toHaveValue("M");
    await expect(femaleRadioButton).toHaveValue("F");

    await expect(maleRadioButton).not.toBeChecked();
    await expect(femaleRadioButton).not.toBeChecked();

    await femaleRadioButton.check();
    await expect(femaleRadioButton).toBeChecked();
    await expect(maleRadioButton).not.toBeChecked();

    await maleRadioButton.check();
    await expect(await femaleRadioButton).not.toBeChecked();
    await expect(maleRadioButton).toBeChecked();

    await expect(await maleRadioButton.isChecked()).toBeTruthy();
    await expect(await femaleRadioButton.isChecked()).toBeFalsy()
    //await console.log(femaleRadioButton.isChecked())
    //await page.check("#gender-male")
    //await page.locator("#gender-male").check()
    await page.close();
    
})