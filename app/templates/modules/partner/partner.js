$(document).ready(function() {
    if($(".partner__item").length > 1){
        $(".partner__carousel").slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            centerMode: false,
            variableWidth: true,
            appendArrows: $('.partner__arrows'),
                prevArrow: '<div class="partner__arrow-left"></div>',
                nextArrow: '<div class="partner__arrow-right"></div>',
                responsive: [
                {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
                }]
        });
    }
})
