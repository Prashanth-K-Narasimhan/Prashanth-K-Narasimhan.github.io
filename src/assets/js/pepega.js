$(document).ready(function() {
    $("#pepega").draggable({
        containment: "window",
        cursor: "move",
        start: function() {
            // Stop hover animation while dragging
            $(this).css('animation', 'none');
        },
        stop: function() {
            // Resume hover animation after dragging
            $(this).css('animation', '');
        }
    });
});