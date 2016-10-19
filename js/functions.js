// Smooth scroll to top
$(function() {

    $("a.smooth-scroll").click(function(){

        $('html, body').animate({
            scrollTop: 0
        }, 800);

    });

});

$(window).scroll(function () {

    // Header expand/shrink on scroll
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
        shrinkOn = 300,
        header = $(".header");

    if (distanceY > shrinkOn) {
        header.addClass("smaller");
    } else {
        if (header.hasClass("smaller")) {
            header.removeClass("smaller");
        }
    }

    // Add fade in transition for elements
    $('.fadeIn').each(function (i) {

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        // If the object is completely visible in the window, fade it
        if (bottom_of_window > bottom_of_object) {

            $(this).animate({
                'opacity': '1'
            }, 500);

         }
     });

});
