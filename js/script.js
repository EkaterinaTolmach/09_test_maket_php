$(document).ready(function() {


    if($('.testimonials-slider')) {
        $('.testimonials-slider').slick({
            infinite: true,
            // centerMode: true,
            // centerPadding: '25px',
            // slidesToShow: 1,
            arrows: false,
            dots: true
            // cssEase: 'linear'
        });
    }
});