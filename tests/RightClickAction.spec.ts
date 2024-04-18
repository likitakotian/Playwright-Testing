import { test, expect } from '@playwright/test';

test("right click test", async({page})=>{
    await page.goto("https://demo.opencart.com/");
    await page.getByText("Desktops").click({button:'right'});
    await page.getByText("Desktops").dblclick();
    await page.getByText("Desktops").click({button:'left'});
    expect(await page.getByText("PC (0)").textContent()).toBeTruthy();
    expect(await page.getByText("Mac (1)").textContent()).toBeTruthy();
    expect(await page.getByText("PC (0)")).toBeVisible();
    expect(await page.getByText("Mac (1)")).toBeVisible();
})