//---------------------------OBJECTS-------------------------------------------
//Stores data in key: value pairs

const contactCard = {
  firstName: "John",
  lastName: "Doe",
  dob: {
    month: "January",
    day: 28,
    year: 1990,
  },
  hobbies: ["Drawing", "Gaming", "Coding"],
  lovesDogs: true,
  lovesCats: false,
};

console.log(contactCard);

//How to access objects?
//dot-notation

console.log(contactCard.dob.year); //1990

//bracket-notation: we need to evaluate something before getting the key

const userSearch = "firstName";

console.log(contactCard[userSearch]);
console.log(contactCard["firstName"]);

//------adding key value------

const contactCard2 = {
  firstName: "Jack",
  lastName: "River",
  dob: {
    month: "July",
    day: 4,
    year: 1972,
  },
  hobbies: ["Drawing", "Gaming", "Coding"],
  lovesDogs: true,
  lovesCats: false,
};

//----add a key value--------

contactCard2.faveDish = "Mac n Cheese"; //object.label=value

console.log("After faveDish: ", contactCard2);

//--------------------------Types of Methods----------------------------------
// Object.keys()  method that takes an object and returns an array of all the keys on that object

console.log("Object.keys: ", Object.keys(contactCard2));
//(7) ['firstName', 'lastName', 'dob', 'hobbies', 'lovesDogs', 'lovesCats', 'faveDish']

//Object.values() method that takes an object and returns an array of all the values on that object.

console.log("Object.values: ", Object.values(contactCard2));
//['Jack', 'River', {…}, Array(3), true, false, 'Mac n Cheese']

//Object.entries() method that takes an object and returns an array of all the array entries that was put in of that object
console.log("Object.entries: ", Object.entries(contactCard2));
//(7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(

//searches for a specific key and returns a boolean
console.log("Has it's own property, dob: ", contactCard2.hasOwnProperty("dob"));
//true

//In order to add a method, we just want to set a key value property on an object where the value is a function.

contactCard2.printAd = function () {
  console.log(
    `Hi my name is ${contactCard2.firstName} ${contactCard2.lastName}, I was born in ${contactCard2.dob.year}!`
  );
};

contactCard2.printAd();
//Hi my name is Jack River, I was born in 1972!
