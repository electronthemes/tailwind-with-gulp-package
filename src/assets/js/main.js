$(document).ready(function() {
    var allfunction = {

        // Owl Cauousel Custom Function 
        owl_custom_js: function () {
            var owlSelector = $(".owl-carousel");
                owlSelector.each(function() {
                    var option = {
                        items: 1,
                        margin: 30,
                        loop: false,
                        slideBy: 1,
                        center: false,
                        mousedrag: true,
                        touchdrag: true,
                        pulldrag: true,
                        nav: false,
                        dots: false,
                        dotsdata: false,
                        autoplay: false,
                        smartspeed: 650,
                        animateout: 'fadeOut',
                        animatein: null,
                        autoHeight: true,
                        autoWidth: true,
                        xs: 1,
                        sm: 1,
                        md: 1,
                        lg: 1,
                        xl: 1,
                    };
                    for (var k in option) {
                        if (option.hasOwnProperty(k)) {
                            if ($(this).attr("data-carousel-" + k) != null) {
                                option[k] = $(this).data("carousel-" + k);
                            }
                        }
                    }

                    $(this).owlCarousel({
                        items: option.items,
                        slideBy: option.slideBy,
                        margin: option.margin,
                        loop: option.loop,
                        center: option.center,
                        mouseDrag: option.mousedrag,
                        touchDrag: option.touchdrag,
                        pullDrag: option.pulldrag,
                        nav: option.nav,
                        navText: option.navtext,
                        dots: option.dots,
                        dotsData: option.dotsdata,
                        autoplay: option.autoplay,
                        smartSpeed: option.smartspeed,
                        animateIn: option.animatein,
                        animateOut: option.animateout,
                        autoHeight: option.autoHeight,
                        responsive: {
                            // breakpoint from 0 up
                            0: {
                                items: option.xs,
                            },
                            // breakpoint from 768 up
                            575: {
                                items: option.sm,
                            },
                            // breakpoint from 768 up
                            768: {
                                items: option.md,
                            },
                            992: {
                                items: option.lg,
                            },
                            1300: {
                                items: option.xl,
                            },
                            1400: {
                                items: option.items,
                            },
                        },
                        // Go to the next item
                    });
                    // Go to the next item
                    $(".next").click(function() {
                        owlSelector.trigger("next.owl.carousel");
                    });
                    // Go to the previous item
                    $(".prev").click(function() {
                        owlSelector.trigger("prev.owl.carousel", [300]);
                    });
                    // if ($('.featured-slider').length) {
                    //     $(".featured-slider").owlCarousel({
                    //         onInitialized: counter,
                    //         onTranslated: counter,
                    //         items: 1,
                    //         animateout: 'fadeOut',
                    //     });
                    // }
                });
        },

        // Menu Icon 
        menu_icon: function() {
            $('.main-menu ul li').each(function() {
                if ($(this).children('.sub-menu,.mega-menu').length) {
                    $(this).children('a').append('<span></span>');
                }
            });
            $('.hdr-v2-menu ul li').each(function() {
                if ($(this).children('.sub-menu,.mega-menu').length) {
                    $(this).children('a').append('<span></span>');
                }
            });
        },

        // Menu 
        menu_toggle: function(){
            var mainMenu = $('.main-menu,.hdr-v2-menu'),
                menuList = $('.main-menu ul li, .hdr-v2-menu ul li'),
                menuBody = $("body"),
                hamburger = $('.hamburger'),
                hamburger_v2 = $('.hamburger-v2');

                hamburger.on("click", function() {
                    $(this).toggleClass('opened');
                    mainMenu.toggleClass('active');
                    menuBody.toggleClass('menu_overlay');

                });
                hamburger_v2.on("click", function() {
                    menuBody.toggleClass('menu-v2-overlay');
                }),

            menuList.click(function() {
                $(this).toggleClass('active').children('.sub-menu,.mega-menu').slideToggle().parent('li').siblings().removeClass('active').find('.sub-menu,.mega-menu').slideUp();
            });

            $(document).on('click', function(event){
                if(!mainMenu.is(event.target) && !mainMenu.has(event.target).length && !hamburger.is(event.target) && !hamburger.has(event.target).length){
                    hamburger.removeClass('opened');
                    mainMenu.removeClass('active');
                    menuBody.removeClass('menu_overlay menu-v2-overlay');
                    $('.main-menu ul li, .hdr-v2-menu ul li').siblings().removeClass('active').find('.sub-menu,.mega-menu,.mega-menu,.hdr-cretors-wrapper').slideUp();
                }
            })
        },

        // Wishlist
        wishlist_popup: function(){
            var wishlistButton = $('.hdr_wishList_btn'),
                wishlistPopup = $('.wishlist_popup'),
                wishlistBody = $("body");

            wishlistButton.on("click", function() {
                $(this).toggleClass('active');
                wishlistPopup.toggleClass('wishlist-active');
                wishlistBody.toggleClass('overflow-hidden');
            });

            $('.wishList_item_close').on("click", function() {
                $(this).parent().hide();
            });

            $(document).on('click', function(event){
                if(!wishlistButton.is(event.target) && !wishlistButton.has(event.target).length && !wishlistPopup.is(event.target) && !wishlistPopup.has(event.target).length) {
                    wishlistButton.removeClass('active');
                    wishlistPopup.removeClass('wishlist-active');
                    wishlistBody.removeClass('overflow-hidden');
                }
            })
        },
        
        // Cart
        // cart_popup: function(){
        //     var cartButton = $('.hdr_cart_btn'),
        //         cartPopup = $('.hdr_cart_popup');
        //         // cartBody = $("body");

        //         cartButton.on("click", function() {
        //         $(this).toggleClass('active');
        //         cartPopup.toggleClass('cart-active');
        //         // cartBody.toggleClass('overflow-hidden');
        //     });

        //     $(document).on('click', function(event){
        //         if(!cartButton.is(event.target) && !cartButton.has(event.target).length && !cartPopup.is(event.target) && !cartPopup.has(event.target).length) {
        //             cartButton.removeClass('active');
        //             cartPopup.removeClass('cart-active');
        //             // cartBody.removeClass('overflow-hidden');
        //         }
        //     })
        // },

        // Search
        // search_popup: function() {
        //     var srch_overlay = $('.hdr-search-wrapper'),
        //         srch_btn = $('.hdr_search_btn');

        //     srch_btn.on("click", function() {
        //         $(this).toggleClass('active');
        //         $('.search_popup').toggleClass('search-active');
        //         $("body").toggleClass('overflow-hidden');
        //     });
        //     $('.hdr_search_close').on('click', function(){
        //         $('.search_popup').removeClass('search-active');
        //         $("body").removeClass('overflow-hidden');
        //     });
        //     $(document).on('click', function(event){
        //         if(!srch_btn.is(event.target) && !srch_btn.has(event.target).length && !srch_overlay.is(event.target) && !srch_overlay.has(event.target).length) {
        //             $('.search_popup').removeClass('search-active');
        //             $("body").removeClass('overflow-hidden');
        //         }
        //     })
        // },


        // countDown_clock
        // countDown_clock: function(){
        //     if( $(".countdown-clock").length ){
        //         $('.countdown-clock').countdown('2023/10/10', function(event) {
        //             $('.clock-days').html(event.strftime('%D'));
        //             $('.clock-hours').html(event.strftime('%H'));
        //             $('.clock-minutes').html(event.strftime('%M'));
        //             $('.clock-seconds').html(event.strftime('%S'));
        //         });
        //     };
        // },

        // Accordion
        // accordion: function() { 
        //     $('.faq-head').click(function() {
        //         if ($(this).parent().hasClass('active')){ 
        //             $(this).parent().removeClass("active").children('.faq-body').slideUp(); 
        //         }else{
        //             $('.faq-wrapper').find('.single-faq').removeClass('active').children('.faq-body').slideUp();
        //             $(this).parent().addClass("active").children('.faq-body').slideDown(); 
        //         }
        //     });
        // },

        // Nice Select 
        // nice_select: function(){
        //     $('select').niceSelect();
        //  },



        // SLider Icon 
        // slider_icon: function() {
        //     // Short Code Partner Slider
        //     var partner_slider_01 = $('.partner-slider-01')
        //     $(".ptnrSlider01_next").click(function() {
        //         partner_slider_01.trigger("next.owl.carousel");
        //     });
        //     $(".ptnrSlider01_prev").click(function() {
        //         partner_slider_01.trigger("prev.owl.carousel", [300]);
        //     });
        // },

        
        // Sticky Header 
        // sticky_header: function(){
        //     let win = $(window);
        //     let sticky_id = $(".header-area");
        //     win.on('scroll', function () {
        //         let scroll = win.scrollTop();
        //         if (scroll < 245) {
        //             sticky_id.removeClass("sticky-header");
        //         } else {
        //             sticky_id.addClass("sticky-header");
        //         }
        //     });
        // },


        init: function() {
            allfunction.menu_icon()
            allfunction.menu_toggle()
        },
    }
    
    // allfunction.init();
    // window.addEventListener('load',function(){
    //     document.querySelector('body').classList.add("loaded")  
    // });
});


// Nab Tab
$("#user-nav-tabs li").on('click', function(e) {
    var targetLink = $(e.currentTarget.children[0]).attr("href").slice(1);

    var content_map = {
        c1  : "#content1",
        c2  : "#content2",
        c3  : "#content3",
        c4  : "#content4"
    }

    $(e.currentTarget).siblings().removeClass("active");

    $.each(content_map, function(hash, elid) {
        if (hash == targetLink) {
            $(elid).show();
            $(e.currentTarget).addClass("active");
        } else {
            $(elid).hide();
        }
    });
});



// Dark Mode Activation 
// const toggleSwitch = document.querySelector('.switcher');
// const toggleInput =  document.querySelector('.switcher input');

// if(localStorage.colorScheme === 'dark') {
//     document.documentElement.setAttribute('class', 'dark');
//     toggleInput.checked = true;
// }else {
//     document.documentElement.setAttribute('class', 'light');
//     toggleInput.checked = false;
// }

// function switchTheme(e) {
//   if(e.target.checked) {
//     document.documentElement.setAttribute('class', 'dark');
//     localStorage.setItem('colorScheme', 'dark');
//   } else {
//     document.documentElement.setAttribute('class', 'light');
//     localStorage.setItem('colorScheme', 'light');
//   }
// }
// toggleSwitch.addEventListener('change', switchTheme, false);



// // indicator
// let indicator = document.querySelector("#indicator");
// let documentHight = document.documentElement.scrollHeight;
// let viewpostHeight = document.documentElement.clientHeight;

// if (indicator) {
//     window.onscroll = function (){
//         console.log(scrollY);
//         let percentageScrolled = (scrollY / (documentHight - viewpostHeight)) * 100;
//         indicator.style.width = percentageScrolled + "%";
//     }
// }