//-----------------------------Advanced JS------------------------------------

//------------------------------------------------------------------------------------
//=================================== Chapter 5  =====================================
//------------------------------------------------------------------------------------

//-----Understanding Closure---------------------------------------------------------

//closure: discribes a technique of scoping variables and keeping those scopes active, even after the containing scope has finished.

//-------------------------------------------------------------Lecical Scope----------

let productPrice = 8.95;
let productQuantity = 3;

function calculateLineCost() {
  let lineCost = productPrice * productQuantity;
  return lineCost;
}
console.log(calculateLineCost());

//but we cant access the lineCost variable from the outside the fuction.

// console.log(LineCost()); ERROR!

// ** Using the let declaration means variables are only accessible in the same scope as the code that declares the variable.

/*  Available outside and inside the calculateLineCost function

let productPrice = 8.95
let productQuantity = 3



function calculateLineCost() {
  let lineCost = productPrice * productQuantity;
 
  ^^Only avaible inside the calculateLineCost function

*/

//The variable lineCost is not in scope globally. It's only in the scope within the function, so the console can't find it. The Return statement is how we get data out of the funtion by returning the value of lineCost to the code that called it.

//--------------------------------------------------------------Nested functions-----
//functions can be defined within other functions

function calculateLineCost(productPrice, productQuantity = 1) {
  let lineCost = productPrice * productQuantity;

  function getFormattedCurrency(region = "en-US") {
    return lineCost.toLocaleString(region, { maximumFractionDigits: 2 });
  }
  return getFormattedCurrency();
}
console.log(calculateLineCost(4.95, 5));

//can have as many child functions as you want and nesting doesn't have to go just one layer deep, meaning a child can nest a function as many as you want.

//---Putting it all Together--------------------------------------------------------
const cartItem = function (price, quantity = 1) {
  let lineCost = 0.0;
  let totalQuantity = 0;

  function calculateLineCost() {
    lineCost = price * totalQuantity;
  }

  function getFormattedCurrency(region = "en-US") {
    return lineCost.toLocaleString(region, {
      maximumFractionDigits: 2,
    });
  }

  return function () {
    totalQuantity += quantity;
    calculateLineCost();
    return getFormattedCurrency();
  };
};

let item = cartItem(4.95, 10);
let item2 = cartItem(16.24);

console.log(item(), item2());

item = cartItem(4.95);
console.log(item()); //4.95
console.log(item()); // add another = 9.9

//Closure is a concept that uses lexical scoping and nested functions to maintain value inside a function, even after it has finished.

//Lexical scope descibes the scope of variables based on their position in the source code.

//functions in JavaScript can be nested within one another and can access variables in their enclosing scope.

//------------------------------------------------------------------------------------
//=================================== Chapter 6  =====================================
//------------------------------------------------------------------------------------

//----------------------Organizing Data  & Logic with objects------------------------
//class serves as a template for organizing data and logic. Date = variables, logic = code (functions), template = classes can act as a kind of cookie cutter to form packages of data and logic called objects.
// ** Onjects don't necessarily have to be derived from classes, an object can be created without a ckass as stand-alone structures.

//classes are cookie cutters and cookies are like objects. but cookies dont have to be made by cookie cutters.

class Greeting {
  //classes generally start with a Capital letter
  constructor(firstName) {
    console.log(`Hello, ${firstName}!`);
  }
}

//to create a class its called instantiation
let a = new Greeting("Robert");

//class=constructor, argument= firsName

//------Methods----------------------------------------------------------------------
//functions that are inside objects are called methods

class Greetings {
  constructor(firstName) {
    this.firstName = firstName;
  }
  sayHello() {
    console.log(`Hello, ${this.firstName}!`);
  }
}

a = new Greetings("Chris");
a.sayHello();

//methods can take arguments just like functions

class greet {
  constructor(firstName) {
    this.firstName = firstName;
  }
  sayBye(greet = "Goodbye, ") {
    console.log(`${greet}${this.firstName}!`);
  }
}

let b = new greet("CJ");
b.sayBye();

//--------Properties------------------------------------------------------------
// is a variable that is attached to an object.
//property can either be a variable(data) or a function(logic)

class Grace {
  constructor(firstName) {
    // firstname is a property that belongs to the object that this class will create
    this.firstName = firstName;
  }
  sayJack(grace = " Jack, ") {
    //property
    console.log(`${grace}${this.firstName}!`);
  }
}

b = new Grace("Oliver"); //object is now named b. and the firstName variable with our object is a  property.We can access that property from the outside the object.

//You can iterate through the properties in an object with a for loop.

class Address {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let customer = new Address("Jack", "Oliver");

for (let detail in customer) {
  console.log(detail); //only get property name
} //firstName lastName

//lets get the actual values of each property:

for (let detail in customer) {
  console.log(customer[detail]);
} //Jack Oliver

// ** Try modifying our address class to add a country property. then use console.log to display it in the console.

class Addresss {
  constructor(firstName, lastName, country) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;
  }
}

let customers = new Addresss("robert", "Oliver", "United States"); //new object of class address

for (let detail in customers) {
  console.log(detail + ": " + customers[detail]);
}

//-----Creating Objects without Classes---------------------------------------------

//----With a Class:
class Address1 {
  constructor(firstName, lastName, zipCode, zodiacSign) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.zipCode = zipCode;
    this.zodiacSign = zodiacSign;
  }
}

//----Without a Class:
const robert = {
  firstName: "Robert",
  lastName: "Jones",
  zipCode: 12345,
  zodiacSign: "Aquarius",
  //to add methods
  greeting: function () {
    console.log(`Hello, ${this.firstName}!`);
  },
};

robert.greeting(); //Hello, Robert!   //to display in console

//Lets add a propperties-------------

robert.phoneNumber = "845-845-8456";

//INTERNAL JS MEMORY it would look like this:
/* const robert = {
    firstName: "Robert",
    lastName: "Oliver",
    zipCode: 12345,
    zodiacSign: "Aquarius",
    phoneNumber: "845-845-8456",
    greeting: function() {
        console.log(`Hello, ${this.firstName}!`)
      }
    }
*/

//To add a METHOD--------------

robert.sayPhoneNumber = function () {
  console.log(this.phoneNumber);
};

robert.sayPhoneNumber(); //to display in console

//INTERNAL JS MEMORY it would look like this:
/* const robert = {
    firstName: "Robert",
    lastName: "Oliver",
    zipCode: 12345,
    zodiacSign: "Aquarius",
    phoneNumber: "845-845-8456",
    greeting: function() {
        console.log(`Hello, ${this.firstName}!`)
      }

      sayPhoneNumber: function() {
        console.log(this.phoneNumber)
        }
    }
*/

//---TO Change a method, just define it again.

robert.greeting = function () {
  console.log(`Hello there, ${this.firstName}!`);
};

robert.greeting(); //to display in console

//Example:
const cardInfo = {
  charName: "Fred",
  charStyle: "Rogue",
  charDob: {
    month: "September",
    day: 12,
    year: 1990,
  },
  charSpecial: ["slightOfHand", "ghost", "jump"],
  favSaying: function () {
    console.log(`Pow! Right in the kisser!`);
  },
  weaponChoice: {
    malee: {
      knives: "Throwing Star",
      random: "Tooth Pick",
    },
    primary: {
      longRange: "SR22",
      shortRange: "P90",
      heavy: "M16",
    },
    secondary: {
      longRange: "Bow",
      midRange: "UZI",
      shortRange: ".45",
    },
  },
  charLocationBirth: "Spain",
  charFavColor: "Purple",
};

cardInfo.favSaying = function () {
  console.log(
    `Greetings! My name is ${this.charName}, I'm from ${this.charLocationBirth}. Born in ${this.charDob.year}. My favorite weapon is ${this.weaponChoice.primary.longRange}!`
  );
}; //This updates favSaying

cardInfo.favSaying(); //Greetings! My name is Fred, I'm from Spain. Born in 1990. My favorite weapon is SR22!

//------------------------------Making Iterables--------------------------------------------
//A single cycle through a block of code, usually as part of a loop.

/* give an object a next() method and specify the symbol.iterator keyword.
JS will then call this method on the object with each iteration of the the loop.*/

evenNumbers = {};

evenNumbers[Symbol.iterator] = function () {
  let n = 0;
  return {
    next() {
      n += 2;
      return { value: n, done: false };
    },
  };
};

for (let n of evenNumbers) {
  console.log(n); //2, 4, 6, 8, 10
  if (n >= 10) break;
}

//the CORRECT WAY

evenNumbers[Symbol.iterator] = function () {
  let n = -2;
  return {
    next() {
      n += 2;
      return { value: n, done: false };
    },
  };
};

for (let n of evenNumbers) {
  console.log(n);
  if (n >= 10) break;
}

//------Function are Objects-------

//--Classes versus Objects-----


//==========================================================================================================================================================================
//---------------------------------------------------------------------------Chapter 7-------------------------------------------------------------------------------------
//=======================================================================================================================================================================
//---------------------------------------------------------JSON--------------------------------------------
//JavaScript Object Notation, is a way to package a JavaScript object.

{
  "coffeeSales": [
    {
      "blendName": "Arabica",
      "cupsSold": "120"
    
    },
    {
      "blendName": "Robusta",
      "cupsSold": "242"
    }
  ]
}


-
-
-
-
//==============================================================================================================================================================================
//-------------------------------------------------------------------------------------------BROCODE----------------------------------------------------------------------------
//==============================================================================================================================================================================

//----------------------MATH----------------------------------------------------------
//Math =built- in object that provides a collection of properties and methods

let x = 3;
let y = 2;
let z;

//Math.PI();
//Math.E(); euler's number
//z = Math.round(x); rounds the number
//z = Math.floor(x); rounds down
//z = Math.ceil(x); rounds up
//z = Math.trunc(x);  revmove decimal portion
//z = Math.pow(x, y); 3 power of 2 = 9
//z = Math.sqrt(x); square root
//z = Math.log(x); logarethum? 10 = 2.302585092994046
//z = Math.sin(x); place radians
//z = Math.cos(x); co-assign
//z = Math.tan(x);
//z = Math.abs(x); absolute value
//z = Math.sign(x); sign of a value
//let max = Math.max(x, y ,z); max value
//let min = Math.min(x, y, z); min value

console.log(z);

//Random Number Generator:

// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max - min)) + min;     **range value
let randomNums = Math.floor(Math.random() * 6) + 1;

console.log(randomNums);

//--------6 sided Dice----
//html: create <button> and <label>

const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 6;
let randomNum; //dont assign yet

// myButton.onclick = function () {
//what is the function doing? create a randomNum
randomNum = Math.floor(Math.random() * max) + min;
// myLabel.textContent = randomNum;
//------3 dices at once------------
/* 
const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;randomNum1 = Math.floor(Math.random() * max) + min;

myButton.onclick = function(){
  randomNum1 = Math.floor(Math.random() * max) + min;
  randomNum2 = Math.floor(Math.random() * max) + min;
  randomNum3 = Math.floor(Math.random() * max) + min;
  label1.textContent = randomNum1;
  label2.textContent = randomNum2;
  label3.textContent = randomNum3;
}

*/

//-----------Ternary Operator------------------------
//A sortcut to if{} and else{} statements help to assign a variable based on a condition. condition ? codeTrue : codeFalse;

let age = 12;
let message = age >= 18 ? "You're an adult" : "You're a minor";
console.log(message);

//discount code----
let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(
  `Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`
);

//-----------------------------------------------SWITCH-------------------------------
//switch can be an efficiant replacement to many alse if statments

let day = 1;

switch (day) {
  case 1:
    console.log("It is Monday");
    break;

  case 2:
    console.log("It's Turesday");
    break;

  default:
    console.log(`${day} is not a day`);
}

let testScore = 92;
let letterGrade;

switch (true) {
  case testScore >= 90:
    letterGrade = "A";
    break;
  case testScore >= 80:
    letterGrade = "B";
    break;
  case testScore >= 70:
    letterGrade = "C";
    break;
  case testScore >= 60:
    letterGrade = "D";
    break;
  default:
    letterGrade = "F";
}

console.log(letterGrade);

//--------------------------------String Methods-----------------------
//allows you to manipulate and work with text (strings)

//.charAt()--------------
let userName = "BroCode  "; // get specific characters from a string.
userName.charAt(0); //"B"  .charAt()
//console.log(userName.charAt(0));  //to show in console

//.indexOf()--------------
userName.indexOf("o"); //2  first character
//console.log(userName.indexOf(o));

//.lastIndexOf()---------------
userName.lastIndexOf("o"); //5 last character
//console.log(userName.lastIndex(o));

//.length()--------------
userName.length; //7

//.trim()---------------
userName = userName.trim(); //remove white space before or after the assigned value
console.log(userName);

//.toUpperCase()------------
userName.toUpperCase(); //to make all UPPER CASE
console.log(userName);

//.toLowerCase()--------
userName.toLowerCase(); //to make all lowercase
console.log(userName);

//.repeat()----------
userName.repeat(3); //repeats the string 3 times brocodebrocodebrocode
console.log(userName);

//.startWtih()---------

let result = userName.startsWith(" "); //determend if a string starts with a specific character, returns boolean!

console.log(result); //false

/*if(result){
  console.log("your username can't begin with ' '");
 }
else {
  console.log(username)
  }
  */

//.endsWith()------------------
// same concept just at the end

//,includes()---------------

result = userName.includes(" "); //does sting conatain " " //false

//.replaceAll()-------------
//strings can't be number but we treat them as characters

let phoneNumber = "123-456-7890";

phoneNumber = phoneNumber.replaceAll("-", "/"); // replace dashes with forward slashes

console.log(phoneNumber);

//.padStart()----------

phoneNumber = phoneNumber.padStart(15, "0"); //first value is how many characters should this srting be. Second value: starts with zero

console.log(phoneNumber);

//.padEnd()------
//same concept as start, but at the end.

//----------------------STRING SLICING-----------------------
//creating a substring from a portion of another string
//string.slice(start, end)

const fullName = "Curtis Cobra";

let firstName = fullName.slice(0, 6); //Curtis
let lastName = fullName.slice(7); //Cobra or slice(7, 13);

console.log(firstName);
console.log(lastName);

//What if you need the first character in the string?

let firstChar = fullName.slice(0, 1); //C
let lastChar = fullName.slice(-1); //a

console.log(firstChar);
console.log(lastChar);

//more dynamic version

const firstCar = "Mercury Capri";

let carBrand = firstCar.slice(0, firstCar.indexOf(" ")); //Mercury
let carModel = firstCar.slice(firstCar.indexOf(" ") + 1); //Capri

console.log(carBrand);
console.log(carModel);

//Excersice

const email = "smashbros@gmail.com";

//indexOf is use when searching for something
let username = email.slice(0, email.indexOf("@")); //smashbros
let extension = email.slice(email.indexOf("@")); //@gmail.com

console.log(username);
console.log(extension);

//---------------------METHOD CHAINING-------------------
//calling one method after another in one continuos line of code

//------NO METHOD CHAINING----------

let name = window.prompt("Enter your name: ");

// name = name.trim(); //remove blank spaces before and after name
// let letter = name.charAt(0); //find first letter
// letter = letter.toUpperCase(); //make it uppercase

// let extraChars = name.slice(1); //selects the rest of characters in the string after (0)
// extraChars = extraChars.toLowerCase(); //make them all lowercase
// name = letter + extraChars; //combine all to display

// console.log(name); //display in console
//------METHOD CHAINING-------------
name = name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase();
console.log(name);
