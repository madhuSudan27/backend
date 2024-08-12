
// import http module 

const http = require("http");

const file = require("fs");


console.log("Hello");
console.log("-------");

let a = 132545;
let b = 2345678;

// read some api data 
// ------------------- This will take some time to fetch the data then the call back would be returned to Main thread call Back -------
// ------------- firstly LIBUV will register the api call then it will pass the call back function to main call stack 

http.get("http://dummyjson.com/products",(res)=>{
    console.log("Data fetched from API");
})

// read file data using async 
file.readFile('./file.txt' , 'utf-8',(err, data)=>{
    console.log("File data is: ", data);
})

// setTime out is async operation 

setTimeout(()=>{
    console.log("SetTimeout called ");
},5000)



function multiply(x, y){
    const res = x * y;
    return res;
}


console.log("Multiplication value is : " , multiply(a,b));

console.log("Last line of code");