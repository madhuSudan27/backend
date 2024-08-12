
// take crypto to encrypt the password 

const crypto = require("crypto");

console.log("Hello");
console.log("-------");

let a = 132545;
let b = 2345678;


// lets try sync <--- will BLOCK MAIN THREAD

const key = crypto.pbkdf2Sync("MADHUSUDANanand", "salt",5000000,50,'sha512');
console.log(key.toString('hex'));
console.log("synchronous task completed");

// lets try to hash password using pbkdf2 as async 
// pbkdf --> PASSWORD BASED KEY DERIVATION FUNCTION 
crypto.pbkdf2("MADHUSUDANanand", "salt",500000,50,'sha512',(err, key)=>{
    if(err) throw err;
    console.log("Encrypted password is : " , key.toString('hex'));
})

function multiply(x, y){
    const res = x * y;
    return res;
}

console.log("Multiplication value is : " , multiply(a,b));

console.log("Last line of code");