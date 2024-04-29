import { test, expect } from '@playwright/test';

//cant browse and upload file because playwright is not window based application

test("upload singlr file", async({page})=>{
    await page.goto("https://www.foundit.in/");
    await page.locator("").click();
    await page.locator("").setInputFiles("File path");
})

test("upload multiple file", async ({page})=>{

    await page.goto("https://www.foundit.in/");
    await page.locator("").click();
    await page.locator("").setInputFiles(['test2.pdf path', "test2.paf.path"]);

    //removing file 
    await page.locator("").setInputFiles([]);
})