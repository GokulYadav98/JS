var a = 10;
async function x(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Hello JS")
            console.log("Hello After timeout")
            resolve()
        },1000);
    })
   
}
async function call (){
    console.log("Before X")
    let y = await x();
    
    console.log("After X")
    console.log(a);
}
call();