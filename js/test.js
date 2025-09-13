//Devslopes notes

//=====================================================================================================================
//---------------------------------------------------------OBJECTS----------------------------------------------------------------
//=====================================================================================================================

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

//----add a key value--------

contactCard.faveDish = "Mac n Cheese"; //object.label=value

console.log("After faveDish: ", contactCard);

//=======================================================================================================================
//-------------------------------------------------Types of Methods-----------------------------------------------------
//===========================================================================================================================

// Object.keys()  method that takes an object and returns an array of all the keys on that object

console.log("Object.keys: ", Object.keys(contactCard));
//(7) ['firstName', 'lastName', 'dob', 'hobbies', 'lovesDogs', 'lovesCats', 'faveDish']

//Object.values() method that takes an object and returns an array of all the values on that object.

console.log("Object.values: ", Object.values(contactCard));
//['Jack', 'River', {…}, Array(3), true, false, 'Mac n Cheese']

//Object.entries() method that takes an object and returns an array of all the array entries that was put in of that object
console.log("Object.entries: ", Object.entries(contactCard));
//(7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(

//searches for a specific key and returns a boolean
console.log("Has it's own property, dob: ", contactCard.hasOwnProperty("dob"));
//true

//In order to add a method, we just want to set a key value property on an object where the value is a function.

contactCard.printAd = function () {
  console.log(
    `Hi my name is ${contactCard.firstName} ${contactCard.lastName}, I was born in ${contactCard.dob.year}!`
  );
};

contactCard.printAd(); //comment out 77

//Hi my name is Jack River, I was born in 1972!
//====================================================================================================================
//--------------------------------------------LOOPING WITH OBJECTS.JS----------------------------------------------
//====================================================================================================================

//-----------FOR...IN-------------------
//Iteration: a single cycle through a block of code, usually as part of a loop.

//Iterates over all the properties of the objects, include anything the object inherits.
// for (const key in contactCard2) {} *//

for (const key in contactCard) {
  console.log(key, contactCard[key]);
}

//why? Use keys of an object in iteration. we do it when we want to iterate over every signle property in an object.

//--------------FOR...OF----------------
//Iterate over the values of an object, array, or other special object
//Tis is for when we want to iterate over just the keys/values that we placed in the object.

for (const key of Object.keys(contactCard)) {
  console.log(key, contactCard);
}

//better option for iterating over commplex objects and controlling which keys we want to look at
//Object.entries(), Object.values()

//==============================================================================================================
//----------------------------------------------------------------------------------------------------------------
