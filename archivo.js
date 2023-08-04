$(document).ready(function () {
    
$(".menu_oculto").hide();

$(".menu").click(function (e) { 
    e.preventDefault();
    $(".menu_oculto").slideToggle();
});



});