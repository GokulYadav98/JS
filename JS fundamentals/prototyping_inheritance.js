let arr = ["gokul","yadav"];
// array has Array.prototype and  Array.prototype has object prototype and object prototype has null   
console.log(arr.__proto__.__proto__.__proto__)

let object = {
    name : "gokul",
    city: "salem",
    getDetails: function () {
        console.log(this.name +" from "+ this.city)
    }
}
let object2 = {
    name : "yadav"
}
// prototyping inheritance
object2.__proto__ = object;
console.log(object2.city)

// add Prototype in Function
Function.prototype.myProperty = function  () {
    return console.log("My Value")
}
function samp() {   }
console.log(samp.myProperty())

