/* ============================
   TASK 1 — Student Result Analyzer
============================ */
function analyzeStudent(name, department, m1, m2, m3, m4, m5) {
  const total = m1 + m2 + m3 + m4 + m5;
  const average = total / 5;
  const failed = [m1, m2, m3, m4, m5].some(m => m < 35); // assuming 35 is pass mark per subject
  let grade;

  if (average >= 90) grade = "A";
  else if (average >= 75) grade = "B";
  else if (average >= 60) grade = "C";
  else if (average >= 50) grade = "D";
  else grade = "Fail";

  const result = failed ? "Fail" : "Pass";

  console.log("---- Task 1: Student Result ----");
  console.log(`Name: ${name}`);
  console.log(`Department: ${department}`);
  console.log(`Total Marks: ${total}`);
  console.log(`Average: ${average.toFixed(2)}`);
  console.log(`Result: ${result}`);
  console.log(`Grade: ${grade}`);
}
analyzeStudent("Arun", "CSE", 85, 90, 78, 88, 92);


/* ============================
   TASK 2 — Employee Salary Calculator
============================ */
function calculateSalary(employee) {
  let bonusPercent = 0;

  if (employee.experience >= 5) bonusPercent = 0.15;
  else if (employee.experience >= 2) bonusPercent = 0.10;

  const bonus = employee.salary * bonusPercent;
  const finalSalary = employee.salary + bonus;

  console.log("---- Task 2: Employee Salary ----");
  console.log(`Name: ${employee.name}`);
  console.log(`Role: ${employee.role}`);
  console.log(`Basic Salary: ₹${employee.salary}`);
  console.log(`Bonus (${bonusPercent * 100}%): ₹${bonus}`);
  console.log(`Final Salary: ₹${finalSalary}`);

  return finalSalary;
}
const employee1 = { name: "Arun", role: "Developer", salary: 45000, experience: 2 };
calculateSalary(employee1);


/* ============================
   TASK 3 — Product Filter System
============================ */
let products = [
  { name: "Laptop", price: 55000, category: "electronics" },
  { name: "Mouse", price: 800, category: "electronics" },
  { name: "Shirt", price: 1200, category: "fashion" },
  { name: "Shoes", price: 2500, category: "fashion" },
  { name: "Phone", price: 30000, category: "electronics" }
];

console.log("---- Task 3: Product Filter ----");
console.log("Above ₹2000:", products.filter(p => p.price > 2000));
console.log("Electronics only:", products.filter(p => p.category === "electronics"));
console.log("First below ₹1000:", products.find(p => p.price < 1000));
console.log("Total price:", products.reduce((sum, p) => sum + p.price, 0));
console.log("Any above ₹50,000?", products.some(p => p.price > 50000));
console.log("Every product above ₹500?", products.every(p => p.price > 500));


/* ============================
   TASK 4 — Employee Management
============================ */
let employees4 = [
  { id: 101, name: "Kavin", role: "Frontend Developer", salary: 40000 },
  { id: 102, name: "Divya", role: "Backend Developer", salary: 45000 },
  { id: 103, name: "Ramesh", role: "UI Designer", salary: 38000 },
  { id: 104, name: "Sneha", role: "QA Engineer", salary: 42000 },
  { id: 105, name: "Arjun", role: "DevOps Engineer", salary: 50000 },
  { id: 106, name: "Meena", role: "Project Manager", salary: 60000 }
];

console.log("---- Task 4: Employee Management ----");
console.log("All names:", employees4.map(e => e.name));
console.log("Earning above ₹40,000:", employees4.filter(e => e.salary > 40000));
console.log("Employee ID 103:", employees4.find(e => e.id === 103));

const totalSalary4 = employees4.reduce((sum, e) => sum + e.salary, 0);
console.log("Total salary:", totalSalary4);

const highestPaid = employees4.reduce((max, e) => (e.salary > max.salary ? e : max));
console.log("Highest paid:", highestPaid);

const sortedDesc = [...employees4].sort((a, b) => b.salary - a.salary);
console.log("Sorted high → low:", sortedDesc);

console.log("Only names array:", employees4.map(e => e.name));


/* ============================
   TASK 5 — Shopping Cart
============================ */
let cart = [
  { name: "Laptop", price: 50000, quantity: 1 },
  { name: "Mouse", price: 1000, quantity: 2 },
  { name: "Keyboard", price: 2000, quantity: 1 }
];

function calculateCart(cart) {
  const itemTotals = cart.map(item => ({
    name: item.name,
    itemTotal: item.price * item.quantity
  }));

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = cartTotal > 50000 ? cartTotal * 0.10 : 0;
  const finalAmount = cartTotal - discount;

  console.log("---- Task 5: Shopping Cart ----");
  console.log("Item totals:", itemTotals);
  console.log("Cart total:", cartTotal);
  console.log("Discount:", discount);
  console.log("Final payable amount:", finalAmount);

  return finalAmount;
}
calculateCart(cart);


/* ============================
   TASK 6 — Student Search System
============================ */
let students = [
  { name: "Arun", age: 21, mark: 85 },
  { name: "Priya", age: 22, mark: 92 },
  { name: "Karthi", age: 20, mark: 67 },
  { name: "Dinesh", age: 23, mark: 45 }
];

console.log("---- Task 6: Student Search ----");
console.log("All names:", students.map(s => s.name));
console.log("Scored above 80:", students.filter(s => s.mark > 80));
console.log("Find 'Priya':", students.find(s => s.name === "Priya"));

const avgMark = students.reduce((sum, s) => sum + s.mark, 0) / students.length;
console.log("Average mark:", avgMark.toFixed(2));

console.log("Anyone failed (<35)?", students.some(s => s.mark < 35));
console.log("Everyone scored above 40?", students.every(s => s.mark > 40));

const sortedStudents = [...students].sort((a, b) => b.mark - a.mark);
console.log("Sorted by marks (high→low):", sortedStudents);


/* ============================
   TASK 7 — Array Transformation Challenge
============================ */
let numbers = [12, 5, 8, 21, 44, 7, 30, 15];

console.log("---- Task 7: Array Transformation ----");
console.log("Doubled:", numbers.map(n => n * 2));
console.log("Even numbers:", numbers.filter(n => n % 2 === 0));
console.log("Greater than 15:", numbers.filter(n => n > 15));
console.log("First > 20:", numbers.find(n => n > 20));
console.log("Total:", numbers.reduce((sum, n) => sum + n, 0));
console.log("Any > 40?", numbers.some(n => n > 40));
console.log("Every positive?", numbers.every(n => n > 0));
console.log("Sorted high→low:", [...numbers].sort((a, b) => b - a));


/* ============================
   TASK 8 — String Analyzer
============================ */
function analyzeString(sentence) {
  console.log("---- Task 8: String Analyzer ----");
  console.log("Total characters:", sentence.length);
  console.log("Uppercase:", sentence.toUpperCase());
  console.log("Lowercase:", sentence.toLowerCase());
  console.log("Contains 'JavaScript'?", sentence.includes("JavaScript"));
  console.log("First character:", sentence.charAt(0));
  console.log("Last character:", sentence.charAt(sentence.length - 1));
  console.log("Word count:", sentence.split(" ").length);
  console.log("Replaced:", sentence.replace("JavaScript", "Python"));
  console.log("As array:", sentence.split(" "));
}
analyzeString("JavaScript is very powerful");


/* ============================
   FINAL PROJECT — Employee Dashboard
============================ */
let employeesDashboard = [
  { id: 101, name: "Arun", department: "IT", salary: 45000, experience: 2 },
  { id: 102, name: "Priya", department: "HR", salary: 50000, experience: 4 },
  { id: 103, name: "Karthi", department: "IT", salary: 65000, experience: 6 }
];

const EmployeeDashboard = {
  listAll() {
    console.log("All Employees:", employeesDashboard);
  },
  searchByName(name) {
    const found = employeesDashboard.find(e => e.name.toLowerCase() === name.toLowerCase());
    console.log(`Search '${name}':`, found);
    return found;
  },
  filterByDepartment(dept) {
    const result = employeesDashboard.filter(e => e.department === dept);
    console.log(`Department '${dept}':`, result);
    return result;
  },
  filterBySalary(min = 50000) {
    const result = employeesDashboard.filter(e => e.salary > min);
    console.log(`Salary above ₹${min}:`, result);
    return result;
  },
  totalSalary() {
    const total = employeesDashboard.reduce((sum, e) => sum + e.salary, 0);
    console.log("Total Company Salary:", total);
    return total;
  },
  highestPaid() {
    const highest = employeesDashboard.reduce((max, e) => (e.salary > max.salary ? e : max));
    console.log("Highest Paid Employee:", highest);
    return highest;
  },
  experienceAbove(years = 3) {
    const result = employeesDashboard.filter(e => e.experience > years);
    console.log(`Experience above ${years} years:`, result);
    return result;
  },
  sortBySalary(order = "asc") {
    const sorted = [...employeesDashboard].sort((a, b) =>
      order === "asc" ? a.salary - b.salary : b.salary - a.salary
    );
    console.log(`Sorted (${order}):`, sorted);
    return sorted;
  },
  statistics() {
    const total = employeesDashboard.length;
    const totalSal = employeesDashboard.reduce((sum, e) => sum + e.salary, 0);
    const highest = employeesDashboard.reduce((max, e) => (e.salary > max.salary ? e : max));
    const avg = totalSal / total;

    console.log("---- Statistics ----");
    console.log(`Total Employees: ${total}`);
    console.log(`Total Salary: ₹${totalSal}`);
    console.log(`Highest Salary: ₹${highest.salary}`);
    console.log(`Average Salary: ₹${avg.toFixed(0)}`);
  }
};

console.log("---- Final Project: Employee Dashboard ----");
EmployeeDashboard.listAll();
EmployeeDashboard.searchByName("Priya");
EmployeeDashboard.filterByDepartment("IT");
EmployeeDashboard.filterBySalary(50000);
EmployeeDashboard.totalSalary();
EmployeeDashboard.highestPaid();
EmployeeDashboard.experienceAbove(3);
EmployeeDashboard.sortBySalary("desc");
EmployeeDashboard.statistics();