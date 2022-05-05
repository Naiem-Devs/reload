(function($) {
    "use strict";

    // menu 
    $('.siteBar-btn').click(function() {
        $('.mobile-menu').toggleClass('siteBar');
    });


    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 200, // values from 0 to 3000, with step 50ms
        duration: 800, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });


    // owlCarousel
    $(".Giveaway_slider").owlCarousel({
        loop: true,
        margin: 30,
        items: 3,
        smartSpeed: 500,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
                margin: 0,
            },
            767: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    // owlCarousel
    $(".pkg_slider").owlCarousel({
        loop: true,
        margin: 30,
        items: 3,
        smartSpeed: 700,
        center: true,
        nav: false,
        dots: true,
        stagePadding: 0,
        responsive: {
            0: {
                items: 1,
                margin: 0,
            },
            767: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 3
            }
        }
    });

    // hover
    function HoverSection() {
        let sectionChosenBtn = document.querySelectorAll('.hbrToLight')
        let rewardsbackg = document.querySelector('.rewards_bottom')

        if (sectionChosenBtn || rewardsbackg) {
            sectionChosenBtn.forEach(list => {
                list.addEventListener('click', (e) => {
                    e.preventDefault();
                })
                list.addEventListener('mouseover', (e) => {
                    rewardsbackg.classList.add('active')
                })
                list.addEventListener('mouseleave', (e) => {
                    rewardsbackg.classList.remove('active')
                })
            });
        }
    }
    HoverSection()


    // scroll_progress
    function ScrollProgress() {
        let Section = document.querySelector('.howto-area')
        let mainBlk = document.querySelector('.all_steps')
        let prgLine = document.querySelector('.prgLine')
        if (prgLine) {

            window.addEventListener('scroll', (e) => {
                prgLine.style.height = window.scrollY + "px"
            })

        }
    }
    ScrollProgress()

    // var infoBtn = document.querySelectorAll('.info_btn')
    // var card_prices = document.querySelectorAll('.card_prices')


    // infoBtn.forEach(infoBtns => {
    //     infoBtns.addEventListener('mouseover', () => {
    //         card_prices.forEach(card_price => {
    //             card_price.classList.add('active')

    //         })
    //     })
    // })

    // infoBtn.forEach(infoBtns => {
    //     infoBtns.addEventListener('mouseleave', () => {
    //         card_prices.forEach(card_price => {
    //             card_price.classList.remove('active')
    //         })
    //     })
    // })

    // Card Hover to show more content
    function CardBtnHovers() {

        var infoBtn = document.querySelectorAll('.info_btn')

        infoBtn.forEach(infoBtns => {
            infoBtns.addEventListener('mouseover', () => {
                let makeActiveToShowContent = infoBtns.parentElement.parentElement.parentElement.querySelector('.card_prices')
                makeActiveToShowContent.classList.add('active')
            })
        })

        infoBtn.forEach(infoBtns => {
            infoBtns.addEventListener('mouseleave', () => {
                let makeActiveToShowContent = infoBtns.parentElement.parentElement.parentElement.querySelector('.card_prices')
                makeActiveToShowContent.classList.remove('active')
            })
        })

    }
    CardBtnHovers()

})(jQuery);