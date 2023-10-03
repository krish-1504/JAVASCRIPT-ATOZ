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