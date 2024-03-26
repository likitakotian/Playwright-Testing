import { test, expect } from '@playwright/test';

test.only("Click on multiple check box and assert the fields", async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    const userName = await page.getByPlaceholder("Username")
    await userName.fill("Admin");
    const password = await page.getByPlaceholder("Password")
    await password.fill("admin123");
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator(".oxd-main-menu>li:nth-of-type(1)").click();
    const AdalwinCheckBox = await page.getByRole('row', { name: ' Adalwin ESS Odis Adalwin' }).locator('span i');
    const Asa32CheckBox = await page.getByRole('row', { name: ' Asa32 Admin A8DCo 010Z' }).locator('span i')
    const Catina123CheckBox = await page.getByRole('row', { name: ' Catina123 ESS Catina' }).locator('span i');
    const Brooks123CheckBox = await page.getByRole('row', { name: ' Brooks123 ESS Brooks Ernser' }).locator('span i');

    const checkBoxs = [ AdalwinCheckBox, Asa32CheckBox, Catina123CheckBox ];
     for(const checkBox of checkBoxs) {
        await checkBox.check();
        //await checkBox.uncheck();
        await page.waitForTimeout(500)
     }
     await expect(AdalwinCheckBox).toBeChecked();
     await expect(Asa32CheckBox).toBeChecked();
     await expect(Catina123CheckBox).toBeChecked();
     await expect(Brooks123CheckBox).not.toBeChecked();
})