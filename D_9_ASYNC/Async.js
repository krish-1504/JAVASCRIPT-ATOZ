// 1. Sync and async js kya hai??

const { default: axios } = require("axios")
// sync - ek ke baad dusra hoga , jab tak ek command complate naa ho , dusra shuru nhi hoga
// async - sare kaam ek sath krega jo bi pahele khtam hoga uska jawab dedega theire is no order

//in sync
//  task a - 5sec
//  task b - 10
//  task c - 10
// total - 25 sec

// in asynnc theire is only total 15 sec

//this is async code :
// setTimeout
// setInterval
// promises
// fetch
// axios
// XMLHttpRequest

//this is sync :
console.log("hiii")






//2. Async JS
// kai baar aapka final code depended hota hai kisi aur ke server par,is case mein humeein nhi pata hota ki answer uske server se kab lot kr aayega , to hum kya nhi kr sakte is sync code so is se chhutkara pane ke liye async code likhte hai and jab bi ans aaye hamara ans ke respect me chlnewala code chl jaye

// main motive is ki cases me jinmein hume pata nahi code ka answer kitni der mein aayega to jab bhi answer aa jaaye uske respect mein koi particular code chala dena





// 3. JS Is Not Async
// js is single thereded!!

//main stack(function execution stack)(call stack) - aama badha pela sync hoy ae complate thai jay pchhi min stack(callback queue )(task queue) pr jay js and jove ke kai chhe jo hoy to j tene msin stack ma lavva ma aave min ma in most cases async fun j hoy
//event loop - aa main and side stack nu handaling kre  jo main khali min mahse to aene lai aavse

// best ex :
console.log("hey");
console.log("1")
setTimeout(() => {//async
    console.log("2")
}, 0);
console.log("3");

// the output is :
// 1,3,2 so how ??? because of main and min stack






//4.Callbacks - hamesha ek function hota hai tb chlta hai jab async code ka completion hojaata hai!!

//how to call this above ??
// fetch('www.google.com')
// axios
// promises
// settimeout
// setInterval


// by this methods you call this :
// then catch
// callbacks
// async await

//main two part async code likhne keliye
fetch
XMLHttpRequest
axios
Promise
setTimeout
setInterval

// so iska ans chalane ke litye hot ahai:
// then catch
// callbacks
// async await



new Promise((res,rej)=>{
    if(true){
        return res()
    }
    else{
        return rej();
    }
}).then(function(){
    console.log("resolve")
}).catch(function(){
    console.log("reject");
})


// user ask for num b/w 0 to 9 if the num below 5 then resolve if not reject

var ans = new Promise((res,rej)=>{
    var n = Math.floor(Math.random()*10);
    if(n<5){
        return res();
    }
    else{
        return rej();
    }
}).then(function(){
    console.log("below");
}).catch(function(){
    console.log("above");
})

//ghr aao
//get kholo aur gate lagao
//khana khao
//ingonito chalao
//sojao

var ans = new Promise(function(res,rej){
    return res("sabse pahle ghr aao")
})
var ans2 = ans.then(function(data){
    console.log(data);
    return new Promise(function(res,rej){
        return res("get kholo vakho")
    })
})
var ans3 = ans2.then(function(data){
    console.log(data);
    return new Promise(function(res,rej){
        return res("khana khao")
    })
})
var ans4 = ans3.then(function(data){
    console.log(data);
    return new Promise(function(res,rej){
        return res("incnogito")
    })
})
var ans5 = ans4.then(function(data){
    console.log(data);
    return new Promise(function(res,rej){
        return res("so jao")
    })
})



//5.Async And Await - koi bhi esa fnc jisme aap async code likh rhe hai , kyuki async code hai to aap promises ka istemal kar sakte hai,jab uska answer aayega aapko then lagana padega,us then ok lagane se bachne ke liye aap async await ka use krte hai

var krish = async function abcd(){
    let ans = await fatch('www.google.com')
};
// koi code async hai to wait krna pdta hai kyuki hme nhi apta ans kab aayega


//6.Use Where ?
//node me jab db ke sath kaam krte hai tb
//fetch
//settimeout
//setinterval


//7. [Concept Aside]:
//consurrency and parallelism
//concurrency => js me sync code and async code ek sath process ho raha ho ye hai conurrency
//parallelism => focus jaada karta hai different processors and unke cores par kaam ko chalane pr
// theottling => kisi code ko control karna number of executions
