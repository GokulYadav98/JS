
const input = document.getElementsByClassName('input');
console.log(input)
let drop = `<a href="#"><li>`

input[0].addEventListener('focus', (event) => {
    document.getElementById("dropdown").innerHTML = `<a href="#"><li>All</li></a>
    <a href="#"><li>Gift Cards</li></a>
    <a href="#"><li>Amazon Pay</li></a>
    <a href="#"><li>Amazon Business</li></a>
    <a href="#"><li>Pet Supplies</li></a>
    <a href="#"><li>Kinda ebooks</li></a>
    <a href="#"><li>Beauty</li></a>`;
    document.getElementById("dropdown").style.display = "block";
}, true);
input[0].addEventListener('focusout', (event) => {
    console.log(event)
    document.getElementById("dropdown").style.display = "none";
}, true);
let array = ["All","Gift Cards","Amazon Pay","Amazon Business","Beauty","Child"];

let BetterFunction = Debounce(getData,300);

function Debounce(fn,delay){
    let timer;    
    return function(...params){
            let obj = this;
            clearTimeout(timer);
            timer = setTimeout(()=>{
                fn.apply(obj,[...params])
            },300);   
        }
}


function getData(event) {
    let str='';
    for (i = 0; i < array.length; i++) {
        let value = array[i].toLocaleLowerCase();
        if(value.includes(event.target.value.toLowerCase())) {
            str += `<a href="#"><li>`+array[i]+`</li></a>`;
        } 
    }

    document.getElementById("dropdown").innerHTML = str;
    console.log(str)
    console.log(event.target.value)
}




