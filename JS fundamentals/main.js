let sum = function(a){
    return function(b){
        if(b){
            return sum(a+b);
        }
        return a;
    }
}
let res = sum(1)(2)(3)(4)(5)(6)(7)(8)(9)();
console.log("sum",res)
// -------------------------------------------------.........................................
async function asyncFun(){
    const arr = [10, 12, 15, 21];
    for  (var i = 0; i < arr.length; i++) {
        console.log(i)
        setTimeout(function() {
        console.log('Index: ' + i + ', element: ' + arr[i]);
     }, 3000);
   }
   for(var i=0;i<arr.length;i++){
       setTimeout(function(local_i){
        return function(){
            console.log("Index", local_i)
        }
       }(i),3000)
   }
   for(let i=0;i<arr.length;i++){
    setTimeout(function(){
         console.log("Index", i)
    },3000)
}
}
asyncFun();
// ................................................................................................
function createBase(baseNumber) {
    return function(N) {
      // we are referencing baseNumber here even though it was declared
      // outside of this function. Closures allow us to do this in JavaScript
      return baseNumber + N;
    }
  }
  let baseNumber = 10;
  var addSix = createBase(10);
  console.log(addSix(10));
  addSix(21);
// ................................................................................................
function counter() {
    let _counter = 0;
    // return an object with several functions that allow you
    // to modify the private _counter variable
    return {
      add: function(increment) { _counter += increment; },
      retrieve: function() { return 'The counter is currently at: ' + _counter; }
    }
  }
  
  // error if we try to access the private variable like below
  // _counter;
  
  // usage of our counter function
  var c = counter();
  c.add(5); 
  c.add(9); 
  
  // now we can access the private variable in the following way
  console.log(c._counter); // => The counter is currently at: 14
// ........................................................................................................

let name = {
  firstName : 'gokul',
  lastName : 'yadav'
}

let getFullNameWithoutParams = function(){
  console.log(this.firstName+" "+this.lastName);
}

let getFullName = function(district,state){
    console.log(this.firstName+" "+this.lastName+" from "+district+","+state);
}


let name2 = {
  firstName: 'sachin',
  lastName: 'Tendulkar'
}
// function borrowing
//call
getFullName.call(name,"salem","TN")

//apply - send 2nd arguments as list
getFullName.apply(name2,["Mumbai","MH"]);

//bind - create copy of object as method which can be used later
let printMyName = getFullName.bind(name2,"Mumbai","Maharashtra");
console.log(printMyName);
printMyName();

Function.prototype.myBind  = function(...args){
  let obj = this;
  let params = args.slice(1);
  return function(...args1){
    obj.apply(args[0],[...params,...args1])
  }
}
let printMyNameUsingOwnBind = getFullName.myBind(name2,"Mumbai");
printMyNameUsingOwnBind("hdfjk");

// .....................................................Debouncing........................................................



