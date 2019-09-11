jQuery.noConflict();
jQuery(document).ready(function($){
	/* ====== Plugin ====== */
    $('[data-toggle="tooltip"]').tooltip();

	/* === Bootstrap Select === */
	$('.selectpicker').selectpicker();

	/* === Owl Carousel === */
    $('#carousel .carousel-body').owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: '10000',
        autoplayHoverPause: true,
        items: 1,
    });

    $('#our-partner .our-partner-body').owlCarousel({
        loop: true,
        nav: false,
        margin: 32,
        // items: 2,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 4,
            },
        }
    });

    $('#supported-by .supported-by-body').owlCarousel({
        loop: true,
        nav: false,
        margin: 32,
        // items: 2,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 4,
            },
        }
    });

    /* === Light Gallery === */
    $('#gallery').lightGallery({
        selector: '.row .gallery-item figure',
        thumbnail: true,
    });

    $('#image-gallery').lightGallery({
        selector: '.row .gallery-item figure',
        thumbnail: true,
    });

    /* === Elevate Zoom === */
    $('#product-img-1').elevateZoom({
        zoomType: 'lens',
        lensShape: 'round',
        lensSize: 200,
        gallery: 'product-gallery',
        cursor: 'pointer',
        galleryActiveClass: 'active',
        // imageCrossfade: true,
        // loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif',
    });

    $('#product-img-1').bind('click', function (e) {
        var ez = $('#product-img-1').data('elevateZoom');

        $.fancybox(ez.getGalleryList());

        return false
    });

    /* ====== Parallax ====== */
    $(window).scroll(function () {
       parallax();
    });

    function parallax() {
        let scroll = $(window).scrollTop();
        $('.parallax').css('background-position', 'center ' + ((scroll - 112) * 0.45) + 'px');
    }

	/* ====== To top ====== */
	if ($(window).scrollTop() > $(window).height()) {$('.scroll-to-top').fadeIn();}else{$('.scroll-to-top').fadeOut();}
	$(window).scroll(function(){if ($(this).scrollTop() > $(this).height()) {$('.scroll-to-top').fadeIn();}else{$('.scroll-to-top').fadeOut();}});
	$( window ).resize(function(){if ($(this).scrollTop() > $(this).height()) {$('.scroll-to-top').fadeIn();}else{$('.scroll-to-top').fadeOut();					}				});
	$('.scroll-to-top').click(function() {$('body,html').animate({scrollTop:0},300);return false;});
});