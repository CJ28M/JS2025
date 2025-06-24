var totalUsers = 42;
var purchase = 46.99;

var sciNot = 123e5;
var sciNott = 123e-5;

var numVal = 5 + 5;
var numMin = 5 - 5;
var numMul = 5 * 5;
var numDiv = 5 / 5;

var numRem = 12 % 5;
var numRemm = 19 % 5;

console.log(numRemm);

var totalUserNum = 999999999999999;
var moreThenFif = 99999999999999999;

console.log(moreThenFif);

var randomNum = 123456789101112131415161718;

console.log(randomNum);

var numDec = 0.1 + 0.2;

console.log(numDec);

var numOps = (0.1 * 10 + 0.2 * 10) / 10;

console.log(numOps);

var numStr = 10 + "5 years";

console.log(numStr);

var numStri = 10 + "5";
console.log(numStri);

/* Exercise */

groceryList = ["Milk", "Bread", "Butter", "Eggs", "Steak", "Corn"];

const Milk = 12.99;
const Bread = 10.5;
const Butter = 15.75;
const Eggs = 8.25;
const Steak = 20.0;
const Corn = 11.01;

const totalPrice = Milk + Bread + Butter + Eggs + Steak + Corn;

console.log(totalPrice.toFixed(2));

const coupon = 0.25;

const priceAfterDiscount = totalPrice * (1 - coupon);
console.log(priceAfterDiscount.toFixed(2));

const taxRate = 0.0775;
const taxes = priceAfterDiscount * taxRate;
console.log(taxes.toFixed(2));

const finalPrice = priceAfterDiscount + taxes;
console.log(finalPrice.toFixed(2));
