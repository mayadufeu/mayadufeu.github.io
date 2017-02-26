$(document).foundation();

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
        slidesToScroll: 1
    });
});

var projects = [
    {
        name: 'bowndling',
        htw: 0.668,
        images: 1
    },
    {
        name: 'tsa',
        htw: 1.379,
        images: 1
    },
    {
        name: 'converse-installation',
        htw: 0.768,
        images: 1
    },
    {
        name: 'beats',
        htw: 1.309,
        images: 1
    },
    {
        name: 'logo-gifs',
        htw: 1.026,
        images: 1
    },
    {
        name: 'megumis',
        htw: 0.670,
        images: 1
    },
    {
        name: 'fader-gif',
        htw: 0.670,
        images: 1
    },
    {
        name: 'scents',
        htw: 0.709,
        images: 1
    },
    {
        name: 'br',
        htw: 1.247,
        images: 1
    },
    {
        name: 'nts',
        htw: 0.455,
        images: 0
    },
    {
        name: 'sc',
        htw: 1.398,
        images: 0
    },
    {
        name: 'prints',
        htw: 1.398,
        images: 0
    },
    {
        name: 'sprite',
        htw: 0.607,
        images: 0
    },
    {
        name: 'signage',
        htw: 0.448,
        images: 0
    }
];

for (var i = 0; i < projects.length; i++) {
    var project = projects[i];
    var className = '.project-' + project.name;
    $(className).css({
        'height': ($(className).width() * project.htw) + 'px'
    });
    for (var j = 0; j < project.images; j++) {
        $(className).find('.slide-' + project.images[j].toString()).css({
            'background': "url('./img/projects/" + project.name + "/" + project.images[j].toString() + ".png')"
        })
    }
}