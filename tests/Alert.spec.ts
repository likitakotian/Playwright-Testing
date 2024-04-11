import { test, expect } from '@playwright/test';

test("Alert with ok", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    //enable alert before clicking on alert
    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain("I am an alert box!")
        await dialog.accept();
    })
    await page.locator("//button[normalize-space()='Alert']").click();

})

test("Confirmarion alert, alert with ok and cancle", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    //enable alert before clicking on alert
    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain("Press a button!")
        await page.getByText("Alert");
        await dialog.accept();
        //await dialog.dismiss();
    })
    await page.locator("//button[normalize-space()='Confirm Box']").click();
    const message = await page.locator("#demo").textContent();
    await expect(message).toContain("You pressed OK!")

})

test("promt type alert", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    //enable alert before clicking on alert
    page.on('dialog', async dialog => {
        expect(dialog.message()).toContain("Please enter your name:")
        //extract default vaule 
        expect(dialog.defaultValue()).toContain("Harry Potter")

        await page.getByText("Alert");
        await dialog.accept('Harry');
        //await dialog.dismiss();
    })
    await page.locator("//button[normalize-space()='Prompt']").click();
    const message = await page.locator("#demo").textContent();
    await expect(message).toContain("Hello Harry! How are you today?")

})