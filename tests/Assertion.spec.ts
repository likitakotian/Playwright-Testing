import { test, expect } from '@playwright/test';

test("assertion", async({page})=>{
    await page.goto("https://demo.nopcommerce.com/register");
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register")
    await expect(page).toHaveTitle("nopCommerce demo store. Register");
    await expect(page.getByRole('link', { name: 'nopCommerce demo store' })).toBeVisible()
    await expect(page.getByLabel('First name:')).toBeEnabled();
    await expect(page.getByLabel('First name:')).not.toBeDisabled();
    await expect(page.locator('#gender-male')).not.toBeChecked()
    await page.locator('#gender-male').check();
    await expect(page.locator('#gender-male') ).toBeChecked()
    await expect(page.locator('#Newsletter')).toBeChecked();
    await page.locator('#Newsletter').uncheck()
    await expect(page.locator('#Newsletter')).not.toBeChecked();
    await expect(page.locator("#register-button")).toHaveAttribute('type',"submit");
    await expect(page.locator("#register-button")).toHaveText("Register")
    await expect(page.locator("#register-button")).toContainText("Regis")
    const email =  await page.getByLabel('First name:')
    await email.type("newUSer")
    await expect(email).toHaveValue("newUSer")
    //await expect(page.getByLabel('First name:')).toBeDisabled();
})