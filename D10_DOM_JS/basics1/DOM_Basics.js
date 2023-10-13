//DOM - document object model


// The 4 Pillars of DOM
// 1. selection of an element
// 2. changing html
// 3. changing css
// 4. event listener

//document na under mtlb html na under koi query select krva
var a = document.querySelector("h1"); // select only first h1
console.log(a); // <h1>DOM Padhlo!!!</h1>

a.innerHTML = "HTML Changed 😀"; // html change

a.style.color = "red"; // css changed
a.style.backgroundColor = "black";


a.innerHTML = "Kaise Hoo"
a.style.color = "yellow"

a.addEventListener("click",()=>{ // on clicking change the event
    console.log("hellow krishh")
});


// Nodelist
var a  = document.querySelectorAll("h1") // on node list data
a.forEach((e)=>{
    console.log(e);
});


//by id
document.getElementById("bulb")
//by class
document.getElementsByClassName("bulb")



a.innerHTML = "<h1>Krish</h1>" // it will convert it to heading
a.textContent = "<h1>Krish</h1>" // it will rint with h1 tag 
 
