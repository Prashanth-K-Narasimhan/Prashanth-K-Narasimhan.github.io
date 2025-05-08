$(document).ready(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        $('.navbar-nav').toggleClass('active');
    });

    // Close menu when clicking outside
    $(document).click(function(event) {
        if (!$(event.target).closest('.navbar').length) {
            $('.hamburger').removeClass('active');
            $('.navbar-nav').removeClass('active');
        }
    });
});