console.log(" first line of file");

// again take the cart example

/* 
    - from a promise we can return a promise or data 
*/

const cart = ["shirt", "pant", "T-shirt", "Sweatshirt"];

const promise = createOrder(cart);
console.log(promise);
promise
  .then(function (orderID) {
    // console.log(promise);
    console.log(orderID);
    return orderID;
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (orderID) {
    // returning a promise
    return proceedTOPayment(orderID);
  })
  .catch((err) => {
    console.log(err);
  })
  .then(function (paymentInfo) {
    if (paymentInfo) console.log(paymentInfo);
  })
  .catch((err) => {
    console.log("global cache");
  });

function createOrder(cart) {
  const orderPromise = new Promise(function (resolve, reject) {
    if (validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    const orderID = "12345";
    if (orderID) {
      //after 5 second it resolves the promise
      setTimeout(function () {
        resolve(orderID);
      }, 5000);
    }
  });

  return orderPromise;
}

function validateCart(cart) {
  return cart.length !== 0;
}

function proceedTOPayment(orderID) {
  return new Promise((resolve, reject) => {
    if (!orderID) {
      reject("Order id is not valid");
    }
    resolve("Payment successful");
  });
}

console.log(" last line of file");
