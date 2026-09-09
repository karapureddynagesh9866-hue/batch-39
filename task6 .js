```javascript
// TASK 1 — STUDENT RESULT ANALYZER

function studentResult(name, department, marks) {

    let total = marks.reduce((sum, mark) => sum + mark, 0);

    let average = total / marks.length;

    let result;

    let grade;

git status
    if (average >= 50) {

        result = "PASS";

    } else {

        result = "FAIL";

    }


    if (average >= 90) {

        grade = "A";

    } else if (average >= 75) {

        grade = "B";

    } else if (average >= 60) {

        grade = "C";

    } else if (average >= 50) {

        grade = "D";

    } else {

        grade = "Fail";

    }


    console.log("Student Name:", name);

    console.log("Department:", department);

    console.log("Marks:", marks);

    console.log("Total Marks:", total);

    console.log("Average:", average);

    console.log("Result:", result);

    console.log("Grade:", grade);

}


studentResult(
    "Arun",
    "Computer Science",
    [85, 90, 78, 92, 88]
);


// TASK 2 — EMPLOYEE SALARY CALCULATOR

let employee = {

    name: "Arun",

    role: "Developer",

    salary: 45000,

    experience: 2

};


function calculateSalary(employee) {

    let basicSalary = employee.salary;

    let bonus = 0;


    if (employee.experience >= 5) {

        bonus = basicSalary * 0.15;

    } else if (employee.experience >= 2) {

        bonus = basicSalary * 0.10;

    }


    let finalSalary = basicSalary + bonus;


    console.log("Name:", employee.name);

    console.log("Role:", employee.role);

    console.log("Basic Salary:", basicSalary);

    console.log("Bonus:", bonus);

    console.log("Final Salary:", finalSalary);

}


calculateSalary(employee);


// TASK 3 — PRODUCT FILTER SYSTEM

let products = [

    {
        name: "Laptop",
        price: 55000,
        category: "electronics"
    },

    {
        name: "Mouse",
        price: 800,
        category: "electronics"
    },

    {
        name: "Shirt",
        price: 1200,
        category: "fashion"
    },

    {
        name: "Shoes",
        price: 2500,
        category: "fashion"
    },

    {
        name: "Phone",
        price: 30000,
        category: "electronics"
    }

];


let productsAbove2000 = products.filter(

    product => product.price > 2000

);


let electronics = products.filter(

    product => product.category === "electronics"

);


let productBelow1000 = products.find(

    product => product.price < 1000

);


let totalProductPrice = products.reduce(

    (total, product) => total + product.price,

    0

);


let anyAbove50000 = products.some(

    product => product.price > 50000

);


let everyAbove500 = products.every(

    product => product.price > 500

);


console.log("Products above ₹2000:", productsAbove2000);

console.log("Electronics:", electronics);

console.log("First product below ₹1000:", productBelow1000);

console.log("Total Product Price:", totalProductPrice);

console.log("Any product above ₹50000:", anyAbove50000);

console.log("Every product above ₹500:", everyAbove500);


// TASK 4 — EMPLOYEE MANAGEMENT

let employees = [

    {
        id: 101,
        name: "Kavin",
        role: "Frontend Developer",
        salary: 40000
    },

    {
        id: 102,
        name: "Arun",
        role: "Backend Developer",
        salary: 55000
    },

    {
        id: 103,
        name: "Priya",
        role: "HR Manager",
        salary: 60000
    },

    {
        id: 104,
        name: "Dinesh",
        role: "UI Designer",
        salary: 45000
    },

    {
        id: 105,
        name: "Karthi",
        role: "Software Engineer",
        salary: 70000
    },

    {
        id: 106,
        name: "Meena",
        role: "Tester",
        salary: 35000
    }

];


let employeeNames = employees.map(

    employee => employee.name

);


let employeesAbove40000 = employees.filter(

    employee => employee.salary > 40000

);


let employee103 = employees.find(

    employee => employee.id === 103

);


let totalSalary = employees.reduce(

    (total, employee) => total + employee.salary,

    0

);


let highestPaidEmployee = employees.reduce(

    (highest, employee) =>

        employee.salary > highest.salary
            ? employee
            : highest

);


let sortedEmployees = [...employees].sort(

    (a, b) => b.salary - a.salary

);


let onlyNames = employees.map(

    employee => employee.name

);


console.log("Employee Names:", employeeNames);

console.log("Employees above ₹40000:", employeesAbove40000);

console.log("Employee ID 103:", employee103);

console.log("Total Salary:", totalSalary);

console.log("Highest Paid Employee:", highestPaidEmployee);

console.log("Sorted Employees:", sortedEmployees);

console.log("Only Names:", onlyNames);


// TASK 5 — SHOPPING CART

let cart = [

    {
        name: "Laptop",
        price: 50000,
        quantity: 1
    },

    {
        name: "Mouse",
        price: 1000,
        quantity: 2
    },

    {
        name: "Keyboard",
        price: 2000,
        quantity: 1
    }

];


function calculateCart(cart) {

    let totalCartValue = cart.reduce(

        (total, item) =>

            total + item.price * item.quantity,

        0

    );


    let discount = 0;


    if (totalCartValue > 50000) {

        discount = totalCartValue * 0.10;

    }


    let finalAmount = totalCartValue - discount;


    cart.forEach(item => {

        let itemTotal = item.price * item.quantity;

        console.log(
            item.name,
            "Item Total:",
            itemTotal
        );

    });


    console.log("Total Cart Value:", totalCartValue);

    console.log("Discount:", discount);

    console.log("Final Payable Amount:", finalAmount);

}


calculateCart(cart);


// TASK 6 — STUDENT SEARCH SYSTEM

let students = [

    {
        name: "Arun",
        age: 21,
        mark: 85
    },

    {
        name: "Priya",
        age: 22,
        mark: 92
    },

    {
        name: "Karthi",
        age: 20,
        mark: 67
    },

    {
        name: "Dinesh",
        age: 23,
        mark: 45
    }

];


let allStudentNames = students.map(

    student => student.name

);


let studentsAbove80 = students.filter(

    student => student.mark > 80

);


let priya = students.find(

    student => student.name === "Priya"

);


let totalMarks = students.reduce(

    (total, student) => total + student.mark,

    0

);


let averageMark = totalMarks / students.length;


let anyoneFailed = students.some(

    student => student.mark < 50

);


let everyoneAbove40 = students.every(

    student => student.mark > 40

);


let sortedStudents = [...students].sort(

    (a, b) => b.mark - a.mark

);


console.log("Student Names:", allStudentNames);

console.log("Students above 80:", studentsAbove80);

console.log("Priya:", priya);

console.log("Average Mark:", averageMark);

console.log("Anyone Failed:", anyoneFailed);

console.log("Everyone above 40:", everyoneAbove40);

console.log("Sorted Students:", sortedStudents);


// TASK 7 — ARRAY TRANSFORMATION

let numbers = [
    12,
    5,
    8,
    21,
    44,
    7,
    30,
    15
];


let doubledNumbers = numbers.map(

    number => number * 2

);


let evenNumbers = numbers.filter(

    number => number % 2 === 0

);


let greaterThan15 = numbers.filter(

    number => number > 15

);


let firstGreaterThan20 = numbers.find(

    number => number > 20

);


let numberTotal = numbers.reduce(

    (total, number) => total + number,

    0

);


let anyGreaterThan40 = numbers.some(

    number => number > 40

);


let everyPositive = numbers.every(

    number => number > 0

);


let numbersHighToLow = [...numbers].sort(

    (a, b) => b - a

);


console.log("Doubled Numbers:", doubledNumbers);

console.log("Even Numbers:", evenNumbers);

console.log("Greater Than 15:", greaterThan15);

console.log("First Greater Than 20:", firstGreaterThan20);

console.log("Total:", numberTotal);

console.log("Any Greater Than 40:", anyGreaterThan40);

console.log("Every Number Positive:", everyPositive);

console.log("High To Low:", numbersHighToLow);


// TASK 8 — STRING ANALYZER

let sentence = prompt("Enter a sentence:");


if (sentence !== null && sentence.trim() !== "") {

    let totalCharacters = sentence.length;

    let upperCaseSentence = sentence.toUpperCase();

    let lowerCaseSentence = sentence.toLowerCase();

    let containsJavaScript =
        sentence.includes("JavaScript");

    let firstCharacter =
        sentence.slice(0, 1);

    let lastCharacter =
        sentence.slice(-1);

    let words =
        sentence.trim().split(/\s+/);

    let numberOfWords =
        words.length;

    let replacedSentence =
        sentence.replace(
            "JavaScript",
            "Python"
        );


    console.log("Sentence:", sentence);

    console.log(
        "Total Characters:",
        totalCharacters
    );

    console.log(
        "Uppercase:",
        upperCaseSentence
    );

    console.log(
        "Lowercase:",
        lowerCaseSentence
    );

    console.log(
        "Contains JavaScript:",
        containsJavaScript
    );

    console.log(
        "First Character:",
        firstCharacter
    );

    console.log(
        "Last Character:",
        lastCharacter
    );

    console.log(
        "Number Of Words:",
        numberOfWords
    );

    console.log(
        "Replaced Sentence:",
        replacedSentence
    );

    console.log(
        "Words Array:",
        words
    );

} else {

    console.log("No sentence entered.");

}


// ======================================================
// FINAL MINI PROJECT — EMPLOYEE DASHBOARD
// ======================================================

let dashboardEmployees = [

    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },

    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },

    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }

];


// 1. Display all employees

console.log("All Employees:");

dashboardEmployees.forEach(

    employee => console.log(employee)

);


// 2. Search employee

function searchEmployee(name) {

    let result = dashboardEmployees.find(

        employee =>
            employee.name.toLowerCase() ===
            name.toLowerCase()

    );

    console.log("Search Result:", result);

}


searchEmployee("Arun");


// 3. Department filter

function filterDepartment(department) {

    let result = dashboardEmployees.filter(

        employee =>
            employee.department.toLowerCase() ===
            department.toLowerCase()

    );

    console.log(
        "Department Employees:",
        result
    );

}


filterDepartment("IT");


// 4. Salary filter

let employeesAbove50000 =
    dashboardEmployees.filter(

        employee => employee.salary > 50000

    );


console.log(
    "Employees Above ₹50000:",
    employeesAbove50000
);


// 5. Total company salary

let totalCompanySalary =
    dashboardEmployees.reduce(

        (total, employee) =>
            total + employee.salary,

        0

    );


console.log(
    "Total Company Salary:",
    totalCompanySalary
);


// 6. Highest salary

let highestSalaryEmployee =
    dashboardEmployees.reduce(

        (highest, employee) =>

            employee.salary > highest.salary
                ? employee
                : highest

    );


console.log(
    "Highest Paid Employee:",
    highestSalaryEmployee
);


// 7. Experience more than 3 years

let experiencedEmployees =
    dashboardEmployees.filter(

        employee => employee.experience > 3

    );


console.log(
    "Employees With More Than 3 Years Experience:",
    experiencedEmployees
);


// 8. Sort low to high

let salaryLowToHigh =
    [...dashboardEmployees].sort(

        (a, b) => a.salary - b.salary

    );


console.log(
    "Salary Low To High:",
    salaryLowToHigh
);


// Sort high to low

let salaryHighToLow =
    [...dashboardEmployees].sort(

        (a, b) => b.salary - a.salary

    );


console.log(
    "Salary High To Low:",
    salaryHighToLow
);


// 9. Statistics

let totalEmployees =
    dashboardEmployees.length;


let highestSalary =
    highestSalaryEmployee.salary;


let averageSalary =
    totalCompanySalary / totalEmployees;


console.log("========== STATISTICS ==========");

console.log(
    "Total Employees:",
    totalEmployees
);

console.log(
    "Total Salary: ₹" + totalCompanySalary
);

console.log(
    "Highest Salary: ₹" + highestSalary
);

console.log(
    "Average Salary: ₹" +
    Math.round(averageSalary)
);
```;
