$(function() {
    $p = $("#taiwan>path");

    //add mousemove listener
    $p.mousemove(function(e) {
        let x = e.pageX - 50;
        let y = e.pageY - 50;
        $("#hint").show().css({
            'visibility': 'inherit',
            'left': x + 'px',
            'top': y + 'px'
        });
    });

    //add hover listener
    $p.hover(function() {
        $("#taiwan").append($(this));
    }, function() {
        $("#hint").css('visibility', 'hidden');
    });
});