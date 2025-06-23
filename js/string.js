// JavaScript Strings
var make = "Toyota";
var model = "prius";
var year = 2021;

var myRide = make + " " + model;

var myBraggingRight = "I drive a " + year + " " + myRide;

console.log(myRide);
console.log("Type: ", typeof myRide);
console.log(myBraggingRight);

var make = "Harley Davidson";
var model = "Iron 883";
var year = 2017;

var myRide = make + " " + model;

var myBraggingRight = "I drive a " + year + " " + myRide;

console.log(myRide.length);

//indexOf()

let myString = "Hello World";
let index = myString.indexOf("o"); // Finds the first 'o'
console.log(index); // Output: 4 (index of the first 'o')

let index2 = myString.indexOf("World"); // Finds the substring "World"
console.log(index2); // Output: 6 (index of the start of "World")

//with arrays:

const groceryList = [
  "Milk",
  "Butter",
  "Eggs",
  "Chicken",
  "Steak",
  "Rice",
  "Corn",
  "Eggs",
];

console.log(groceryList.indexOf("Eggs"));
console.log(groceryList.indexOf("Carrots"));
console.log(groceryList.indexOf("Eggs", 3));

let text = "Hello planet earth, you are a great planet.";
let result = text.lastIndexOf("planet");

console.log(result);

let textInfo = "Mr Blue has a blue house and a blue car";
let results = textInfo.replace("blue", "red");

console.log(results);

let resultss = textInfo.replace("blue", (match) => {
  return match.toUpperCase();
});

console.log(resultss);
