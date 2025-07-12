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
let str1: string = "hello"; // 'hello' or `hello`

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

console.log(value1);

// 5. undefined : If you declare a variable without assigning it a value, TypeScript automatically assigns undefined to it.

let value2: undefined = undefined;

console.log(value2);

// 6. void : void signifies that a function completes its execution but does not return any meaningful value.  A function returning void can implicitly or explicitly return undefined or null, though typically no return statement is used.

function logMessage(message: string): void {
  console.log(message);
}

// 7. never : never signifies that a function never completes its execution normally. A function returning never cannot return any value, including undefined or null, because it never reaches a normal completion point.

// 8. Arrays :

// explicit
let arr1: number[] = [1, 2, 3];

// implicit
let arr2 = [1, 2, 3];

// union types - combination of types
let arr3: (string | number)[] = [1, 2, 3, "hello", "123"];

// shows error as ts does not know which data type will be fetched
// console.log(arr3[3] + 1);

// Nested Arrays

var arr4: string[][] = [["hello"], ["123"], []];

// type : (number | (string | number)[])[]
var arr5: (number | (string | number)[])[] = [
  ["hello", 1],
  ["123", 1],
  [1, 2, 3],
];

// Empty Array: try declaring an empty array always with its type to avoid 'any' definition

var arr6: number[] = [];
