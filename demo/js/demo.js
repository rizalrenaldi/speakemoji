$(document).ready(function() {    
    $('.se-small').click(function() {    
    $('.se').removeClass('se-m se-l');
    $('.se').addClass('se-s');
});
    $('.se-medium').click(function() {  
    $('.se').removeClass('se-s se-l');
    $('.se').addClass('se-m');
});
    $('.se-big').click(function() {          
    $('.se').removeClass('se-s se-m');
    $('.se').addClass('se-l');
});
$('li a').click(function(e) {
    e.preventDefault();
    $('a').removeClass('active');
    $(this).addClass('active');
});
$('.size').scrollToFixed();
});