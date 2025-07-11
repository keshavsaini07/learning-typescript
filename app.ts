
// 1. number

// explicit type definition
let x: number = 2;

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
let str1 : string = "hello";   // 'hello' or `hello`

// implicit
let str2 = "123";   

// template strings
let val = `${str1} is ${str2}`;

console.log(val); // hello is 123

// 3. boolean

let ans1: boolean = true;

let ans2 = 0;

console.log(ans1); // trues

console.log(ans2); // 0; ans2 is an implicit number type

// 4. null : null is used when you want to explicitly indicate that a variable or property has no value assigned to it

let value1: null; // only null value can be assigned to value1

value1 = null;

console.log(value1)

// 5. undefined : If you declare a variable without assigning it a value, TypeScript automatically assigns undefined to it.

let value2: undefined = undefined;

console.log(value2);