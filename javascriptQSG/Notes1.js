// document.getElementById("content").textContent = "show on html ";
// alert("this is an alert pop-up message!"); //single line comments
// /* multi
// line
// comments */

// firstName = "Chris";
// lastName = "Doe";
// middleName = "smith";

// console.log("hello, " + firstName + "!");

// //console.log("Hello, "+ firstName + " " + middleName + " " + lastName + "!")  INSTEAD USE:

// console.log(`Hello, ${firstName} ${middleName} ${lastName}!`);

// firstName = prompt("Please enter your name:");
// alert(`Hello, ${firstName}`);

//page 31

firstNameTextBox = document.getElementById("firstName");
submitButton = document.getElementById("submit");
greetingContainer = document.getElementById("greeting");

submitButton.addEventListener("click", function () {
  //greetingContainer.textContent = "Hello, " + firstNameTextBox.value + "!";
  greetingContainer.textContent = `Hello, ${firstNameTextBox.value}! page 33`;
});

//--------------------------------ARRAYS-----------------------------------------
let shoppingList = ["Milk", "Eggs", "Cheese", "Bread"];
console.log("the second item on the shopping list is " + shoppingList[1]);

console.log(
  "we can create a string from the items of an array with join " +
    shoppingList.join(", ")
);

shoppingList.push("Oranges");

console.log(
  "I forgot the oranges, lets add it by using .push: " + shoppingList.join(", ")
);

shoppingList[0] = "Almond Milk";
console.log("updated shopping list: " + shoppingList.join(", "));

//page 45

//---------------------------Logical Comparisons---------------------------------------

let price = 4.95;
if (price == 4.95) {
  console.log("The Price is 4.95");
} else {
  console.log("The price is something else.");
}

//------------------------SWITCH STATEMENT------------------------------------
// acts like a switch board

let color = "blue";

switch (color) {
  case "red":
    console.log("The color is red.");
    break;
  case "orange":
    console.log("The color is orange.");
    break;
  case "purple":
    console.log("The color is purple.");
    break;
  default:
    console.log("I'm not sure what color it is.");
}

//page: 58
//-------------------------------------LOOPS---------------------------------
//for loops is used when needing to run code multiple times.
// iteration: is a single execution through a loop.

for (let i = 0; i <= 10; i++) {
  // i=1+1
  console.log("For Loops"); // 11 loops
}

for (let i = 0; i < 10; i++) {
  console.log("For Loops"); //10 loops
}
//page 63

for (let i = 10; i > 0; i--) {
  //i= 1-1
  console.log(`i=S{i}`); //10 loops
}

//page 67

//nest for loops

for (let x = 0; x < 10; x++) {
  for (let y = 0; y < 10; y++) {
    console.log(`x, y = ${x}, ${y}`);
  }
}

//WHILE Loops
//runs the code within curly braces until the conditional statement within parentheses evaluates to false. page 68

/* let condition = true

<run code until condition is false>
while (condition) {
}*/

/*Define a variable named v. set it to an empty string. Then we start a while loop the the condition being NOT v, meaning to run code in the curly braces until v evaluates to true. The string v won't evaluate to true until it has value, cuz if its empty, it evaluates as false */

let v = "";

while (!v) {
  v = prompt("Please enter a value: ");
}

console.log(`You eneterd: ${v}`);

/*DO loop works the same but run the loop once, then the statement inside the parentheses is evaluated, if true the code is looped until it evaluates to false.

/In our case, this means if v is NOT true, because of the ! in front of v.*/

v = "";

do {
  v = prompt("Please enter a value: ");
} while (!v);

console.log(`You entered: ${v}`);

//FOR...IN
//iterate through arrays and retrieve the value at each position within the array.
//-define an array, then use for...in to display each item.pg 70

let groceryList = ["Milk", "Eggs", "Cheese", "Bread"];
for (let i in groceryList) {
  console.log(groceryList[i]);
}

//--------------------------------FUNCTIONS-----------------------------
//is a named set of commands that let us bundle lines of code together to perform work and ofter return values.

function greeting() {
  console.log("Hello, World!");
}

//greeting()  <= when we run this, we see our greeting on the console "Hello World!"

function greeting() {
  alert("Hello, World!");
}

/* When we redefine the greeting function, we're telling JavaScript that we want a different set of comands to be executed when we run the function. */

//greeting()  <= Now we see a pop-up with the greeting

// greetingContainer = document.getElementById("greeting");
// sayHello = document.getElementById("sayHello");

// function greeting() {
//   greetingContainer.textContent = "Hello, World";
// }

// sayHello.addEventListener("click", greeting); //when it happens not before [("click", greeting())] <= immediately

//---------------------------------Arguments-----------------------------------
//passing arguments: a variable we provide to the function, and act of doing this is commonly called passing. "pass an argument to a function"

function greetings(firstName) {
  console.log(`Hello, ${firstName}!`);
}

greetings("chris");

//Providing Default Parameters for Arguments

function greet(firstName = "World") {
  console.log(`Hello, ${firstName}!`);
}

greet();

//functions can accept multiple arguments and they can also have default parameters:

// function greeting(firstName = "World", lastName = "") {
//   console.log(`Hello, ${firstName} ${lastName}!`);
// }

// greeting("chris", "oliver");

//since default parameters are provided for both agruments, we can omit both:

greeting();

//ther's unwanted space between the World and !, we fix this with a CONDITIONAL:
// * remember an "if/else" conditional tells javascript to run code if the statement inside the parentheses evaluates to true.

function greet(firstName = "World", lastName = "") {
  let message = "Hello, ";

  if (lastName) {
    message = message + firstName + " " + lastName + "!";
  } else {
    message = message + firstName + "!";
  }
  console.log(message);
}

// greeting();
greet("chris", "kok");

// ---------------------------------RETURNING VALUES-------------------------
//to return a value to the function

// colorSelector = document.getElementById("colorSelector");

// let salesTax = calculateSalesTax(42.94); // run function calculateSalesTax with the argument for subtotal set to 42.94. the result is returned and is stored in the salesTax variable.

function calculateSalesTax(subtotal, taxRate = 0.08) {
  return subtotal * taxRate;
}

let subtotal = 42.94;
let salesTax = calculateSalesTax(subtotal);
// let total = subtotal + salesTax;

// console.log(total.toFixed(2)); //two decimal places

//Math.round()

// let realTotal = Math.round((total * 100) / 100); //prevents us from having to change the type of variable, total * 100 and rounds the result to the nearest integer.

// console.log(realTotal); //46

//localization, the act of formatting the display of currency, date, time, etc. to match a particular country or region.

// total.toLocaleString("en-us", { maximumFractionDigits: 2 });

/*toLocaleString:  to make a string from the total, specifying two arguments. 
-The first is the region, which in this case is "en-US"
-The second is chapter 7.*/

function getFormattedCurrency(amount, region = "en-US") {
  return amount.toLocaleString(region, { maximumFractionDigits: 2 });
}

function calculateSalesTax(subtotal, taxRate = 0.08) {
  return subtotal * taxRate;
}

let total = parseFloat((subtotal + salesTax).toFixed(2));
let stringTotal = getFormattedCurrency(total);
console.log(total);
console.log(stringTotal);

//-------------------------Declaring Function Expressions----------------------------
//is when you set a variable to a function.

//hoisted: is available before it is defined within the same scope.
function calculateSalesTax(subtotal, taxRate = 0.08) {
  return subtotal * taxRate;
}

// let's turn this into a function expression
calculateSalesTax = function (subtotal, taxRate = 0.08) {
  //define it before you can use it
  return subtotal * taxRate;
};

calculateSalesTax(100);
//we have to put in a value to subtotal, but not to taxRate.

function logMessageWithTimestamp(message) {
  const currentDateTime = new Date().toLocaleString();
  const logMessage = `${currentDateTime} - ${message}`;

  console.log(logMessage);
}

logMessageWithTimestamp("Hello");

//^To be able to re-use date and time function

function logMessageWithTimestamp2(message) {
  console.log(`${new Date().toLocaleString()} - ${message}`);
}

logMessageWithTimestamp2("Hey");

//Practical and faster for cpu
