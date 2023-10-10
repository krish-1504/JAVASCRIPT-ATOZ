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