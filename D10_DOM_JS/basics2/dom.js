
var btn = document.querySelector("button");
var bulb = document.querySelector("#bulb");
var flag = false;
btn.addEventListener("click",()=>{
    if(flag == false){
        bulb.style.backgroundColor = "yellow";
        btn.innerHTML = "OFF!!"
        flag  = true;
    }
    else{
        bulb.style.backgroundColor = "white";
        btn.innerHTML = "ON!!"
        flag = false;
    }
    
})
console.log(btn);