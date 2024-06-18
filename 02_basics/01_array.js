const firstName = ["Prajwal", "Rohit", "Sunil"];
const lastName = ["Soni", "Sharama", "Grover"];

// console.log(firstName + lastName); // Prajwal,Rohit,SunilSoni,Sharama,Grover

// firstName.push(lastName);
// console.log(firstName); // [ 'Prajwal', 'Rohit', 'Sunil', [ 'Soni', 'Sharama', 'Grover' ] ]

// const names = firstName.concat(lastName);
// console.log(names); //[ 'Prajwal', 'Rohit', 'Sunil', 'Soni', 'Sharama', 'Grover' ]

console.log(...firstName, ...lastName); // Prajwal Rohit Sunil Soni Sharama Grover
