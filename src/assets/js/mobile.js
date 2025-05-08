$(document).ready(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        $('.navbar-nav').toggleClass('active');
    });

    // Close menu when clicking outside
    $(document).click(function(event) {
        if (!$(event.target).closest('.navbar').length && 
            !$(event.target).closest('.hamburger').length) {
            $('.hamburger').removeClass('active');
            $('.navbar-nav').removeClass('active');
        }
    });

    // Handle mobile draggable constraints
    if ($(window).width() <= 768) {
        $("#pepega").draggable({
            containment: [0, 0, $(window).width() - 60, $(window).height() - 100]
        });
    }
});