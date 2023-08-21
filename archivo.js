$(document).ready(function () {
    
$("f_menu_oculto").hide();

$(".menu").click(function (e) { 
    e.preventDefault();
    $("#f_menu_oculto").slideToggle();
});



});