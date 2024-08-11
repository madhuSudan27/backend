console.log("sum imported");
function calculateSum(a, b){
    const sum = a + b;
    console.log(sum);
}

// in case of Common JS it will not throw an error ( common js is non Strict mode)
var x = 100; // module pattern works in strict mode so it will throw an error 


module.exports = {
    x, 
    calculateSum,
}