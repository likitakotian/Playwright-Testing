import { test, expect } from '@playwright/test';

test("Frame hadling test", async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    //total number of frame
    const allFrames = await page.frames();
    console.log("Number of frame :", allFrames.length);

    //using frame locator
    const firstFrame = await page.frameLocator('frame[src= "frame_1.html"]').locator('[name="mytext1"]');
    await firstFrame.fill("testing")
    //await page.frame('name')  -- if name is present 
    const frame1 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});
    await frame1?.fill('[name="mytext1"]',"testing");
})

test("Nested i frame", async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    const frame3 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"});
    const childFrames = await frame3?.childFrames();
    //await childFrames[0].locator('//*[@id="i5"]/div[3]/div').check();

    //nested frame
    await frame3?.childFrames();

})