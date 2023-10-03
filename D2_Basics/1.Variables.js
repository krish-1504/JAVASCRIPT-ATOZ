let x = 10;
var y = 10;
const z = 10;

// so the diff. in this 3 is :
// const is immutable
// var and let can be changed but
// let is block level and const is global
x = y = 9;
// z = 11; not happen because it is const
console.log(x+y); // for printing in cmd
// document.write() for html learn in 


a = "krish"
a = 'krish'
// we can use both "" and '' their is no difference
b = 'Krish'+" "+"Suthar" // + for string concatination too!!
console.log(b)

// You Can Assign Many Variables :
let p = 10 ,q = 20 , r ="krish";

let k;
// k is undefined
// you cant re declare the let variable!!!
// let k = 10;


var redec = "10";
var redec = "20";
// you can redeclare the var variable


{
    let let_ex = "10";
    console.log(let_ex); // it gen o/p
}
// console.log(let_ex); error


{
    var var_ex = "var";
    console.log(var_ex); // it gen o/p
}
console.log(var_ex); // no error



//Hoisting :

car = "xuv";
var car;
// you can!!!!

engine = "1800cc"
// let engine;
//You Cant





const cars = ['1','2']
cars[0] = ['0'] // you can
cars.push('3') // you can
// cars = ['1'] // you cant
