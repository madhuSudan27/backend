const fs = require('fs');

/* 
    expected order of execution is
    value of a = 100;
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

// setTimeout zero 

setTimeout(()=>{
    console.log("setTimeout CB");
},0)

function printA(a){
    console.log("Value of a is: ",a);
}
printA(a);

console.log("Lat line of file ");
