

/* 
    - we have Four promise Apis 
        1 . Promise.all()
        2. Promise.allSettled();
        3. promise.run();
        4. promise.any();
 */


// some resolved promise 
const oneSecondResolved = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve("Resolved After 1 second")
    },1000);
});

const twoSecondResolved = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve("Resolved After 2 second")
    },2000);
});

const threeSecondResolved = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve("Resolved After 3 second")
    },3000);
});


// rejected promise 
const oneSecondRejected = () => new Promise(function(resolve, reject){
    setTimeout(()=>{
        reject("Rejected After 1 second")
    },1000);
});

const twoSecondRejected = () =>  new Promise(function(resolve, reject){
    setTimeout(()=>{
        reject("Rejected After 2 second")
    },2000);
});
const threeSecondRejected = () => new Promise(function(resolve, reject){
    setTimeout(()=>{
        reject("Rejected After 3 second")
    },3000);
});


/* 
    - Promise.all() 

    - Returns array of values (resolved )

    Promise.all([oneSecondResolved , twoSecondResolved ,threeSecondResolved])
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        console.error(err);
    })
    

    Promise.all([oneSecondResolved , twoSecondResolved ,threeSecondResolved]) // rejected after 2 second 
    .then((data)=>{
        console.log(data);
    })
    .catch(function(err){
        console.error(err);
    })

*/

/* 
    promise.allSettled();
        - will return ans array of object with values 

    - No matter what it will try to settle all the promise and stores its values in object 
        whether resolved or rejected 

    Promise.allSettled([oneSecondResolved , twoSecondResolved , threeSecondResolved])
    .then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.error(error);
    })

    Promise.allSettled([oneSecondResolved , twoSecondRejected() , threeSecondResolved])
    .then((result)=>{
        console.log(result);
    }).catch((error)=>{
        console.error(error);
    })
*/




/* 
    - Promise.race()    
        - Settles the very first promise 
        - will return a single Value 





    Promise.race([twoSecondRejected(), threeSecondResolved])
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.error(err);
    })

*/


/* 

    - Promise.any();
        - returns one error 
        
    Promise.any([oneSecondRejected(), twoSecondRejected(), threeSecondRejected()])  // AggregateError: All promises were rejected
    .then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.error(err);
    })
    
    
*/
   
Promise.any([oneSecondResolved, twoSecondResolved, threeSecondResolved]) 
.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.error(err);
})




   
