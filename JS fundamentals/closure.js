function x(){
    let a = 100;
    return function(){
        let b = 200
        return function(c,d){
            console.log(c,d)
        }
    }    
}
x()()(1,3);
// console.log()

// using let, let - is a block level scope, so every time it create new reference of 'i'
function set(){
    for(let i=0;i<=5;i++){
        // set timeout function is a closure. It copies the reference of 'i' variable
        setTimeout(() => {
            console.log(i);
        }, 1000 * i);
    }
}

set();

function setClosureUsingVar(){
    for(var i=0;i<=5;i++){
        // set timeout function is a closure. It copies the reference of 'i' variable
        function closure(i_local){
            setTimeout(() => {
                console.log(i_local);
            }, 1000 * i_local);
        }
        closure(i);
    }
}
setClosureUsingVar();

