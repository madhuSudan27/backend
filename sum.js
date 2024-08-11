// console.log("sum imported");
export function calculateSum(a, b){
    const sum = a + b;
    console.log(sum);
}

// x = 100; // module pattern works in strict mode so it will throw an error 

export function multiply(a, b){
    const res = a * b;
    console.log("Multiplication value is : ",res);
}

// module.exports = {
//     calculateSum : calculateSum,
//     multiply : multiply, 
// };