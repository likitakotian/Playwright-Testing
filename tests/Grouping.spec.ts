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

function lengthOfLongestSubstring(s: string): number {
   let longest:any = '';
   for( let i=0; i<s.length;i++){
    for( let j=i+1; j<=s.length;j++){
      const subString = s.substring(i,j);
       let test = isrepitative(subString);
       if(test.size > longest.length){
          longest = test;
       }
    }
  }
   return longest.length;
   }
  function isrepitative(input:string):Set<string> {
      const charSet= new Set<string>();
      for(let i=0;i<input.length;i++){
          if(charSet.has(input[i])){
              break;
          }
          charSet.add(input[i]);
      }
      return charSet;
  }