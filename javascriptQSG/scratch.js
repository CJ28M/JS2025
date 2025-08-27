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

for (let ia = 0; ia < 10; ia++) {
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
