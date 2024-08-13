
const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE = 10;

console.log("Thread pool Demo");
console.log("--------------------------");

// lets encrypt my name and try to implement threading 
crypto.pbkdf2("Madhusudan Anand", "salt", 5000000, 30,'sha512',(err , key)=>{
    console.log("Encrypted password 1 is: " ,key.toString("hex"));
    console.log("--------------------------");
});
crypto.pbkdf2("Madhusudan Anand", "salt", 5000000, 30,'sha512',(err , key)=>{
    console.log("Encrypted password 2 is: " ,key.toString("hex"));
    console.log("--------------------------");
});

crypto.pbkdf2("Madhusudan Anand", "salt", 5000000, 30,'sha512',(err , key)=>{
    console.log("Encrypted password 3 is: " ,key.toString("hex"));
    console.log("--------------------------");
});
crypto.pbkdf2("Madhusudan Anand", "salt", 5000000, 30,'sha512',(err , key)=>{
    console.log("Encrypted password 4 is: " ,key.toString("hex"));
    console.log("--------------------------");
});
crypto.pbkdf2("Madhusudan Anand", "salt", 5000000, 30,'sha512',(err , key)=>{
    console.log("Encrypted password 5 is: " ,key.toString("hex"));
    console.log("--------------------------");
});



