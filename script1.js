// =====================================================
// 🟢 TASK 1 — var, let, const
// =====================================================

var studentName = "Naveen";
let studentAge = 22;
const collegeName = "ABC College";

console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
console.log("College Name:", collegeName);

// Change var value
studentName = "Rahul";
console.log("Changed var:", studentName);

// Change let value
studentAge = 23;
console.log("Changed let:", studentAge);

// Try changing const
// collegeName = "XYZ College";
// Uncomment the above line to see the error:
// TypeError: Assignment to constant variable.

// Try redeclaring var
var studentName = "Kiran";
console.log("Redeclared var:", studentName);

// Try redeclaring let
// let studentAge = 25;
// Uncomment the above line to see the error:
// SyntaxError: Identifier 'studentAge' has already been declared



// =====================================================
// 🟢 TASK 2 — User Information
// =====================================================

var name = prompt("Enter your name:");
var age = prompt("Enter your age:");
var city = prompt("Enter your city:");

console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);



// =====================================================
// 🟢 TASK 3 — Welcome Message
// =====================================================

var userName = prompt("Enter your name:");

alert("Welcome " + userName + "!");



// =====================================================
// 🟢 TASK 4 — Age Calculator
// =====================================================

var birthYear = prompt("Enter your birth year:");

var currentYear = 2026;
var calculatedAge = currentYear - birthYear;

console.log("Birth Year:", birthYear);
console.log("Age:", calculatedAge);



// =====================================================
// 🔵 TASK 5 — Identify Data Types
// =====================================================

var text = "Hello";
var number = 100;
var decimal = 25.5;
var trueValue = true;
var falseValue = false;
var undefinedValue;
var nullValue = null;

console.log("Hello:", typeof text);
console.log("100:", typeof number);
console.log("25.5:", typeof decimal);
console.log("true:", typeof trueValue);
console.log("false:", typeof falseValue);
console.log("undefined:", typeof undefinedValue);
console.log("null:", typeof nullValue);



// =====================================================
// 🔵 TASK 6 — Student Data
// =====================================================

var student = {
    name: "Naveen",
    age: 22,
    city: "Trichy",
    qualification: "B.Tech",
    isStudent: true
};

console.log("Complete Object:", student);
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Qualification:", student.qualification);
console.log("isStudent:", student.isStudent);



// =====================================================
// 🔵 TASK 7 — Fruit Array
// =====================================================

var fruits = [
    "Apple",
    "Mango",
    "Orange",
    "Banana",
    "Grapes",
    "Papaya"
];

console.log("First Fruit:", fruits[0]);
console.log("Second Fruit:", fruits[1]);
console.log("Last Fruit:", fruits[fruits.length - 1]);
console.log("Total Fruits:", fruits.length);



// =====================================================
// 🟡 TASK 8 — Basic Calculator
// =====================================================

let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);



// =====================================================
// 🟡 TASK 9 — Shopping Bill
// =====================================================

var shirt = 999;
var pant = 1499;
var shoes = 1999;

var totalPrice = shirt + pant + shoes;

console.log("Shirt:", shirt);
console.log("Pant:", pant);
console.log("Shoes:", shoes);
console.log("Total:", totalPrice);



// =====================================================
// 🟡 TASK 10 — Simple Marks Calculation
// =====================================================

var tamil = 80;
var english = 75;
var maths = 90;

var totalMarks = tamil + english + maths;
var averageMarks = totalMarks / 3;

console.log("Total Marks:", totalMarks);
console.log("Average Marks:", averageMarks);



// =====================================================
// 🟠 TASK 11 — Post Increment
// =====================================================

let postIncrementA = 10;

let postIncrementB = postIncrementA++;

console.log("a:", postIncrementA);
console.log("b:", postIncrementB);

// Expected:
// a = 11
// b = 10



// =====================================================
// 🟠 TASK 12 — Pre Increment
// =====================================================

let preIncrementA = 10;

let preIncrementB = ++preIncrementA;

console.log("a:", preIncrementA);
console.log("b:", preIncrementB);

// Expected:
// a = 11
// b = 11



// =====================================================
// 🟠 TASK 13 — Post Decrement
// =====================================================

let postDecrementA = 20;

let postDecrementB = postDecrementA--;

console.log("a:", postDecrementA);
console.log("b:", postDecrementB);

// Expected:
// a = 19
// b = 20



// =====================================================
// 🟠 TASK 14 — Pre Decrement
// =====================================================

let preDecrementA = 20;

let preDecrementB = --preDecrementA;

console.log("a:", preDecrementA);
console.log("b:", preDecrementB);

// Expected:
// a = 19
// b = 19



// =====================================================
// 🔴 TASK 15 — Find the Final Values
// =====================================================

let challengeA = 5;

let challengeB = challengeA++;

let challengeC = ++challengeA;

let challengeD = challengeB--;

console.log("a:", challengeA);
console.log("b:", challengeB);
console.log("c:", challengeC);
console.log("d:", challengeD);

// Answer:
// a = 7
// b = 5
// c = 7
// d = 6



// =====================================================
// 🔴 TASK 16 — Assignment Operators
// =====================================================

// +=
let num1 = 10;
num1 += 5;
console.log("+= :", num1); // 15

// -=
let num2 = 10;
num2 -= 5;
console.log("-= :", num2); // 5

// *=
let num3 = 10;
num3 *= 5;
console.log("*= :", num3); // 50

// /=
let num4 = 10;
num4 /= 5;
console.log("/= :", num4); // 2

// %=
let num5 = 10;
num5 %= 5;
console.log("%= :", num5); // 0

// **=
let num6 = 10;
num6 **= 2;
console.log("**= :", num6); // 100



// =====================================================
// 🏆 TASK 17 — Mini Student Profile
// =====================================================

// Variables
var profileName = "Naveen";
var profileAge = 22;
var profileCity = "Trichy";
var profileCollege = "ABC College";

// Array
var subjects = [
    "JavaScript",
    "HTML",
    "CSS",
    "Java",
    "SQL"
];

// Object
var studentProfile = {
    name: profileName,
    age: profileAge,
    city: profileCity,
    subjects: subjects,
    isStudent: true
};

// Print required information
console.log("Student Name:", studentProfile.name);
console.log("Student Age:", studentProfile.age);
console.log("City:", studentProfile.city);
console.log("First Subject:", studentProfile.subjects[0]);
console.log(
    "Last Subject:",
    studentProfile.subjects[studentProfile.subjects.length - 1]
);
console.log("Total Subjects:", studentProfile.subjects.length);
console.log("Complete Object:", studentProfile);



// =====================================================
// 🔥 FINAL CHALLENGE — User + Calculator
// =====================================================

var firstNumber = prompt("Enter first number:");
var secondNumber = prompt("Enter second number:");

// Convert prompt values into numbers
firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

console.log("First Number:", firstNumber);
console.log("Second Number:", secondNumber);

console.log("Addition:", firstNumber + secondNumber);
console.log("Subtraction:", firstNumber - secondNumber);
console.log("Multiplication:", firstNumber * secondNumber);
console.log("Division:", firstNumber / secondNumber);
console.log("Modulus:", firstNumber % secondNumber);
console.log("Power:", firstNumber ** secondNumber);