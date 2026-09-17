// ==========================================
// JAVASCRIPT BEGINNER TASKS
// ==========================================


// ==========================
// TASK 1 - VARIABLES
// ==========================

var name = "Naveen";
let age = 25;
const city = "Trichy";
const college = "ABC College";

console.log("TASK 1");
console.log(name);
console.log(age);
console.log(city);
console.log(college);

name = "Rahul";
age = 26;

console.log("Changed var:", name);
console.log("Changed let:", age);

// const cannot be changed
// city = "Chennai";


// ==========================
// TASK 2 - PRINTING STATEMENTS
// ==========================

console.log("TASK 2");

console.log("Hello JavaScript");

alert("Welcome to JavaScript");

confirm("Are you ready?");

let userName = prompt("Enter your name");
console.log(userName);

document.writeln("Hello from JavaScript");


// ==========================
// TASK 3 - USER DETAILS
// ==========================

console.log("TASK 3");

let userDetailsName = prompt("Enter your name");
let userAge = prompt("Enter your age");
let userCity = prompt("Enter your city");
let qualification = prompt("Enter your qualification");

console.log("Name:", userDetailsName);
console.log("Age:", userAge);
console.log("City:", userCity);
console.log("Qualification:", qualification);


// ==========================
// TASK 4 - DATA TYPES
// ==========================

console.log("TASK 4");

let data1 = "JavaScript";
let data2 = 100;
let data3 = 99.5;
let data4 = true;
let data5 = false;
let data6 = undefined;
let data7 = null;

console.log(data1, typeof data1);
console.log(data2, typeof data2);
console.log(data3, typeof data3);
console.log(data4, typeof data4);
console.log(data5, typeof data5);
console.log(data6, typeof data6);
console.log(data7, typeof data7);


// ==========================
// TASK 5 - STUDENT ARRAY
// ==========================

console.log("TASK 5");

let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];

console.log("First:", students[0]);
console.log("Second:", students[1]);
console.log("Last:", students[students.length - 1]);
console.log("Total:", students.length);


// ==========================
// TASK 6 - EMPLOYEE OBJECT
// ==========================

console.log("TASK 6");

let employee = {
    name: "Ravi",
    age: 25,
    role: "Software Developer",
    skills: ["HTML", "CSS", "JavaScript"],
    isWorking: true,
    qualification: ["B.Tech", "JavaScript Course"]
};

console.log("Name:", employee.name);
console.log("Age:", employee.age);
console.log("Role:", employee.role);
console.log("First Skill:", employee.skills[0]);
console.log(
    "Last Qualification:",
    employee.qualification[employee.qualification.length - 1]
);
console.log("Working:", employee.isWorking);


// ==========================
// TASK 7 - CALCULATOR
// ==========================

console.log("TASK 7");

let a = 20;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponentiation:", a ** b);


// ==========================
// TASK 8 - SHOPPING BILL
// ==========================

console.log("TASK 8");

let shirt = 999;
let pant = 1499;
let shoes = 1999;
let bag = 799;

let totalPrice = shirt + pant + shoes + bag;

console.log("Total Price:", totalPrice);


// ==========================
// TASK 9 - INCREMENT / DECREMENT
// ==========================

console.log("TASK 9");

let incA = 10;
let incB = incA++;

console.log(incA);
console.log(incB);

let preA = 10;
let preB = ++preA;

console.log(preA);
console.log(preB);

let decA = 10;
let decB = decA--;

console.log(decA);
console.log(decB);

let preDecA = 10;
let preDecB = --preDecA;

console.log(preDecA);
console.log(preDecB);


// ==========================
// TASK 10 - ASSIGNMENT
// ==========================

console.log("TASK 10");

let num1 = 10;

num1 += 5;
console.log("+= :", num1);

let num2 = 10;
num2 -= 3;
console.log("-= :", num2);

let num3 = 10;
num3 *= 2;
console.log("*= :", num3);

let num4 = 10;
num4 /= 4;
console.log("/= :", num4);

let num5 = 10;
num5 %= 3;
console.log("%= :", num5);

let num6 = 10;
num6 **= 2;
console.log("**= :", num6);


// ==========================
// TASK 11 - COMPARISON
// ==========================

console.log("TASK 11");

console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 9);
console.log(5 == "5");
console.log(5 === "5");
console.log(10 != "10");
console.log(10 !== "10");


// ==========================
// TASK 12 - AND
// ==========================

console.log("TASK 12");

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);


// ==========================
// TASK 13 - OR
// ==========================

console.log("TASK 13");

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);


// ==========================
// TASK 14 - NOT
// ==========================

console.log("TASK 14");

console.log(!true);
console.log(!false);
console.log(!(5 > 10));
console.log(!(10 > 5));


// ==========================
// TASK 15 - COMBINATION
// ==========================

console.log("TASK 15");

console.log(5 == "5" && !(5 === 5) || 6 > 7);

console.log(10 > 5 && 8 < 12 || 4 === "4");

console.log(7 === 7 && 10 != "10" || 5 >= 5);

console.log(15 < 10 || 20 > 15 && 5 == "5");


// ==========================
// TASK 16 - VOTING TERNARY
// ==========================

console.log("TASK 16");

let votingAge = 20;

let votingResult = votingAge >= 18
    ? "Eligible to vote"
    : "Not eligible";

console.log(votingResult);


// ==========================
// TASK 17 - PASSWORD
// ==========================

console.log("TASK 17");

let password = true;

let loginResult = password
    ? "Login successful"
    : "Wrong password";

console.log(loginResult);


// ==========================
// TASK 18 - CONCATENATION
// ==========================

console.log("TASK 18");

let introName = "Naveen";
let introAge = 25;
let introCity = "Trichy";

console.log(
    "My name is " + introName +
    ". I am " + introAge +
    " years old. I live in " + introCity + "."
);

console.log(
    `My name is ${introName}. I am ${introAge} years old. I live in ${introCity}.`
);


// ==========================
// TASK 19 - STRING CONVERSION
// ==========================

console.log("TASK 19");

console.log(String(100), typeof String(100));
console.log(String(true), typeof String(true));
console.log(String(undefined), typeof String(undefined));
console.log(String(null), typeof String(null));
console.log(String([1, 2]), typeof String([1, 2]));


// ==========================
// TASK 20 - NUMBER CONVERSION
// ==========================

console.log("TASK 20");

console.log(Number());
console.log(Number(""));
console.log(Number("123"));
console.log(Number("a1"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));


// ==========================
// TASK 21 - BOOLEAN
// ==========================

console.log("TASK 21");

console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(123));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));


// ==========================
// TASK 22 - VOTING IF ELSE
// ==========================

console.log("TASK 22");

let voteAge = Number(prompt("Enter your age"));

if (voteAge >= 18) {
    console.log("You can vote");
} else {
    console.log("You can't vote");
}


// ==========================
// TASK 23 - POSITIVE / NEGATIVE
// ==========================

console.log("TASK 23");

let number = Number(prompt("Enter a number"));

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


// ==========================
// TASK 24 - GRADE
// ==========================

console.log("TASK 24");

let marks = Number(prompt("Enter your marks"));

if (marks >= 90 && marks <= 100) {
    console.log("A Grade");
} else if (marks >= 80 && marks < 90) {
    console.log("B Grade");
} else if (marks >= 70 && marks < 80) {
    console.log("C Grade");
} else if (marks >= 60 && marks < 70) {
    console.log("D Grade");
} else if (marks >= 0 && marks < 60) {
    console.log("Fail");
} else {
    console.log("Invalid marks");
}


// ==========================
// TASK 25 - NESTED IF
// ==========================

console.log("TASK 25");

let jobAge = Number(prompt("Enter your age"));
let height = Number(prompt("Enter your height"));
let weight = Number(prompt("Enter your weight"));

if (jobAge >= 18) {

    if (height >= 160) {

        if (weight >= 60) {
            console.log("Congratulations! You are selected");
        } else {
            console.log("Weight must be 60 kg or above");
        }

    } else {
        console.log("Height must be 160 cm or above");
    }

} else {
    console.log("Age must be 18 or above");
}


// ==========================
// TASK 26 - TRAFFIC LIGHT
// ==========================

console.log("TASK 26");

let color = prompt("Enter traffic light color");

switch (color) {

    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid color");
}


// ==========================
// TASK 27 - DAY
// ==========================

console.log("TASK 27");

let day = 1;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day");
}


// ==========================
// TASK 28 - STUDENT RESULT
// ==========================

console.log("TASK 28");

let studentName = prompt("Enter student name");
let studentAge = Number(prompt("Enter student age"));
let studentCity = prompt("Enter student city");

let tamil = Number(prompt("Enter Tamil marks"));
let english = Number(prompt("Enter English marks"));
let maths = Number(prompt("Enter Maths marks"));

let total = tamil + english + maths;
let average = total / 3;

let grade;

if (average >= 90) {
    grade = "A";
} else if (average >= 80) {
    grade = "B";
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "Fail";
}

let voting = studentAge >= 18
    ? "Eligible"
    : "Not Eligible";

console.log(`
Name: ${studentName}
Age: ${studentAge}
City: ${studentCity}
Total: ${total}
Average: ${average.toFixed(2)}
Grade: ${grade}
Voting: ${voting}
`);