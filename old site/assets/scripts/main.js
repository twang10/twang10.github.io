
/* Setting Panel Widths (Create a function for these.)
*********************************************************************************************/

$('#content, #profile').css('width', '50%').css('width', '-=31px');
    
$(window).on('resize', function() {
    $('#content, #profile').css('width', '50%').css('width', '-=31px');
});

if ($(window).width() < 1000) {
    $('#content, #profile').css('width', '100%').css('width', '-=62px');
    
    $(window).on('resize', function() {
        $('#content, #profile').css('width', '100%').css('width', '-=62px');
    });
}

/* Toggle Links for Mobile
*********************************************************************************************/

$('.panel').click(function(){
    var myelement = $(this).attr('href')
    $(myelement).fadeIn(200);
    $('#profile').fadeOut(200);
    return false;
});