var con = document.querySelector("#container");
var like = document.querySelector("i")

con.addEventListener("dblclick",()=>{
    console.log("hello");
    like.style.transform = 'translate(-50%,-50%) scale(1)'
    like.style.opacity = 0.9
    setTimeout(() => {
        
        like.style.transform = 'translate(-50%,-50%) scale(0)'
        
    }, 1000);
    setTimeout(() => {
        like.style.opacity = 0;
    }, 1000);
})

