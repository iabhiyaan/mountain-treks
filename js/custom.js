
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
});

$('body').scrollspy({ target: '#navigationMenu' });


$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $('nav').addClass('scroll-navbar');
        $('#scroll-to-top').fadeIn();

    }
    else {
        $('nav').removeClass('scroll-navbar');
        $('#scroll-to-top').fadeOut();
    }
});
