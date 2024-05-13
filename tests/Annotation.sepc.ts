import { test, expect } from '@playwright/test';

test.describe('grouping tests1 ', ()=>{

    //inside group tests run serially 
    //skip
    test('Test1',async({page, browserName})=>{
        if(browserName == 'chromium'){
            test.skip()
        }
        console.log("test 1");
     })
    
     test.only('Test2',async({page})=>{
        console.log("test 2");
     })
    
     test('Test3',async({page})=>{
        console.log("test 3");
     })
    
     test('Test4',async({page})=>{
        test.fail()
        console.log("test 4");
        expect(1).toBe(2) //if both exp and  atual is failed test will pass - + - = +
     })


})