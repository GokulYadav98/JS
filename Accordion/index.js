const contentBx = document.querySelectorAll('.contentBx');
console.log(contentBx)
contentBx.forEach(contentBx=>{
    contentBx.addEventListener('click',()=>{
        console.log("clicked");
        contentBx.classList.toggle('active')
    })
})