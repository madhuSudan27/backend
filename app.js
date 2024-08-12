// const obj = require("./sum.js");

// Object de-structuring on the fly
// const {calculateSum, multiply} = require("./sum.js")
// import { calculateSum , multiply } from "./sum.js";

// const {calculateSum} = require("./calculate/sum");
// const {calculateMultiply} = require("./calculate/multiply");

// lets import the folder

const { calculateSum, calculateMultiply } = require("./calculate/index");

// -------------------- EPISODE 3-----------------------------------------------------

/* 
var name = "Madhusudan anand";
let val = true;

console.log(val + val);
console.log("val" + "val");
console.log(val + "val");


// global object in Node JS
// console.log(global); 

// how this works in Node JS 
console.log(this); // will print an empty object not same as browser 

console.log(globalThis);

console.log(global === globalThis); // true 


 */

// ---------------------------------------------EPISODE 4 ----------------------------------------

const a = 10;
const b = 20;

calculateSum(a, b);
calculateMultiply(a, b);



// Uses module , export and other thing as parameter
// from there we uses module.export ; 
(function (module) {
  // we can use same function and variables name which is declared at global scope
  let a = 10;
  const b = 20
  console.log(a , b);
  console.log("Node js Uses this IIFE to wrap the code before exporting the module or passing to the v8 Engine");
})();
