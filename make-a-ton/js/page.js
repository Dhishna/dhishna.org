$(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() > 100)
        {
            $("#Introcaption").slideDown(1000);
        }
    });
});