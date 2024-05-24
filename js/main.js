$(document).ready(function () {
    AOS.init();
    $('#header__icon').on('click', function () {
        let navMobile = $('.header-menu-list');
        navMobile.toggleClass('menu-mobile--show');
    });

    $('.service-design-accordion-smooth-header').click(function(){
        $(this).toggleClass('active');
        $(this).next().slideToggle('fast');
        $('.service-design-accordion-smooth__panel').not($(this).next()).slideUp('fast');
        $('.service-design-accordion-smooth-header').not($(this)).removeClass('active');
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


    function countUp($element, target, duration) {
        let start = 0;
        let end = target;
        let increment = end > start ? 1 : -1;
        let stepTime = Math.abs(Math.floor(duration / (end - start)));

        let timer = setInterval(function() {
            start += increment;
            $element.text(start);
            if (start === end) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    $('.facts-list-item__number').each(function() {
        let $this = $(this);
        let target = parseInt($this.attr('data-target'));
        let duration = 5000;

        countUp($this, target, duration);
    });
});
