/* 
- we know java script is synchronous single threaded language 
- we can do one task at a time and in a order 

- Now what if we want to do Async task  
    - We can achieve it using callBack 


*/

/* 
    Now suppose we have to implement a cart functionality 

    ---- suppose these all apis are coming from backed 
    - create order
        - Proceed to payment 
            - show Order summary 
                - update Wallet
*/

const cart = ["shirt", "pant","T-shirt"];

api.createOrder(cart, function(){
    // after creating order we have to proceed to payment 
    api.proceedToPayment(()=>{
        // after payment show order summary 
        api.showOrderSummary(()=>{
            // after showing summary update the wallet 
            api.updateWallet();
        })
    })
});

/* 

- By doing this we are giving our function (proceedToPayment) responsibility to createOrder function 
    - there could be bug inside createOrderApi 
    - it May call our payment function  twice 
    - also it may never call the function 

    ---------------BIG PROBLEM ---------------------------

    solution -> Promises

*/
    
