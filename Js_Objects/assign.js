let car = {
    drive () {
        return "Im driving";
    },
    break() {
        return "breaking toyato";
    }
}

let targetObj = {
    break (){
        return "flying";
    }
}

Object.assign(targetObj,car);
console.log("................object assign.............")
console.dir(targetObj);
console.dir(targetObj.drive());



let C1 = function(x,y,z){
    Object.assign(this,{x,y,z})
    // this.x = x;
}
let obj2 = new C1(3,5,7);
console.log(obj2)