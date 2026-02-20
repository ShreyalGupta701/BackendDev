//Create a program that reads a JSON file and parses its content into a JavaScript object.
  
// const fs = require('fs');

// let json = {
//   "username": "shreyal",
//   "email": "shreyal@gmail.com"
// };

// // Already an object → NO JSON.parse needed
// console.log("username:", json.username);


const fs = require('fs');

let json = `{
  "username": "shreyal",
  "email": "shreyal@gmail.com"
}`;

const obj = JSON.parse(json);

console.log("username:", obj.username);
