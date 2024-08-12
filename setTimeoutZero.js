console.log("Hello");
console.log("-------");

let a = 132545;
let b = 2345678;


// libuv will handle this setTimeout
setTimeout(()=>{
    console.log("setTimeout Zero called");
},0)

function multiply(x, y){
    const res = x * y;
    return res;
}

console.log("Multiplication value is : " , multiply(a,b));

console.log("Last line of code");