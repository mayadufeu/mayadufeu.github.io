$(document).foundation();

/* cursor svg
$(document).mousemove(function(e){
    $("#cursor").css({left:e.pageX, top:e.pageY});
    $("#cursor").css('opacity', 1);
});
*/

// slick
$('.project > .right').click(function(){
    $(this).next('.slides').slick('slickNext');
});
$('.project > .left').click(function(){
    $(this).nextAll('.slides').slick('slickPrev');
});
$(document).ready(function(){
    $('.slides').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // cssEase: 'ease-in'
    });
});

// project heights
var p1w = $('.project-1').width();
var p2w = $('.project-2').width();
var p3w = $('.project-3').width();
var p4w = $('.project-4').width();
var p5w = $('.project-5').width();
var p6w = $('.project-6').width();
var p7w = $('.project-7').width();
var p8w = $('.project-8').width();
var p9w = $('.project-9').width();
$('.project-1').css({
    'height': p1w * 0.665
});
$('.project-2').css({
    'height': p2w * 1.235
});