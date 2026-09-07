```javascript
// ==========================================
// VARIABLES & DATA TYPES
// ==========================================

// Q1: Difference between var, let, and const
// var   -> Function scoped, can be redeclared and reassigned
// let   -> Block scoped, cannot be redeclared in same scope, can be reassigned
// const -> Block scoped, cannot be redeclared or reassigned


// Q2: Can we redeclare variables?
var name = "John";
var name = "David"; // Allowed

let age = 20;
// let age = 25; // Not allowed in the same scope

const country = "India";
// const country = "USA"; // Not allowed


// Q3: Output
var x1 = 5;
let y1 = 10;
const z1 = 15;

x1 = 20;
y1 = 25;
// z1 = 30; // ERROR: Assignment to constant variable

console.log("Q3:", x1, y1, z1);
// Output: Q3: 20 25 15


// Q4: Declaration vs Initialization
// Declaration: Creating a variable
let a1;

// Initialization: Giving a value to a variable
a1 = 100;

console.log("Q4:", a1);


// Q5: Output
let a2;
console.log("Q5:", a2);
// Output: undefined


// Q6: Hoisting
// Hoisting means JavaScript moves declarations to the top
// of their scope during execution.

// Example:
console.log("Q6:", hoistedVar);
var hoistedVar = 50;
// Output: undefined

// Note: let and const are also hoisted,
// but they cannot be accessed before declaration
// because of the Temporal Dead Zone (TDZ).


// Q7: null vs undefined
// undefined -> Variable declared but no value assigned
// null      -> Intentional empty value

let value1;
let value2 = null;

console.log("Q7:", value1); // undefined
console.log("Q7:", value2); // null


// Q8: typeof outputs
console.log("Q8:", typeof null);
console.log("Q8:", typeof undefined);
console.log("Q8:", typeof []);
console.log("Q8:", typeof {});

// Output:
// object
// undefined
// object
// object


// ==========================================
// OPERATORS
// ==========================================

// Q9: == vs ===
// ==  -> Compares values after type conversion
// === -> Compares both value and data type

console.log("Q9:", 5 == "5");  // true
console.log("Q9:", 5 === "5"); // false


// Q10: ++i vs i++
// ++i -> Pre-increment: increases first, then returns value
// i++ -> Post-increment: returns value first, then increases

let i1 = 5;
console.log("Q10:", ++i1); // 6

let i2 = 5;
console.log("Q10:", i2++); // 5
console.log("Q10:", i2);   // 6


// Q11: Arithmetic with string
let x2 = 10;
let y2 = "5";

console.log("Q11:", x2 + y2); // 105
console.log("Q11:", x2 - y2); // 5
console.log("Q11:", x2 * y2); // 50
console.log("Q11:", x2 / y2); // 2


// Q12: Logical operators
// && -> AND
// || -> OR
// !  -> NOT

console.log("Q12:", true && true);  // true
console.log("Q12:", true && false); // false
console.log("Q12:", true || false); // true
console.log("Q12:", false || false); // false
console.log("Q12:", !true);          // false


// Q13: Output
console.log("Q13:", 5 > 3 && 10 > 5);
// true

console.log("Q13:", 5 > 10 || 10 > 5);
// true

console.log("Q13:", !(5 > 3));
// false


// Q14: Ternary operator
// condition ? valueIfTrue : valueIfFalse

let age1 = 20;

let result1 = age1 >= 18 ? "Adult" : "Minor";

console.log("Q14:", result1);
// Output: Adult


// ==========================================
// TYPE CASTING
// ==========================================

// Q15: Implicit vs Explicit type casting
// Implicit -> JavaScript automatically converts the type
// Explicit -> Programmer manually converts the type

console.log("Q15 Implicit:", "5" * 2);
// 10

console.log("Q15 Explicit:", Number("5") + 2);
// 7


// Q16: Output
console.log("Q16:", Number("123"));
// 123

console.log("Q16:", Number("hello"));
// NaN

console.log("Q16:", Number(true));
// 1

console.log("Q16:", Number(false));
// 0

console.log("Q16:", Boolean(0));
// false

console.log("Q16:", Boolean("hello"));
// true


// Q17: NaN
// NaN means "Not a Number"
// It occurs when a mathematical operation cannot produce a valid number.

let result2 = Number("Hello");

console.log("Q17:", result2);
// Output: NaN

console.log("Q17 Is NaN:", Number.isNaN(result2));
// Output: true


// ==========================================
// CONDITIONAL STATEMENTS
// ==========================================

// Q18: if-else vs switch
// if-else -> Used for conditions and ranges
// switch  -> Used when comparing one value with multiple fixed cases


// Q19: Output
let age2 = 20;

if (age2 >= 18) {
    console.log("Q19: Adult");
} else {
    console.log("Q19: Minor");
}

// Output: Adult


// Q20: Nested if
// An if statement inside another if statement

let age3 = 25;
let hasLicense = true;

if (age3 >= 18) {
    if (hasLicense) {
        console.log("Q20: You can drive");
    } else {
        console.log("Q20: You need a license");
    }
} else {
    console.log("Q20: You are too young to drive");
}


// Q21: Even or Odd using ternary operator

let number1 = 10;

let evenOdd = number1 % 2 === 0 ? "Even" : "Odd";

console.log("Q21:", evenOdd);
// Output: Even


// ==========================================
// LOOPS
// ==========================================

// Q22: while vs do-while
// while     -> Checks condition first, then executes
// do-while  -> Executes at least once, then checks condition


// Example:
let count1 = 1;

while (count1 <= 3) {
    console.log("Q22 while:", count1);
    count1++;
}


let count2 = 1;

do {
    console.log("Q22 do-while:", count2);
    count2++;
} while (count2 <= 3);


// Q23: for loop output

console.log("Q23:");

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Output:
// 1
// 2
// 3
// 4
// 5


// Q24: for-of vs for-in
// for-of -> Gives VALUES
// for-in -> Gives INDEXES / KEYS

let fruits = ["Apple", "Banana", "Mango"];

console.log("Q24 for-of:");

for (let fruit of fruits) {
    console.log(fruit);
}

// Apple
// Banana
// Mango


console.log("Q24 for-in:");

for (let index in fruits) {
    console.log(index);
}

// 0
// 1
// 2


// Q25: Sum of numbers from 1 to 100

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log("Q25 Sum:", sum);
// Output: 5050


// ==========================================
// ARRAYS
// ==========================================

// Q26: slice vs splice
// slice  -> Does NOT change original array
// splice -> CHANGES original array

let arr1 = [1, 2, 3, 4, 5];

let slicedArray = arr1.slice(1, 4);

console.log("Q26 slice:", slicedArray);
// [2, 3, 4]

console.log("Q26 original:", arr1);
// [1, 2, 3, 4, 5]


let arr2 = [1, 2, 3, 4, 5];

let splicedArray = arr2.splice(1, 2);

console.log("Q26 splice:", splicedArray);
// [2, 3]

console.log("Q26 original after splice:", arr2);
// [1, 4, 5]


// Q27: Array methods
let arr3 = [1, 2, 3];

arr3.push(4);   // [1, 2, 3, 4]
arr3.pop();     // [1, 2, 3]
arr3.unshift(0); // [0, 1, 2, 3]
arr3.shift();    // [1, 2, 3]

console.log("Q27:", arr3);

// Output:
// [1, 2, 3]


// ==========================================
// FUNCTIONS
// ==========================================

// Q28: Function declaration vs function expression

// Function Declaration
function addNumbers(a, b) {
    return a + b;
}

console.log("Q28 Declaration:", addNumbers(10, 20));


// Function Expression
const subtractNumbers = function (a, b) {
    return a - b;
};

console.log("Q28 Expression:", subtractNumbers(20, 10));

// Function declaration is hoisted,
// so it can be called before its declaration.

// Function expression is stored in a variable
// and cannot be used before initialization.


// Q29: Arrow function
// Arrow functions provide a shorter syntax for functions.

const multiplyNumbers = (a, b) => {
    return a * b;
};

console.log("Q29:", multiplyNumbers(5, 4));
// Output: 20


// Short arrow function
const square = number => number * number;

console.log("Q29 Square:", square(5));
// Output: 25


// Q30: Function output

function greet() {
    return "Hello";
}

let message = greet();

console.log("Q30:", message);

// Output:
// Hello