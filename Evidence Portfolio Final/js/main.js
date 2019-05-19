$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 300) {
        $('#slide-top').fadeIn();
    } else {
        $('#slide-top').fadeOut();
    }
});
$(document).ready(function() {
    $("#slide-top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});


