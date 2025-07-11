"use strict";
// 1. number
// explicit type definition
let x = 2;
// implicit type definition: takes automatically number as type
let y = 2;
// zero and negative zero
let a = 0;
let b = -0;
// infinity and negative infinity
let c = Infinity;
let d = -Infinity;
// floating point values
let z = 30.565;
// the Number starting with capital N is a wrapper around the primitive type - number.
let h = Number;
// 2. string
// explicit
let str1 = "hello"; // 'hello' or `hello`
// implicit
let str2 = "123";
// template strings
let val = `${str1} is ${str2}`;
console.log(val); // hello is 123
// 3. boolean
let ans1 = true;
let ans2 = 3;
console.log(ans1); // trues
console.log(ans2); // 0
