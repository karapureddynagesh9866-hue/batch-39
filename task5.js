/* ============================================================
   📌 VARIABLES & DATA TYPES (Q1 - Q8)
   ============================================================ */

// Q1: var vs let vs const
// var   -> function-scoped, can be redeclared & reassigned, hoisted (initialized as undefined)
// let   -> block-scoped, can be reassigned but NOT redeclared, hoisted (in temporal dead zone)
// const -> block-scoped, cannot be reassigned or redeclared, must be initialized at declaration

// Q2: Re-declaration
var v1 = "first";
var v1 = "second"; // ✅ allowed with var
console.log("Q2 var redeclare:", v1);

let l1 = "first";
// let l1 = "second"; // ❌ SyntaxError: Identifier 'l1' has already been declared
l1 = "second"; // ✅ reassignment is fine
console.log("Q2 let reassign:", l1);

const c1 = "first";
// const c1 = "second"; // ❌ SyntaxError
// c1 = "second";       // ❌ TypeError: Assignment to constant variable
console.log("Q2 const:", c1);

// Q3: Output
var x = 5;
let y = 10;
const z = 15;
x = 20;
y = 25;
// z = 30; // ❌ This line would throw: TypeError: Assignment to constant variable
console.log("Q3 Output:", x, y, z); // 20 25 15

// Q4: Declaring vs Initializing
let declaredOnly;              // declaration (no value yet -> undefined)
let initialized = "value";     // declaration + initialization

// Q5: Output
let a;
console.log("Q5 Output:", a); // undefined

// Q6: Hoisting
console.log("Q6 hoisted var:", hoistedVar); // undefined (declaration hoisted, value not)
var hoistedVar = "I am hoisted";

// console.log(hoistedLet); // ❌ ReferenceError (Temporal Dead Zone)
let hoistedLet = "I am also hoisted but in TDZ until this line";

// Q7: null vs undefined
// undefined -> variable declared but not assigned a value (default JS state)
// null      -> assigned intentionally to represent "no value" / empty

// Q8: Output
console.log("Q8 typeof null:", typeof null);           // "object" (a long-standing JS quirk)
console.log("Q8 typeof undefined:", typeof undefined); // "undefined"
console.log("Q8 typeof []:", typeof []);                // "object"
console.log("Q8 typeof {}:", typeof {});                // "object"


/* ============================================================
   📌 OPERATORS (Q9 - Q14)
   ============================================================ */

// Q9: == vs ===
// ==  -> loose equality, converts types before comparing
// === -> strict equality, compares value AND type, no conversion
console.log("Q9:", 5 == "5", 5 === "5"); // true false

// Q10: ++i vs i++
let pre = 1;
console.log("Q10 ++i (pre-increment):", ++pre); // 2 -> increments then returns
let post = 1;
console.log("Q10 i++ (post-increment):", post++); // 1 -> returns then increments
console.log("Q10 post value after:", post); // 2

// Q11: Output
{
  let x = 10;
  let y = "5";
  console.log("Q11 x + y:", x + y); // "105" (string concatenation)
  console.log("Q11 x - y:", x - y); // 5     (numeric subtraction, "5" coerced to number)
  console.log("Q11 x * y:", x * y); // 50
  console.log("Q11 x / y:", x / y); // 2
}

// Q12: Logical operators
// &&  -> AND, true if both operands true
// ||  -> OR,  true if at least one operand true
// !   -> NOT, inverts boolean value
console.log("Q12 AND:", true && false);
console.log("Q12 OR:", true || false);
console.log("Q12 NOT:", !true);

// Q13: Output
console.log("Q13:", 5 > 3 && 10 > 5);  // true
console.log("Q13:", 5 > 10 || 10 > 5); // true
console.log("Q13:", !(5 > 3));         // false

// Q14: Ternary operator
// condition ? valueIfTrue : valueIfFalse
let ternaryAge = 20;
let result14 = ternaryAge >= 18 ? "Adult" : "Minor";
console.log("Q14 Ternary:", result14); // Adult


/* ============================================================
   📌 TYPE CASTING (Q15 - Q17)
   ============================================================ */

// Q15: Implicit vs Explicit casting
// Implicit -> JS automatically converts types (e.g. "5" + 1 -> "51")
// Explicit -> Developer manually converts using Number(), String(), Boolean(), etc.

// Q16: Output
console.log("Q16 Number('123'):", Number("123"));   // 123
console.log("Q16 Number('hello'):", Number("hello")); // NaN
console.log("Q16 Number(true):", Number(true));       // 1
console.log("Q16 Number(false):", Number(false));     // 0
console.log("Q16 Boolean(0):", Boolean(0));            // false
console.log("Q16 Boolean('hello'):", Boolean("hello")); // true

// Q17: NaN
// NaN = "Not a Number" - result of an invalid/undefined math operation
console.log("Q17 NaN example:", 0 / "abc"); // NaN
console.log("Q17 typeof NaN:", typeof NaN);  // "number" (yes, NaN is technically type number)


/* ============================================================
   📌 CONDITIONAL STATEMENTS (Q18 - Q21)
   ============================================================ */

// Q18: if-else vs switch
// if-else -> evaluates boolean expressions/conditions, flexible for ranges
// switch  -> compares a single value against multiple fixed cases, cleaner for many exact matches

// Q19: Output
let age = 20;
if (age >= 18) {
  console.log("Q19 Output: Adult");
} else {
  console.log("Q19 Output: Minor");
}

// Q20: Nested if
let num20 = 15;
if (num20 > 0) {
  if (num20 % 2 === 0) {
    console.log("Q20 Nested if: Positive Even");
  } else {
    console.log("Q20 Nested if: Positive Odd"); // this runs
  }
} else {
  console.log("Q20 Nested if: Non-positive");
}

// Q21: Even/Odd using ternary
let num21 = 7;
let evenOrOdd = (num21 % 2 === 0) ? "Even" : "Odd";
console.log("Q21 Even/Odd:", evenOrOdd); // Odd


/* ============================================================
   📌 LOOPS (Q22 - Q25)
   ============================================================ */

// Q22: while vs do-while
// while     -> checks condition BEFORE executing the loop body (may run 0 times)
// do-while  -> executes the loop body ONCE first, then checks condition (runs at least 1 time)

// Q23: Output
console.log("Q23 Output:");
for (let i = 1; i <= 5; i++) {
  console.log(i); // 1 2 3 4 5
}

// Q24: for-of vs for-in
// for-in -> iterates over enumerable property KEYS (used for objects, or array indices)
// for-of -> iterates over the VALUES of an iterable (arrays, strings, maps, sets, etc.)
const sampleArr = ["a", "b", "c"];
for (let index in sampleArr) {
  console.log("Q24 for-in index:", index); // 0 1 2
}
for (let value of sampleArr) {
  console.log("Q24 for-of value:", value); // a b c
}

// Q25: Sum from 1 to 100
let sum25 = 0;
for (let i = 1; i <= 100; i++) {
  sum25 += i;
}
console.log("Q25 Sum 1 to 100:", sum25); // 5050


/* ============================================================
   📌 ARRAYS (Q26 - Q27)
   ============================================================ */

// Q26: slice vs splice
// slice(start, end)  -> returns a NEW array (shallow copy), does NOT modify original
// splice(start, deleteCount, ...items) -> MODIFIES the original array (add/remove elements)
const sliceDemo = [1, 2, 3, 4, 5];
console.log("Q26 slice(1,3):", sliceDemo.slice(1, 3)); // [2, 3], original unchanged
console.log("Q26 original after slice:", sliceDemo);    // [1,2,3,4,5]

const spliceDemo = [1, 2, 3, 4, 5];
spliceDemo.splice(1, 2); // removes 2 items starting at index 1
console.log("Q26 splice result (original mutated):", spliceDemo); // [1, 4, 5]

// Q27: Output
let arr = [1, 2, 3];
arr.push(4);    // [1,2,3,4]
arr.pop();      // [1,2,3]
arr.unshift(0); // [0,1,2,3]
arr.shift();    // [1,2,3]
console.log("Q27 Output:", arr); // [1, 2, 3]


/* ============================================================
   📌 FUNCTIONS (Q28 - Q30)
   ============================================================ */

// Q28: Function declaration vs function expression
// Declaration -> hoisted fully, can be called before it's defined
function declaredFn() {
  return "I am a function declaration";
}

// Expression -> NOT hoisted (the variable is, but not the function body), cannot be called before this line
const expressionFn = function () {
  return "I am a function expression";
};

console.log("Q28 declaration:", declaredFn());
console.log("Q28 expression:", expressionFn());

// Q29: Arrow function
const arrowFn = (a, b) => a + b;
console.log("Q29 Arrow function example:", arrowFn(3, 4)); // 7

// Q30: Output
function greet() {
  return "Hello";
}
let message = greet();
console.log("Q30 Output:", message); // Hello