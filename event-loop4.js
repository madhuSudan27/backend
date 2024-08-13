const fs = require('fs');
const { nextTick } = require('process');

/* 
Value of a is:  100
Lat line of file
nextTick  <-- nextTick has highest priority so it will run first
   2nd nextTick
promise   <--- most tricky part (queue comes in picture)
  2nd promise
setTimeout CB
setImmediate  CB
*/

const a = 100;

setImmediate(()=>{
    console.log("setImmediate  CB");
});

Promise.resolve("promise").then(console.log);

// read file 
fs.readFile("./file.txt","utf-8",(err, data)=>{
    console.log("file data: ", data);
});

// setTimeout zero 
setTimeout(()=>{
    console.log("setTimeout CB");
},0)

// nextTick

process.nextTick(()=>{

    process.nextTick(()=>{
        console.log("   2nd nextTick");
        
    });

    Promise.resolve("  2nd promise").then(console.log)
    Promise.resolve("  3rd promise").then(console.log)

    console.log("nextTick");
})


function printA(a){
    console.log("Value of a is: ",a);
}
printA(a);

console.log("Lat line of file ");
