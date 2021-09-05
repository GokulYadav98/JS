var fs = require("fs");

fs.readFile("input.txt",(err,data)=>{
    if(err){
        console.log("cannot read file")
    } else {
        console.log(data.toString())
    }
})

console.log("Program Ended");