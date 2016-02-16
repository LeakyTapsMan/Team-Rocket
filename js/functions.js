// Scroll to top
$(function() {
    
    var scrollTopBtn = $(".scroll-top");
    
    // Fade in/out button based on screen position
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            scrollTopBtn.fadeIn();
        }
        else {
            scrollTopBtn.fadeOut();
        }
    });
    
    // Smooth scroll on button press
    scrollTopBtn.click(function() {
       $("html, body").animate({ scrollTop: 0 }, 500); 
    });
    
});