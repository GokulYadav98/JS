let stars = [...document.getElementsByClassName("res")]
console.log(stars)

// document.getElementById("rating").addEventListener("click", (eve)=>{
//     console.log(eve)
// });

stars.map((star)=>{
    star.onclick = () =>{
        console.log(star)
        let i = stars.indexOf(star);
        if(star.className.indexOf('rating__star') == -1) {
            console.log(i)
            while(i>=0){
                stars[i].className = 'rating__star fa fa-star';
                i--;
            }
        } else {
            while(i < stars.length){
                stars[i].className = 'fa fa-star';
                i++;
            }
        }
    }
})


// let stars = [...document.getElementsByClassName("res")]
// console.log(stars)

// stars.map((star) => {
//     star.onclick = () => {
//         console.log(star);
//         i = stars.indexOf(star);
//         console.log("index",i);
//         if(star.className.indexOf("rating__star") == -1) {
//             while (i >= 0) {
//                 if(stars[i]) {
//                     stars[i].className = "rating__star fa fa-star";
//                     i--;
//                 }
//             }
//         } else {
//             while (i <= stars.length) {
//                 if(stars[i]) {
//                     stars[i].className = "fa fa-star";
//                 }
//                 i++;

//             }
//         }
        

//     }
// })
