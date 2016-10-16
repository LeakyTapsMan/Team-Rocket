// Smooth scroll to top
$(function() {

    $("a.smooth-scroll").click(function(){

        $('html, body').animate({
            scrollTop: 0
        }, 800);

    });

});

$(window).scroll(function () {

    /* Check the location of each desired element */
    $('.fadeIn').each(function (i) {

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it it */
        if (bottom_of_window > bottom_of_object) {

            $(this).animate({
                'opacity': '1'
            }, 500);

         }
     });
});
