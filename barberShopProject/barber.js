// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});

var menuBtn = document.getElementById("menu-btn");
var menu = document.getElementById("menu");
var sideNav = document.getElementById("sideNav");
sideNav.style.right = "-250px";
menuBtn.onclick = function () {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0px";
        menu.src = './Barber_Shop_img/Barber_Shop_img/close.png';
    } else {
        sideNav.style.right = "-250px";
        menu.src = './Barber_Shop_img/Barber_Shop_img/menu.png';
    }
}