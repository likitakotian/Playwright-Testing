import { test, expect } from '@playwright/test';

test.describe('grouping tests1 ', ()=>{

    //inside group tests run serially 
    test('Test1@sanity',async({page})=>{
        console.log("test 1");
     })
    
     test('Test2@regression',async({page})=>{
        console.log("test 2");
     })
    
     test('Test3@sanit',async({page})=>{
        console.log("test 3");
     })
    
     test('Test4@sanity@regression',async({page})=>{
        console.log("test 4");
     })

     //npx playwright --grep @regression
     //npx playwright --grep @sanity
     //npx playwright --grep @sanity@regression
     //only sanity not reg
     //--grep @sanity --grep-invert @reg
})