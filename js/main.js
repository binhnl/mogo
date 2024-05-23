$(document).ready(function () {
    $('.service-design-accordion-smooth-header').on('click', function () {
        let $clickedItem = $(this);
        $clickedItem.siblings('.service-design-accordion-smooth__panel').each(function () {
            $('.service-design-accordion-smooth__panel').css('display', 'none');
            $(this).toggle();
        });
    });

    $('.quote-list').slick({
        infinite: true,
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        fadeSpeed: 1000,
        prevArrow: '<span class="slick-prev"><i class="fa-solid fa-chevron-right"></i></span>',
        nextArrow: '<span class="slick-next"><i class="fa-solid fa-chevron-left"></i></span>'
    });
});
