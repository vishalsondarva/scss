// slick
$(document).ready(function () {
    $('.slick_ourResponse').slick({
        infinite: true,
        dots: false,
        arrows: true,
        prevArrow: '#slick_ourResponse_prev',
        nextArrow: '#slick_ourResponse_next',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    autoplay: true,
                    autoplaySpeed: 4000,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 4000,
                }
            },
        ]
    });

});


// Header
$(document).ready(function () {
    $(".header .btn_navbar").click(function () {
        $(".header .nav_wrap").slideToggle(400);
        $("body").toggleClass("scroll_off").find(".btn_navbar").toggleClass("open");
    });
    $("#show_search, #hide_search").click(function () {
        $("body").toggleClass("scroll_off").find(".search_wrap").toggleClass("show");
        return false;
    });
    
    function headerJs() {
        $(".header .nav_wrap").slideUp(400);
        $("body").removeClass("scroll_off").find(".btn_navbar, .search_wrap").removeClass("open show");
    }
    $(".header .nav_wrap ul li a[href*='#']").click(function () {
        headerJs();
    })

    $(this).keydown(function (event) {
        if (event.keyCode == 27) {
            headerJs()
        }
    });
    $(this).click(function (event) {
        if (!$(event.target).closest(".header").length) {
            headerJs()
        }
    });

});
function headerHeight() {
    $("html").css('scroll-padding-top', $(".header").height());
    $("body").css('padding-top', $(".header").height());
}
$(window).ready(function () {
    // headerHeight();
});
$(window).resize(function () {
    // headerHeight();
});
$(window).scroll(function () {
    // headerHeight();
});


// Smooth-Scroll
$('a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"])').click(function () {
    var headerHeight = $('.header').outerHeight();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - headerHeight
            }, 1000);
            return false;
        }
    }
});


// backToTop
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('#backToTop').css('transform', 'none');
        } else {
            $('#backToTop').css('transform', 'translateX(100%)');
        }
    });
    $('#backToTop').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        $(window).scrollTop(0);
        return false;
    });
});


// SVG-Inject
$(function () {
    $('.svg, .svg_img').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function (data) {
            var $svg = jQuery(data).find('svg');
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            $img.replaceWith($svg);
        }, 'xml');
    });
});

