//-----------------------------Advanced JS------------------------------------
//-----------------------------Understanding Closure--------------------------------

//closure: discribes a technique of scoping variables and keeping those scopes active, even after the containing scope has finished.

//------Lecical Scope---------------------------------------------------------------

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
