const obj = {
    a: 10,
    b:20
}

const {a:x,b:y} = obj;
let spread = [1,2,4,5,6,7];
console.log(...spread)
const [a,b,c,d,e] = spread
console.log(x)
console.log(a)