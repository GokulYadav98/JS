
$(document).ready(function() {
    //jquery for toggle sub menus
    $('.sub-btn').click(function() {
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });
    
    $('.menu-btn').click(function() {
        $('.sidebar').addClass('active');
        $('.menu-btn').css("visibility","hidden");
    });
    $('.close-btn').click(function(){
        console.log("clcik")
        $('.sidebar').removeClass('active');
        $('.menu-btn').css("visibility","visible");
    })
});