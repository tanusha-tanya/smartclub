$(document).ready(function() {
    $(".partner__carousel").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: false,
        variableWidth: true,
        appendArrows: $('.partner__arrows'),
            prevArrow: '<div class="partner__arrow-left"></div>',
            nextArrow: '<div class="partner__arrow-right"></div>'
    });
})
