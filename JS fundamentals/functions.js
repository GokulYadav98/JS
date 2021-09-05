
// // // Diff b/w function declaration and function expression is hoisting 
// // x();
// // b(); // It will be undefined as default

// //Function declaration aka Function statement
// function x(){
//     console.log("calling x")
// }
// // Function Expression 
// var b = function(){
//     console.log("calling b")
// }
// // Anonymous function = An anonymous func. cannot be called like this.. It needs to be in expression or call back or closure 
// // function() {
// // }

// // First Class Function (or) First Class Citizen - using the function as value or passing them as arguements and returning as functions 
// function a(params) {
//     console.log(params)
//     return function b(){
//     }
// }
// function c(){
// }
// var z = a(c) // passing c as arguments
// console.log(z)

var ab = 6;
console.log(ab)