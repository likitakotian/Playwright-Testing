import { test, expect } from '@playwright/test';

test.describe('grouping tests1 ', ()=>{

    //inside group tests run serially 
    test('Test1',async({page})=>{
        console.log("test 1");
     })
    
     test('Test2',async({page})=>{
        console.log("test 2");
     })
    
     test('Test3',async({page})=>{
        console.log("test 3");
     })
    
     test('Test4',async({page})=>{
        console.log("test 4");
     })
})

test.describe('grouping tests 2', ()=>{
 test('Test5',async({page})=>{
    console.log("test 5");
 })

 test('Test6',async({page})=>{
    console.log("test 6");
 })

 test('Test7',async({page})=>{
    console.log("test7");
 })
})