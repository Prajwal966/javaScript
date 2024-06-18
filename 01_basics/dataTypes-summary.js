// Primitive datatypes

const score = 100;
const scoreValue = 9.8;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const bigNumber = 1243556n;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);

// Reference (Non - Premitive)
const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
  name: "Prajwal",
  age: 22,
};

const myFunction = function () {
  console.log("Hello " + myObj.name);
};
myFunction();
