function initServicesSlider() {

    const $services = $(".services-mobile");

    function initServicesSlider() {

        if (!$services.length) {
            console.log("No services section found.");
            return;
        }



        if (window.innerWidth <= 800) {

            if (!$services.hasClass("slick-initialized")) {

                $services.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,

                    centerMode: true,
                    centerPadding: "35px",

                    infinite: true,

                    arrows: true,
                    dots: true,

                    autoplay: true,
                    autoplaySpeed: 3500,

                    speed: 600,

                    pauseOnHover: false,
                    pauseOnFocus: false,

                    prevArrow:
                        '<button type="button" class="services-prev" aria-label="Previous service">' +
                        '<i class="bi bi-arrow-left"></i>' +
                        '</button>',

                    nextArrow:
                        '<button type="button" class="services-next" aria-label="Next service">' +
                        '<i class="bi bi-arrow-right"></i>' +
                        '</button>'
                });

            }

        } else {

            if ($services.hasClass("slick-initialized")) {
                $services.slick("unslick");
            }

        }
    }

    // Initial load
    initServicesSlider();

    // Resize
    let resizeTimer;

    $(window).on("resize", function () {

        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(function () {
            initServicesSlider();
        }, 150);

    });

}