console.log("sum imported");
function calculateSum(a, b){
    const sum = a + b;
    console.log(sum);
}

function multiply(a, b){
    const res = a * b;
    console.log("Multiplication value is : ",res);
}

module.exports = {
    calculateSum : calculateSum,
    multiply : multiply, 
};