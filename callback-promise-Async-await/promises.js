const cart = ["Cap", "SweatShirt", "Pant", "Jacket", "Shirt"];

/* createOrder(cart,function(orderID){
    proceedToPayment(orderID,function(paymentInfo){
        showOrderSummary(paymentInfo, (summary)=>{
            updateWalletBalance();
        })
    })
}); */

/* 
    - The above code shows how a function is dependent on another function.
    - This is called inversion of control.
    - if createOrder will fail to execute then it will never call proceedToPayment(), 
        what if it called proceedToPayment twice.

    - we have higher level of inconsistency. 

    -- to resolve this we will use Promise


*/

/* 
    - Promise Guaranties that it would be executed only once 

    - Promise is immutable 
    - promise returns 
        - Promise State
        - promise Result <-- data 



    - There is only three state in promise 
            - Pending 
            - Fulfilled 
            - Rejected 
*/

/* 
    - Promise Definition 
        - A place holder which will be filled later.
        - A container for the future value.
        - A Promise is an object representing eventual completion of an Async operation.


*/

/* 
    - fetch data <-- use ur github api
    - fetch returns promise 
*/

/* 
    - Major advantage is Promise chaining 
    - pipe the data 
    - Always return a promise from promise so we can chain 
*/

/* 
    - Let's assume Amazon order functionality i am implementing 
    
    we have some api's
    1.  createOrderApi(cart) <- returns orderID;
    2. proceedToPayment(orderID) <- returns paymentInfo
    3. showOrderSummary(paymentInfo) <- returns summary
    4. updateWalletBalance()
*/

// how fetch works 
const response = fetch("https://api.github.com/users/madhuSudan27").then(
  (response) => {
    
    return response.json();
  }
).then((data)=>{
    console.log(data);
})
