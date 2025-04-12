import { chromium, Page } from "playwright";

module.exports = async () => {
  await login();
  async function login(){
    const browser = await chromium.launch({ headless: false }); // Show the browser
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log("Navigating to site...");
  await page.goto("https://www.geeksforgeeks.org/");

  console.log("Clicking 'Sign In'...");
  await page.click('text=Sign In');

  console.log("Filling credentials...");
  await page.getByPlaceholder('Username or Email').fill("tihij48305@ovobri.com");
  await page.getByPlaceholder('Enter password').fill("Test@123");

  console.log("Submitting login form...");
  await page.click("//span[@class='notSocialLoginBtnText']");

  console.log("Waiting for login to complete...");
  await page.waitForTimeout(5000); // Wait and observe manually

  console.log("Saving storage state...");
  await context.storageState({ path: '.auth/user.json' });

  console.log("Storage state saved successfully ✅");
  await browser.close();

  }
}

