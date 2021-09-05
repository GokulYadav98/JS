const dataOperators = document.querySelectorAll('[data-operator]')
console.log(dataOperators)
dataOperators.map(ele=>{
    console.log(ele)
})


function arithmetic(operand){
    let value = document.getElementById('value').value;
    // console.log(value.slice(-1))
    const operator = value.slice(-1);
    if (operator == '+' || operator == '-' || operator == '*'|| operator ==  '/') {
           
            value = value.substring(0,value.length-1);
            console.log("dfdf", value)
            value += operand;
            console.log(value)
    } else {
        value += operand
    }
    document.getElementById('value').value = value 

}