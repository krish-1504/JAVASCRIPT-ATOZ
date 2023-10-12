var center = document.querySelector("#center");
// import { gsap } from "gsap";
//throttling - kisi particulae code ke no of execution ko kam kr dena is throttling

const btn=document.querySelector("#throttle");


const throttleFunction=(func, delay)=>{
    let prev = 0; 
    return (...args) => {
    let now = new Date().getTime();
    if(now - prev> delay){ 
        prev = now;
        return func(...args);  
    }
    }
}


center.addEventListener("mousemove", throttleFunction((d)=>{
    // less repetation code
    var imgdiv = document.createElement("div");
    imgdiv.classList.add('imagediv');
    
    imgdiv.style.left = d.clientX+"px";
    imgdiv.style.top = d.clientY+"px";

    var img = document.createElement("img");
    img.setAttribute("src","/D_11_ES6(Revise)+PrecticeOfJS/MiniProject/[JS,DOM]PhotoPopup_PROJECT/IMG_2496.jpg")
    imgdiv.appendChild(img);


    document.body.appendChild(imgdiv);


    // gsap.to(img,{
    //     y:"0",
    //     ease:Power3,
    //     duration: .5,
    // })
    setTimeout(function(){
        imgdiv.remove();
    },800)
}, 150));