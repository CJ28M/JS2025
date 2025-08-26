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
  "we can create a string from the items of an array with join" +
    shoppingList.join(", ")
);
