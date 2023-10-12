var rect = document.getElementById("rect");

rect.addEventListener("mousemove",(details)=>{
    // console.log(rect.getBoundingClientRect())
    // console.log("hiiii");

    var loc = rect.getBoundingClientRect();
    var x = details.clientX - loc.left;
    var y = details.clientY - loc.top;
    var mid = loc.width / 2;
    if(x > mid){
        var range = x - 250;
        a = 255;
        b = range;
        c = range;
        rect.style.backgroundColor = 'rgb(' + [a,b,c].join(',') + ')';
    }
    else{
        var range = x;
        a = 255;
        b = 250 - x;
        c = 250 - x;
        rect.style.backgroundColor = 'rgb(' + [a,b,c].join(',') + ')';
    }

})
rect.addEventListener("mouseleave",(details)=>{
    rect.style.backgroundColor = 'white';

})