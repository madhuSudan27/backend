/*

    - async always returns a promise 

 */



async function getData() {
    const name = "Madhusudan";
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(name);
        },3000);
    });
}


const p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise1 resolved!");
    }, 5000);
});

const p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise2 resolved!");
    }, 10000);
});


// normal Way to handle promise 
function getData(){
    p1.then((data)=>{
        console.log(data);
    });
    console.log("Hello from getData");
}
// getData();


async function handlePromise(){
    console.log("Hello World");

    const data2 = await p2;
    console.log("-----------Resolved data2");
    console.log(data2);


    const data1 = await p2;
    console.log("--------Resolved data1");
    console.log(data2);
}
// handlePromise();

const URL = "https://api.githuhfgb.com/users/madhuSudan27";

async function fetchData(){

    try{
        const userData = await fetch(URL);
    
        const jsonData = await userData.json();
        console.log(jsonData);
    }
    catch(err){
        console.error(err);
    }

}

fetchData();