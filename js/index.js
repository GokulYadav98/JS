// import { Observable } from 'rxjs'; 
// import {map} from 'rxjs/operators';

// function  AsyncFunction(observer) {
    
// }
// var myObser = Observable.create((observer)=>{
//     var t1 = setTimeout(()=>{
//         observer.next(Math.random() * 10)
//     },1000)
// })

// myObser.subscribe(res=>{
//     Listener(res);
// })
// function Listener(params) {
//     console.log(Listener)
// }
const arr = [1,2,4,5,6,7,9];
function isOdd(x) {
    return x%2==0?false:true;
}
// console.log(arr.filter(isOdd));

const findMax = (max,arr)=>{
    max = arr[i] > max ? arr[i]: max; 
    return max;
}
// console.log(findMax(arr))

// // max using reduce

Array.prototype.myReduce = (fn,curr) =>{
    let obj = this;  
    let res = 0
    for(let i=0; i< obj.length;i++) {
        console.log(obj[i])
        res = fn(curr,obj[i]) 
    }
    console.log(this)
    return res
    
} 

console.log(arr.myReduce((acc,curr)=>{
    return curr > acc ? curr : acc;   
},0))


const Users = [
    { firstName: "gokul", lastName:"yadav", age:23 },
    { firstName: "hari", lastName:"yadav", age:25 },
    { firstName: "akshay", lastName:"kumar", age:32 },
    { firstName: "depika", lastName:"padukone", age:23 },
]

// to find users with same age
const output = Users.filter(x=>x.age == 23)
console.log(output)


// output = {23:2,25:1,32:1}
UserReduce = (acc,curr)=>{
    if(acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc
}
const userAgeCategory = Users.reduce(UserReduce,{})
console.log(userAgeCategory)

// user age less than 30 using reducc

const out = Users.reduce((acc,curr)=>{
    if(curr.age < 30){
        acc.push(curr.firstName)
    }
    return acc; 
},[])
console.log(out)

function click(){
    let count = 0;
        document.getElementById('btn').addEventListener('click',()=>{
            console.log("Buton clicked", ++count)
        })
}
function onClick(){
    click();
}
function outer(){
    var a = 10;
    function inner(){

    }
    return inner;
}