/* JavaScript Data Types */

/* Primitive / Value Types */

var firstName = "Mary"; // string
var age = 27; // number
var recedingHairLine = false; // boolean
var favFood; // undefined
var toiletPaper = null; // null

/* toiletPaper = 24;
toiletPaper = null;
toiletPaper = "Triple Ply"; */

/* Reference Types / Structural Types */

// Objects
var person = {
  firstName: "Mary",
  age: 27,
  recedingHairLine: false,
  favFood,
  toiletPaper: 206,
};
// Arrays
var students = ["Orion", "Kingston", "Shayla", "Chloe"];

// Functions
var myFunc = function () {
  // run some code
};

// Car Variables
var carMake = "Honda";
var carModel = "Fit";
var carYear = 2019;
var carColor = "Blue";
var isManualTransmission = true;
var numSeats = 5;
var carMileage = 65000;

var carInfo = {
  carColor: "Blue",
  carYear: 2019,
  carMake: "Honda",
  carModel: "Fit",
  isManualTransmission: true,
  carMileage: 65000,
  numSeats: 5,
};

/* Console Logs */
console.log("Value: ", firstName);
console.log("Type: ", typeof firstName);

console.log("Value: ", age);
console.log("Type: ", typeof age);

console.log("Value: ", recedingHairLine);
console.log("Type: ", typeof recedingHairLine);

console.log("Value: ", favFood);
console.log("Type: ", typeof favFood);

console.log("Value: ", toiletPaper);
console.log("Type: ", typeof toiletPaper);

console.log("Value: ", person);
console.log("Type: ", typeof person);

console.log("Value: ", students);
console.log("Type: ", typeof students);

console.log("Value: ", myFunc);
console.log("Type: ", typeof myFunc);

//car console

console.log("Value: ", carInfo);
console.log("Type: ", typeof carInfo);
