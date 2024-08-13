const fs = require('fs');

/* 
    expected order of execution is
    value of a = 100;
    nextTick 
    2nd nextTick same scope
    promise
    Last Line of file 
    setTimeout CB
    setImmediate CB
    file data: ----

*/

const a = 100;

setImmediate(()=>{
    console.log("setImmediate  CB");
});

// read file 
fs.readFile("./file.txt","utf-8",(err, data)=>{
    console.log("file data: ", data);
});

Promise.resolve("Promise").then(console.log);

// setTimeout zero 

setTimeout(()=>{
    console.log("setTimeout CB");
},0)

process.nextTick(()=>{
    console.log("nextTick");
})
process.nextTick(()=>{
    console.log("same scope 2nd nextTick");
})

function printA(a){
    console.log("Value of a is: ",a);
}
printA(a);

console.log("Lat line of file ");