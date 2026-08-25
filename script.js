// ==========================================
// JAVASCRIPT VARIABLES - NUMBER WISE TASKS
// ==========================================


// 1. Three keywords used to create variables

console.log("1. Variable keywords:");
console.log("var, let, const");


// 2. Syntax using var

console.log("2. Syntax: var variableName = value;");


// 3. Syntax using let

console.log("3. Syntax: let variableName = value;");


// 4. Syntax using const

console.log("4. Syntax: const variableName = value;");


// 5. Declaration

let declarationExample;

console.log("5. Declaration:");
console.log("let declarationExample;");


// 6. Initialization

let initializationExample = 25;

console.log("6. Initialization:");
console.log(initializationExample);


// 7. Reassignment

let reassignExample = 10;
reassignExample = 20;

console.log("7. Reassignment:");
console.log(reassignExample);


// 8. Redeclaration using var

var redeclareExample = 10;
var redeclareExample = 20;

console.log("8. Redeclaration:");
console.log(redeclareExample);


// 9. Keyword that allows redeclaration

console.log("9. Keyword that allows redeclaration: var");


// 10. Keywords that allow reassignment

console.log("10. Keywords that allow reassignment: var and let");


// 11. Keyword that requires initialization

console.log("11. Keyword that requires initialization: const");


// 12. Declaration and initialization

let age = 25;

console.log("12. let age = 25");
console.log("Declaration: let age");
console.log("Initialization: 25");


// 14. Value of a

var a = 100;

console.log("14. Value of a:");
console.log(a);


// 15. Change number to 200

let number = 100;
number = 200;

console.log("15. Changed number:");
console.log(number);



// ==========================================
// VAR TASKS
// ==========================================


// 16. Output

var a16 = 10;

console.log("16. Output:");
console.log(a16);


// 17. Reassignment using var

var a17 = 10;
a17 = 20;

console.log("17. Output:");
console.log(a17);


// 18. Redeclaration using var

var a18 = 10;
var a18 = 30;

console.log("18. Output:");
console.log(a18);


// 19. var variable named name

var name = "John";

console.log("19. Name:");
console.log(name);


// 20. var variable named price

var price = 500;

console.log("20. Price:");
console.log(price);


// 21. Reassign price

price = 1000;

console.log("21. New Price:");
console.log(price);


// 22. Output

var x22 = 50;
x22 = 100;

console.log("22. Output:");
console.log(x22);


// 23. Can var be reassigned?

console.log("23. Can var be reassigned? Yes");


// 24. Can var be redeclared?

console.log("24. Can var be redeclared? Yes");


// 25. Example of var redeclaration

var studentAge = 20;
var studentAge = 25;

console.log("25. Var redeclaration:");
console.log(studentAge);



// ==========================================
// LET TASKS
// ==========================================


// 26. Create let variable age

let age26 = 25;

console.log("26. Age:");
console.log(age26);


// 27. Output

let age27 = 20;
age27 = 30;

console.log("27. Output:");
console.log(age27);


// 28. Can let be reassigned?

console.log("28. Can let be reassigned? Yes");


// 29. Can let be redeclared?

console.log("29. Can let be redeclared? No");


// 30. let redeclaration error example

console.log("30. Error example:");
console.log("let name = 'John';");
console.log("let name = 'David';");
console.log("Error: Cannot redeclare let variable in the same scope.");


// 31. Create city

let city = "Chennai";

console.log("31. City:");
console.log(city);


// 32. Change city

city = "Salem";

console.log("32. New City:");
console.log(city);


// 33. Output

let x33 = 10;
x33 = 50;

console.log("33. Output:");
console.log(x33);


// 34. Create salary

let salary = 25000;

console.log("34. Salary:");
console.log(salary);


// 35. Reassign salary

salary = 30000;

console.log("35. New Salary:");
console.log(salary);



// ==========================================
// CONST TASKS
// ==========================================


// 36. Create pi

const pi = 3.14;

console.log("36. Pi:");
console.log(pi);


// 37. Can const be reassigned?

console.log("37. Can const be reassigned? No");


// 38. Can const be redeclared?

console.log("38. Can const be redeclared? No");


// 39. const must be initialized

console.log("39. Correct const code:");

const age39 = 25;

console.log(age39);


// 40. const reassignment error explanation

console.log("40. const price = 500;");
console.log("price = 1000;");
console.log("Error: const cannot be reassigned.");


// 41. Create country

const country = "India";

console.log("41. Country:");
console.log(country);


// 42. Output

const x42 = 100;

console.log("42. Output:");
console.log(x42);


// 43. Keyword for value that should not change

console.log("43. Use: const");


// 44. Difference between let and const

console.log("44. let can be reassigned.");
console.log("const cannot be reassigned.");


// 45. Difference between var and const

console.log("45. var can be reassigned and redeclared.");
console.log("const cannot be reassigned or redeclared.");



// ==========================================
// PRINTING AND CONSOLE
// ==========================================


// 46. Print Hello World

console.log("46.");
console.log("Hello World");


// 47. Print number 500

console.log("47.");
console.log(500);


// 48. console.warn()

console.warn("48. This is a warning message.");


// 49. console.error()

console.error("49. This is an error message.");


// 50. alert()

// Uncomment to test
// alert("Hello");


// prompt()

// Uncomment to test
// let userName = prompt("Enter your name:");


// confirm()

// Uncomment to test
// let result = confirm("Do you want to continue?");


// document.writeln()

// Uncomment to test
// document.writeln("Hello World");


// console.log()

console.log("50. console.log() prints output in the console.");



// ==========================================
// PRACTICAL TASK 1
// Student Name, Age and Mark
// ==========================================

let studentName = "John";
let studentAge2 = 20;
let studentMark = 85;

console.log("PRACTICAL TASK 1");
console.log("Student Name: " + studentName);
console.log("Age: " + studentAge2);
console.log("Mark: " + studentMark);



// ==========================================
// PRACTICAL TASK 2
// Ask name using prompt and display using alert
// ==========================================

// Uncomment to run

/*
let userName = prompt("Enter your name:");

alert("Your name is: " + userName);
*/



// ==========================================
// PRACTICAL TASK 3
// Ask age and print using console.log
// ==========================================

// Uncomment to run

/*
let userAge = prompt("Enter your age:");

console.log("Your age is: " + userAge);
*/



// ==========================================
// PRACTICAL TASK 4
// Ask a question using confirm
// ==========================================

// Uncomment to run

/*
let answer = confirm("Do you want to continue?");

console.log(answer);
*/



// ==========================================
// PRACTICAL TASK 5
// Ask name and display on webpage
// ==========================================

// Uncomment to run

/*
let displayName = prompt("Enter your name:");

document.writeln("<h2>Your name is: " + displayName + "</h2>");
*/