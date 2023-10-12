// 1. let and const
// let - variable
// const - constent 

let a =12;
a = 14; // it's ok

const b = 12;
b = 14; // error


// we can declere let as not giving value but not in const

let c; // it's ok
const d ; //not - missing initializer

// two has some similarity
// dono windows object ma add kre potane
// dono breced scoped



// 2. Arrow Function
// purani js mein 3 function the , they were 
// function statment
// function expresison
// anonymous functio


// new me ek function hai 3 prakar se bana skte hai
// arrow fncs

// basic arrow fncs
var fnc = ()=>{

};
//arrow function with one parameter - we can remove fat to!!! only on one value
var fnc1 = a=>{

};
fnc1(12);
var fnc2 = (a,b)=>{

};

//arrow fncs with implicit return
var g = ()=>12;
console.log(g()); // it will give 12






//3. Template literals backtick - ``


var old = "hey "+(2+3)+" hiii" // in old one -> hey 5 hiii
var newjs = `hey ${2+2}`;




//4. default parameter
var abc = ( a = 10)=>{
    console.log(a);
}

abc(10); // print 10
abc(20); // print 20

abc() // it will rpint 10 because default


// ... spread/rest oprator
var arr = [1,2,3,4,5,6,7,8,9];
var brr = [...a]; // a ki sari value aajayegi brr me copy not referance

// rest use hota hai jab aaoko bche huye values ek variable mei daalna ho

var fn = (a,b,c,...d)=>{
    console.log(a,b,c,d);
}
fn(1,2,3,4,5,6,7) // a = 1, b =2, c= 3,d = [4,5,6,7]



//5. Destructuring  - arrays and objects se data bahar nikaalna in variables
var a1 = [1,2,3];
var [b1,c1,d1,e1] = a;
// so b1 = 1 , c1 = 2 , d1 = 3 , e1 = undefined


