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
