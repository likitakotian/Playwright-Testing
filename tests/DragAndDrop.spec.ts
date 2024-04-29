import { test, expect } from '@playwright/test';

test("right click test", async({page})=>{
    await page.goto("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
    const src = await page.locator('#box6');
    const target = await page.locator("#box106");


    //approch
    await src.hover();
    await page.mouse.down()
    await target.hover();
    await page.mouse.up();

    //aproch
    await src.dragTo(target)
})