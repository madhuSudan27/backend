const { promises } = require('dns');
const fs = require('fs');

/* 
    expected order of execution is
    value of a = 100;
    Last Line of file 
    nextTick
    promise 
    setTimeout CB
    setImmediate CB
    file data :
        2nd promise 
        2nd setImmediate 
        2nd setTimeout CB
    
    
*/

const a = 100;

setImmediate(()=>{
    console.log("setImmediate  CB");
});

Promise.resolve("promise").then(console.log);

// read file 
fs.readFile("./file.txt","utf-8",(err, data)=>{

    setTimeout(()=>{
        console.log("   2nd setTimeout CB");
    })
    setImmediate(()=>{
        console.log("   2nd setImmediate CB");
    })

    Promise.resolve("   2nd promise").then(console.log);

    console.log("file data: ", data);
});

// setTimeout zero 

setTimeout(()=>{
    console.log("setTimeout CB");
},0)

// nextTick

process.nextTick(()=>{
    console.log("nextTick");
})

function printA(a){
    console.log("Value of a is: ",a);
}
printA(a);

console.log("Lat line of file ");
