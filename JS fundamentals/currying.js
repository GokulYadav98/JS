
// Function Currying
let multiply = (x,y) =>{
    console.log(x*y);
}

let multiplyByTwo = multiply.bind(this,5,5);
multiplyByTwo(5,8)

// Using Closure
let multiplyUsingClosure = (x) =>{
    return function (y) {
        console.log(x*y);
    }
}

let multiplyByThree = multiplyUsingClosure(5);
multiplyByThree(8)
