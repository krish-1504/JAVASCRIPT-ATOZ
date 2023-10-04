const car = {
    brand :"Mahindra",
    Model :"XUV300",
    get md(){
        return this.Model ;
    },
    set brnd(brnd){
        this.brand = brnd;
    }
}

for(let i in car){
    console.log(car[i]);
}

car.brnd = "audi";
//You Can Access Vaue by :
console.log(car.brand);
console.log(car['Model']);



//Keys and Values
console.log(Object.keys(car))
console.log(Object.values(car))
