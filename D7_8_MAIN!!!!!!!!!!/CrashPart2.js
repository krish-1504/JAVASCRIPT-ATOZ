// topics to learn
// higher order function
// Counstrocture function
// first class func
// new keyword
//iife
//prototype
//prototypal inheritance
//this call apply bind
//pure & impu fncs

const { prototype } = require("events");

// 1.Higher Order Function -  Accept Or Return A Function this is called higher order function


//type 1
function abcd(){
    return function(){}
};


//type 2


function abcd(a){
    console.log("hiii");
};

var a = function(){};

//this is also higher ordered function :::::: 
var a = [1,2,3,4,5,6,7,8,9,0,4,3,6,7];
a.forEach(function(val){
    console.log(val+2);// drek ma 2 2 add krelu print krse array ma chnge nai thay only console.log j!!!
})



// 2 . Counstroctor function - normal fnc jismein this ka istemaal ho and aap fnc ko call karte waqt new keyword ka use krey!!
// jab aapke paas 1 properties wale elements banane hai bahot sare to constroctor function use kr sakte hai!!

function hii(){
    this.width = 12;
    this.color = "black";
}

var hi1 = new hii();
var hi1 = new hii();
var hi1 = new hii();


// 3. First Class Functions -- js treat kre function ne value trike like in the variable!!you can paas them as argument!!
var a = function abcd(){
    console.log("hiiii");
}


//4. New KeyWord - jab bhi new lagta hai humesha ek blank object apne man mein bana lo
function a(){
    this.age = 12;

}
new a(); 
{age = 19} // like this

// 5. iife -> immediately invoked function expression :for private variable
// iife hai function ko turant chalaneki kla , is tarikese ki hum log koi privet variable bana paye

var ans = (function(){
    var privateval = 12;

    return {
        getter: function(){
            console.log(privateval);
        },
        setter:function(val){
            privateval = val;
        }
    }
})()
ans.setter(10); // set 10
ans.getter() // print 10



//6. Prototype - helper methods like arr.length() basically predefined properties to help us
// create obj in browser
var obj = {name:"krish"};
// now obj. call it
//so we created name but it will return some methods and variabe we didnt created
// [[prototype]] - like this contains helper properties like toString() etc property



//7. prototypal inheritance - basically passing parent futures to child 

var human = {
    canFly:false,
    canTalk:true,
}
var student ={
    slovejsqs:true,
    createWebsite:true
}

// student is also human we dont want to copy them because this is not a good way so we do this
student.__proto__ = human;
for(var i in student){
    console.log(i);
}
//althogh human is part of student prototype not student we can access and everything to do it it not littreally part of this


//8.this call apply bind
//this keyword - it can change value in different context -> jab bi kuchh likh rhe ho to function object or scope bna hai check kro basically - { } braces bne hai ki nhi to isme nhi hoti to useglobal scope kehte hai

console.log(this); // gives window
function abc(){
    console.log(this); // gives window
}

var obj = {
    baatkro : function(){
        console.log(this); // 
    }
}
obj.baatkro; // it give object

//global -> window
//function -> window
//method -> perent object


//event listener
var button = document.querySelector("button");

button.addEventListener("click",function(){
    console.log(this); // give whole button html <button>helloowwww</button>
    this.style.color = "red";
})


//calll , Apply and Bind => agr tumhaare paas koi function hai and koi object hai and tumhe fnc chalana hai aur by default jo , this ki value window hai use window naa rakh kar point karwana hai kisi object ki taraf

function abc(val){
    console.log(this); //value of this is window
}

//but we want obj as value not window

var obj = {age : 24}

abc.call(obj,val)
//after this we can do this :
function abc(val){
    console.log(this.age); //value of this is 24
}



// in apply it will give in array \
abc.apply(obj,[1,2,3,4]);

// bind -
function abc(){
    console.log(this);
}

var obj = {age:24};
var binned = abc.bind(obj);
binned();



//9.pure and impu fumction
function abc(val){
    return Math.random()*val;
}

var ansq = abc(10);
var ans2 = abc(10);//gives ans 1 and ans 2 different values!!! this is impure


//pure return same o/p never change or update value of global variable

function abc(a,b){
    return a*b;
}

var ansq = abc(10,20);
var ans2 = abc(10,20);//this is ex of pure giveve same value every time
