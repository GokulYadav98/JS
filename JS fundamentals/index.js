// const express = require("express");
// const app = express();
// const HTML_DIR = path.join(__dirname, '/public/')
// app.use(express.static(HTML_DIR))
// app.listen(3000, () => {
//   console.log("Application started and Listening on port 3000");
// });

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/hoisting.html");
// });
// setTimeout(()=>{
//   console.log("set time")
// },1000)
// let time = new Date().getTime();
// while(new Date().getTime() < time + 15000) {
//     console.log("I am running")
// }

// for(let i=0;i<5;i++) {
//   console.log(i);
// }
// console.log("end")


let arr = [1,2,3,5,67]
console.log(arr.join('*').split('*'))