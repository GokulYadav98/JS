const inputBox = document.getElementById('input_value');
const inputButton = document.getElementById('button');
const clear = document.getElementById('clear');
const listEle = document.querySelector('.list');
inputBox.onkeypress = (event) =>{
    
    const value = inputBox.value;
    if(value.trim() !==0 ) {
        inputButton.classList.add("active");
    } else {
        inputButton.classList.remove("active")
    }
    if(event.charCode == 13 && value.trim() !==0 ) {
        document.getElementById('button').click();
    }
}

inputButton.addEventListener('click',()=>{
    const value = inputBox.value;
    if (!value) {
        return
    }
    inputBox.value = '';
    let list = [];
    console.log(value)
    let getItem = sessionStorage.getItem('item');
    console.log(getItem)
    if(getItem) {
        list = JSON.parse(getItem);
    }
    list.push(value);
    sessionStorage.setItem('item',JSON.stringify(list));
    showTask();
})

function showTask() {
    let getLocalStorage = sessionStorage.getItem('item');
    let list = [];
    if(getLocalStorage) {
        list = JSON.parse(getLocalStorage);
    } else{
        list = [];
    }
    let newliTag = '';

    list.forEach((element,index) => {
        newliTag+= `<li class="list-item">${element} <span> <i onclick="removeItem(${index})"; class="fas fa-trash"></i> </span> </li>`
    });
    listEle.innerHTML = newliTag;
}
function removeItem(element) {
    console.log(element)
    let getLocalStorage =  JSON.parse(sessionStorage.getItem('item'));
    
    // let index = getLocalStorage.findIndex(ele=> ele == element);
    getLocalStorage.splice(element,1);
    sessionStorage.setItem('item',JSON.stringify(getLocalStorage));
    showTask();
}

clear.addEventListener('click',()=>{
    sessionStorage.removeItem('item')
    showTask();

})
