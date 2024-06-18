const sym = Symbol["key1"];
const JsUser = {
  name: "Prajwal",
  "full name": "Prajwal Soni",
  age: 22,
  location: "Jaipur",
  email: "prajwalsoni75@gmail.com",
  isLoggedIn: true,
  lastLogInDays: ["Monady", "Thrusday"],
  [sym]: "mySymbol", // symbol syntax
};

console.log(JsUser.name); // one way of calling object
console.log(JsUser["email"]); // second way of calling object
console.log(JsUser["full name"]); // only way calling string object
console.log(JsUser[sym]); // way of calling symbol
