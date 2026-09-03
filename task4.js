// =====================================================
// JAVASCRIPT PRACTICE TASKS
// TASK 1 TO TASK 32
// =====================================================


// 🟢 TASK 1 — FOR LOOP
// Print numbers from 1 to 10
// =====================================================

console.log("===== TASK 1 =====");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// =====================================================
// 🟢 TASK 2 — REVERSE NUMBER
// Print numbers from 10 to 1
// =====================================================

console.log("===== TASK 2 =====");

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// =====================================================
// 🟢 TASK 3 — EVEN NUMBERS
// Print even numbers from 1 to 20
// =====================================================

console.log("===== TASK 3 =====");

for (let i = 1; i <= 20; i++) {

    if (i % 2 === 0) {
        console.log(i);
    }

}


// =====================================================
// 🟢 TASK 4 — ODD NUMBERS
// Print odd numbers from 1 to 20
// =====================================================

console.log("===== TASK 4 =====");

for (let i = 1; i <= 20; i++) {

    if (i % 2 !== 0) {
        console.log(i);
    }

}


// =====================================================
// 🟡 TASK 5 — MULTIPLICATION TABLE
// Get a number from the user
// =====================================================

console.log("===== TASK 5 =====");

let number = Number(prompt("Task 5: Enter a number"));

for (let i = 1; i <= 10; i++) {

    console.log(number + " x " + i + " = " + (number * i));

}


// =====================================================
// 🔵 TASK 6 — WHILE LOOP
// Countdown from 10 to 1
// =====================================================

console.log("===== TASK 6 =====");

let count = 10;

while (count >= 1) {

    console.log(count);
    count--;

}


// =====================================================
// 🔵 TASK 7 — SUM OF NUMBERS
// 1 + 2 + 3 + ... + 10
// =====================================================

console.log("===== TASK 7 =====");

let i = 1;
let sum = 0;

while (i <= 10) {

    sum = sum + i;
    i++;

}

console.log("Sum =", sum);


// =====================================================
// 🟣 TASK 8 — DO WHILE
// Print 1 to 5
// =====================================================

console.log("===== TASK 8 =====");

let num = 1;

do {

    console.log(num);
    num++;

} while (num <= 5);


// =====================================================
// 🟣 TASK 9 — DO WHILE UNDERSTANDING
// =====================================================

console.log("===== TASK 9 =====");

let a = 10;

do {

    console.log(a);
    a++;

} while (a <= 5);

/*
Output:
10

Why?

do...while executes the code first.
After executing, it checks the condition.

10 is printed first.
Then a becomes 11.
11 <= 5 is false.
So the loop stops.
*/


// =====================================================
// 🟠 TASK 10 — FOR...OF
// Print every character of javascript
// =====================================================

console.log("===== TASK 10 =====");

let name = "javascript";

for (let character of name) {

    console.log(character);

}


// =====================================================
// 🟠 TASK 11 — FOR...OF ARRAY
// Print every fruit
// =====================================================

console.log("===== TASK 11 =====");

let fruits = [
    "apple",
    "orange",
    "banana",
    "mango",
    "grapes"
];

for (let fruit of fruits) {

    console.log(fruit);

}


// =====================================================
// 🟠 TASK 12 — STUDENT NAMES
// =====================================================

console.log("===== TASK 12 =====");

let students = [
    "Arun",
    "Priya",
    "Rahul",
    "Naveen",
    "Anjali"
];

for (let student of students) {

    console.log("Student: " + student);

}


// =====================================================
// 🔴 TASK 13 — EMPLOYEE OBJECT
// =====================================================

console.log("===== TASK 13 =====");

let employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};

for (let key in employee) {

    console.log(key, employee[key]);

}


// =====================================================
// 🔴 TASK 14 — PRODUCT OBJECT
// =====================================================

console.log("===== TASK 14 =====");

let product = {
    productName: "Laptop",
    price: 50000,
    brand: "Dell",
    category: "Electronics",
    stock: 10
};

for (let key in product) {

    console.log(key, product[key]);

}


// =====================================================
// 🟡 TASK 15 — SIMPLE FUNCTION
// =====================================================

console.log("===== TASK 15 =====");

function welcome() {

    console.log("Welcome to JavaScript");

}

welcome();
welcome();
welcome();


// =====================================================
// 🟡 TASK 16 — FUNCTION WITH PARAMETER
// =====================================================

console.log("===== TASK 16 =====");

function greet(name) {

    console.log("Hello " + name);

}

greet("Naveen");
greet("Arun");
greet("Priya");


// =====================================================
// 🟡 TASK 17 — MULTIPLE PARAMETERS
// =====================================================

console.log("===== TASK 17 =====");

function student(name, age, department) {

    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);

}

student("Arun", 22, "CSE");
student("Priya", 23, "ECE");
student("Naveen", 21, "IT");


// =====================================================
// 🔵 TASK 18 — RETURN
// Addition function
// =====================================================

console.log("===== TASK 18 =====");

function add(x, y) {

    return x + y;

}

let result = add(10, 20);

console.log(result);


// =====================================================
// 🔵 TASK 19 — SALARY
// =====================================================

console.log("===== TASK 19 =====");

function salary(amount) {

    return amount;

}

let employeeSalary = salary(50000);

console.log("Salary:", employeeSalary);


// =====================================================
// 🔵 TASK 20 — BONUS CALCULATOR
// =====================================================

console.log("===== TASK 20 =====");

function bonus(salaryAmount, bonusAmount) {

    return salaryAmount + bonusAmount;

}

let totalSalary = bonus(50000, 5000);

console.log("Total Salary:", totalSalary);


// =====================================================
// 🟣 TASK 21 — DEFAULT PARAMETER
// =====================================================

console.log("===== TASK 21 =====");

function employeeDetails(name, role = "Developer") {

    console.log("Name:", name);
    console.log("Role:", role);

}

employeeDetails("Arun");
employeeDetails("Priya", "Designer");


// =====================================================
// 🔥 TASK 22 — NAMED FUNCTION
// Square of 5 different numbers
// =====================================================

console.log("===== TASK 22 =====");

function square(number) {

    return number * number;

}

console.log(square(2));
console.log(square(3));
console.log(square(4));
console.log(square(5));
console.log(square(10));


// =====================================================
// 🔥 TASK 23 — ANONYMOUS FUNCTION
// =====================================================

console.log("===== TASK 23 =====");

let calculate = function(a, b) {

    return a + b;

};

console.log(calculate(10, 20));


// =====================================================
// 🔥 TASK 24 — ARROW FUNCTION
// Multiplication
// =====================================================

console.log("===== TASK 24 =====");

let multiply = (a, b) => {

    return a * b;

};

console.log(multiply(10, 5));


// =====================================================
// 🔴 TASK 25 — SCOPE
// var vs let vs const
// =====================================================

console.log("===== TASK 25 =====");

function test() {

    if (true) {

        var scopeA = 10;
        let scopeB = 20;
        const scopeC = 30;

        console.log(scopeA);
        console.log(scopeB);
        console.log(scopeC);

    }

    console.log(scopeA);

    /*
    console.log(scopeB);
    console.log(scopeC);

    These two will give ReferenceError
    because let and const are block scoped.
    */

}

test();

/*
Output:

10
20
30
10

var     → function scoped
let     → block scoped
const   → block scoped
*/


// =====================================================
// 🟠 TASK 26 — HOISTING WITH VAR
// =====================================================

console.log("===== TASK 26 =====");

console.log(hoistA);

var hoistA = 10;

/*
Output:

undefined

var declaration is hoisted.
The assignment happens later.
*/


// =====================================================
// 🟠 TASK 27 — HOISTING WITH LET
// =====================================================

console.log("===== TASK 27 =====");

/*
Do NOT run the following code because it stops
the rest of the JavaScript program with ReferenceError.

console.log(hoistB);
let hoistB = 20;

Result:
ReferenceError

let is in the Temporal Dead Zone before declaration.
*/


// =====================================================
// 🟠 TASK 28 — HOISTING WITH CONST
// =====================================================

console.log("===== TASK 28 =====");

/*
Do NOT run the following code because it stops
the rest of the JavaScript program with ReferenceError.

console.log(hoistC);
const hoistC = 30;

Result:
ReferenceError

const is also in the Temporal Dead Zone.
*/


// =====================================================
// HOISTING SUMMARY
// =====================================================

console.log("===== HOISTING SUMMARY =====");

console.log("var   → undefined before assignment");
console.log("let   → ReferenceError");
console.log("const → ReferenceError");


// =====================================================
// 🟢 TASK 29 — IIFE
// Immediately Invoked Function Expression
// =====================================================

console.log("===== TASK 29 =====");

(function () {

    console.log("Welcome to JavaScript");

})();


// IIFE with parameters

(function (productName, discount) {

    console.log(
        productName + " has " + discount + "% discount"
    );

})("Laptop", 20);


// =====================================================
// 🔵 TASK 30 — CALLBACK / HIGHER-ORDER FUNCTION
// =====================================================

console.log("===== TASK 30 =====");

function welcomeMessage() {

    console.log("Welcome");

}

function execute(callback) {

    callback();

}

execute(welcomeMessage);

/*
welcomeMessage → Callback function

execute → Higher-Order Function
*/


// =====================================================
// 🟣 TASK 31 — GENERATOR FUNCTION
// Cashback
// =====================================================

console.log("===== TASK 31 =====");

function* cashback() {

    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";

}

let cashbackResult = cashback();

for (let value of cashbackResult) {

    console.log(value);

}


// =====================================================
// 🏆 TASK 32 — EMPLOYEE MANAGEMENT SYSTEM
// =====================================================

console.log("===== TASK 32 =====");


// -----------------------------------------------------
// EMPLOYEE DATA
// -----------------------------------------------------

let employees = [

    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },

    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },

    {
        name: "Naveen",
        age: 27,
        department: "IT",
        role: "Senior Developer",
        salary: 60000
    },

    {
        name: "Anjali",
        age: 26,
        department: "Finance",
        role: "Accountant",
        salary: 45000
    }

];


// -----------------------------------------------------
// 1. FOR...OF
// Print every employee
// -----------------------------------------------------

console.log("===== ALL EMPLOYEES =====");

for (let employee of employees) {

    console.log(employee);

}


// -----------------------------------------------------
// 2. FOR...IN
// Print keys and values
// -----------------------------------------------------

console.log("===== EMPLOYEE KEYS AND VALUES =====");

for (let employee of employees) {

    for (let key in employee) {

        console.log(key + ":", employee[key]);

    }

    console.log("-------------------------");

}


// -----------------------------------------------------
// 3. FUNCTION
// Display employee information
// -----------------------------------------------------

function displayEmployee(employee) {

    console.log("Name:", employee.name);
    console.log("Age:", employee.age);
    console.log("Department:", employee.department);
    console.log("Role:", employee.role);
    console.log("Salary:", employee.salary);

}


// -----------------------------------------------------
// 4. FUNCTION PARAMETER
// Pass employee object to function
// -----------------------------------------------------

console.log("===== DISPLAY EMPLOYEE INFORMATION =====");

for (let employee of employees) {

    displayEmployee(employee);

    console.log("-------------------------");

}


// -----------------------------------------------------
// 5. RETURN
// Return employee salary
// -----------------------------------------------------

function getEmployeeSalary(employee) {

    return employee.salary;

}

let arunSalary = getEmployeeSalary(employees[0]);

console.log("Arun Salary:", arunSalary);


// -----------------------------------------------------
// 6. CONDITION
// Check salary >= 40000
// -----------------------------------------------------

console.log("===== SALARY CHECK =====");

for (let employee of employees) {

    if (employee.salary >= 40000) {

        console.log(
            employee.name + " earns 40000 or more"
        );

    } else {

        console.log(
            employee.name + " earns less than 40000"
        );

    }

}


// -----------------------------------------------------
// 7. ARROW FUNCTION
// Calculate annual salary
// -----------------------------------------------------

let annualSalary = (salary) => {

    return salary * 12;

};

console.log(
    "Annual Salary:",
    annualSalary(40000)
);


// -----------------------------------------------------
// 8. GENERATOR
// Employee Benefits
// -----------------------------------------------------

function* employeeBenefits() {

    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";

}

console.log("===== EMPLOYEE BENEFITS =====");

let benefits = employeeBenefits();

for (let benefit of benefits) {

    console.log(benefit);

}