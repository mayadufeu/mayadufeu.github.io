$(document).foundation();

// cursor svg
$(document).mousemove(function(e){
    $("#cursor").css({left:e.pageX, top:e.pageY});
});

// pw: project width
var p1w = $(".project").width();

$(document).ready(function(){
    $(".project-1 > .slider-content").css("width", p1w*($(".project-1 > .slider-content > div").length));
    $(".project-1 > .slider-content > div").css("width", p1w);
});

$(document).ready(function() {
    $('.left').click(function() {
        $('.project-1 > .slider-content').animate({
            'marginLeft' : 0 //moves left
        });
    });
    $('.right').click(function() {
        $('.project-1 > .slider-content').animate({
            'marginLeft' : - p1w //moves left
        });
    });
});