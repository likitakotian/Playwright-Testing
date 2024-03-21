import { test, expect } from '@playwright/test';

test.describe("Tests for Locators", () => {

    test("locator 1 ", async ({ page }) => {
        await page.goto("https://www.demoblaze.com/");
        // const login =  page.locator("#login2");
        // await login.click();----> type 1
        //await page.click('#login2');---> type 2
        await page.locator('#login2').click(); // type 3
        const loginModule = page.locator("#logInModalLabel");
        await expect(loginModule).toBeVisible();
        // expect(isVisible).toBe(true);
        // fill user name 
        await page.type("#loginusername", "123user", { delay: 50 });
        //fill password
        await page.fill("#loginpassword", "1234")
        //click on login
        await page.click("button[onclick='logIn()']");
        await page.close();

    })

    test('capture the text for all links', async ({ page }) => {
        await page.goto("https://www.demoblaze.com/");
        const links = await page.$$('a');
        for (const link of links) {
            const text = await link.textContent();
            console.log(text);
        }
    })

    test("capture the product names from website", async ({ page }) => {
        await page.goto("https://www.demoblaze.com/");
        await page.waitForSelector('#tbodyid > div > div > div > h4 > a')
        const products = await page.$$('#tbodyid >div >div>div>h4>a');
        for (const product of products) {
            const productname = await product.textContent();
            console.log(productname);
        }
    })

    test('Built in Locators validations', async ({ page }) => {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        const image = await page.getByAltText("company-branding"); //ususally alt is for image
        await expect(image).toBeVisible();

        const userName = await page.getByPlaceholder("Username").fill("Admin");//usually on input text
        const password = await page.getByPlaceholder("Password").fill("admin123");//usually on input text

        const loginButtom = await page.locator("button[type='submit']").click()
        //await page.getByRole('button', { type: 'submit'}).click();

        // const user = await page.getByText("Emma Watson")
        // await expect(user).toBeVisible();

        //others
        // getByLabel()
        // getByTitle()
        // getByTestId()
    })
})