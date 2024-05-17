// Promise

let myPromise=new Promise(function(resolve,reject){
    console.log("Promise");
    resolve(76)
});
console.log("Promise Accepted");

let myPromise1=new Promise(function(resolve,reject){
    console.log("Promise");
    reject(new Error("Sorry..! Promise had been rejected."))
});
console.log("Promise rejected");

let myPromise2=new Promise(function(resolve,reject){
    setTimeout(function(val){
        console.log("Print")
    },3000);
});
console.log("Print1");

// method:then(),catch()

let myPromise3=new Promise(function(resolve,reject){
    console.log("Promise");
    resolve(76)
});
console.log("Promise Accepted");
myPromise3.then(value => {console.log(value)});

let myPromise4=new Promise(function(resolve,reject){
    console.log("Promise");
         reject(new Error("Sorry..! Promise had been rejected."))
     });
     console.log("Promise rejected");
    
myPromise4.catch(error => {console.log("Received an error")});

let promise= new Promise(function(resolve,reject){
    setTimeout(function(time){
        console.log("Time1");
    },2000);
    resolve(true);
});
let output = promise.then(time => {
    let promise1= new Promise(function(resolve,reject){
        setTimeout(function(time){
            console.log("Time2");
        },3000);
        resolve("Time3");
    });
        return promise1;
});
output.then(value => {console.log(value);});

// // async await
async function xyz(){
    return 4;
}

async function weather(){
    let delhiWeather= new Promise(function(resolve,reject){
        setTimeout( function(time){
         console.log("Weather1");
    },2000);
    resolve(true);
        
    });
let lkoWeather =  new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Weather2")
    },3000);
});
lkoWeather.then(value=>{console.log(value);})
let dW=await delhiWeather;
let lW=await lkoWeather;
return[dW,lW];
}
