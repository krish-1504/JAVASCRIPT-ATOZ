let x = myfun(10,20);

function myfun(a,b){
    return a+b;
}

console.log(x);



//Sekf Invoke Function :
(
    function (){
        console.log("hellloow");
    }
)();



// Arrow Function ES6
const hello = (a,b) =>{
    return a+b;
}

console.log(hello(10,20));


//apply and call

const person = {
    name : function(){
        return this.first+" "+this.last;
    }
}

const person1 = {
    first : "Krish",
    last : "Suthar"
}
const person2 = {
    first : "Dhruv",
    last : "Patel"
}

x = person.name.apply(person1);
y = person.name.call(person2);
console.log(x);
console.log(y);

// call() -- takes Argument Separately
// apply() -- takes Argument As Array
// Like This :
console.log(person.name.apply(person1,["krish","suthar"]))
console.log(person.name.call(person2,"krish","suthar"))