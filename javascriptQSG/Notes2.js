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
//functions that are inside objects are called methods
