```javascript
// Q1: var, let, const

var name = "John";
let age = 20;
const country = "India";


// Q2: Redeclaration

var a = 10;
var a = 20;

let b = 10;
// let b = 20; // Error

const c = 10;
// const c = 20; // Errorgit co


// Q3

var x = 5;
let y = 10;
const z = 15;

x = 20;
y = 25;

console.log(x, y, z);


// Q4: Declaration and Initialization

let number;
number = 100;

console.log(number);


// Q5

let value;
console.log(value);


// Q6: Hoisting

console.log(test);
var test = 50;


// Q7: null and undefined

let first;
let second = null;

console.log(first);
console.log(second);


// Q8

console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});


// Q9: == and ===

console.log(5 == "5");
console.log(5 === "5");


// Q10: ++i and i++

let i = 5;

console.log(++i);

let j = 5;

console.log(j++);
console.log(j);


// Q11

let num1 = 10;
let num2 = "5";

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);


// Q12: Logical operators

console.log(true && true);
console.log(true || false);
console.log(!true);


// Q13

console.log(5 > 3 && 10 > 5);
console.log(5 > 10 || 10 > 5);
console.log(!(5 > 3));


// Q14: Ternary operator

let age1 = 20;

let result = age1 >= 18 ? "Adult" : "Minor";

console.log(result);


// Q15: Type casting

console.log("5" * 2);
console.log(Number("5") + 2);


// Q16

console.log(Number("123"));
console.log(Number("hello"));
console.log(Number(true));
console.log(Number(false));
console.log(Boolean(0));
console.log(Boolean("hello"));


// Q17: NaN

let result1 = Number("hello");

console.log(result1);


// Q18: if-else

let marks = 75;

if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}


// Q19

let age2 = 20;

if (age2 >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}


// Q20: Nested if

let age3 = 20;
let license = true;

if (age3 >= 18) {
    if (license) {
        console.log("Can Drive");
    }
}


// Q21: Even or Odd

let number1 = 10;

let evenOdd = number1 % 2 === 0 ? "Even" : "Odd";

console.log(evenOdd);


// Q22: while loop

let count = 1;

while (count <= 3) {
    console.log(count);
    count++;
}


// do-while

let count1 = 1;

do {
    console.log(count1);
    count1++;
} while (count1 <= 3);


// Q23: for loop

for (let k = 1; k <= 5; k++) {
    console.log(k);
}


// Q24: for-of

let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}


// for-in

for (let index in fruits) {
    console.log(index);
}


// Q25: Sum 1 to 100

let sum = 0;

for (let n = 1; n <= 100; n++) {
    sum = sum + n;
}

console.log(sum);


// Q26: slice

let arr1 = [1, 2, 3, 4, 5];

console.log(arr1.slice(1, 4));


// splice

let arr2 = [1, 2, 3, 4, 5];

arr2.splice(1, 2);

console.log(arr2);


// Q27

let arr3 = [1, 2, 3];

arr3.push(4);
arr3.pop();
arr3.unshift(0);
arr3.shift();

console.log(arr3);


// Q28: Function declaration

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));


// Function expression

const subtract = function(a, b) {
    return a - b;
};

console.log(subtract(20, 10));


// Q29: Arrow function

const multiply = (a, b) => {
    return a * b;
};

console.log(multiply(5, 4));


// Q30

function greet() {
    return "Hello";
}

let message = greet();

console.log(message);
```