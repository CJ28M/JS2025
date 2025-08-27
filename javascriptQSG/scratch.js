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
