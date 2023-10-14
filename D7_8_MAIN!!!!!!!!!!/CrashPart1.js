
// es5 - old
// es6 - new

// var let const

// in es5 - only var to use
// in es6 - we introduced let and const we can still use var

// the Diff b/w var let const ??


// var is function scoped => parent function me bi use ho sakta hai!!
function abc(){
    for(var i=0;i<10;i++){
        console.log(i);
    }
    console.log(i); // it will print 10;
}
abc();

//let and const is braces scoped
function abc(){
    for(let i=0;i<10;i++){
        console.log(i);
    }
    console.log(i); // not;
}
abc();


//js me kuchh features nahi hai jo hum use krte hai!! aur wo chije browser se milte hai!! aese sare features jo js me nhi hai unhe hum dundh skte hai ek object me use kehte hai window object
//window - box of features given by browser to use with js
// its - alert , prompt , console , set-clearinterval,set-cleartimeout etc...

//var adds itself to the window object
//let aur const nhi krta add apneko

// browser context api includes window , stack , head
// all variable and data stores in the heap


// execution context - jab bi hum function chalayenge fnc apna ek khudka ek imaginary container bana lega jisme uski teen cheeje hogi :
// 1 variables
// 2 functions inside that parent fnc
// 3 lexical environment of that function 
// ye jo container hai imaginary ise hum execution context kahte hai
// lexical environment

function abcd(){ // abcd container na under - a hse , def hse , lex env hse 
    var a= 12;
    function def(){
        var b = 12;
    }
}
abcd()

// execution context is a container where the function's code is executed and it's created whenever a function is called 

// lexical environment hota hai ek chart jisme ye likha hota hai ki apka particular function kis cheejo ko access ke sakta hai kinko nai,matlab ki it holds it's scope and scope chain



// referance
var a = [1,2,3];
var b = a;
b[1] = 3
// the a[1] = 3 b will create a's referance not copy

// so how to copy??
var b = [...a]; // so it will copy it

var obj = {name:"krish"};
var obj1 =  {...obj};

 
//js me kuchh bhi likho wo mainly do prakar mein se kisi ek prakaar ko belong krti hai
// falsy - 0 , false , undefined , null , NaN , document.all
// truty - falsy ma na hoy ae -1,1,2 anythin
if(7){
    console.log("I Am Truth");
}else{
    console.log("I Am Falsy");
}


// Foreach forin do-while
//foreach - array me use kr skte hai hum a.forEach()

a.forEach(); // syntex
var a = [1,2,3,4,5,6,7,8,9,0,4,3,6,7];
a.forEach(function(val){
    console.log(val+2);// drek ma 2 2 add krelu print krse array ma chnge nai thay only console.log j!!!
})

// forin - object me use hota hai forin

var obj ={
    name:"krish",
    age:19
};
for(var i in obj){
    console.log(i); // name,age aavse key aavse tunk ma
}

for(var i in obj){
    console.log(obj[i]); // krish,19 aavse key aavse tunk ma
}

for(var i in obj){
    console.log(i , obj[i]); // krish,19 aavse key aavse tunk ma
}



//callback function

// jab bhi koi aisa code jo baad me chalta hai aap likhoge ,kyuki wo code baad mein chalta hai js ko ye pata nhi hota ke wo complate hua ya nhi,aise code completion par js ko btaya jaata hai ke wo complate ho gaya aur aap u se chala skte ho,ye bataneka kaam callback ka hai

setTimeout(()=>{
    console.log(" 2 Second baad chala ");
},2000); // 2000 in ms


//first class fncs
// js mein ek concept hai jiska matlab hota hai ki app fnc ko use kar sakte ho as a value

var a = function(){}; // you can!!

function abcd(a){
    a();
}
abcd(function(){
    console.log("hiiii");
})

//it will pass function as a value


///HOW ARRAYS MADE BIHAIND THE SCENE 
typeof [] // it will not array it will object!!!!!
var arr = [1,2,3,4];
arr[-2] = 2 // ye chalega kyuki array hai hi nhi

//array in converted in this :
var arr ={
    0:1,
    1:2,
    2:3,
    3:4,
};
//it will converted in object'


typeof arr // give object
typeof [] // give object
typeof {} // give object

Array.isArray(arr) // give true
Array.isArray([]) // give true
Array.isArray({}) // give false

//this is the way to find whether it is array or not!!!



//how to delete props
var a = {
    name:"krish",
    age:24
};
delete a.age; // it will delette age





