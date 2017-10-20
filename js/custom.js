 jQuery(document).ready(function () {
    'use strict';
    /*** =====================================
    * Easy Menu
    * =====================================***/
	(function($) {
	    $.fn.menumaker = function(options) {
	        var cssmenu = $(this),
	            settings = $.extend({
	                format: "dropdown",
	                sticky: false
	            }, options);
	        return this.each(function() {
	            $(this).find(".button").on('click', function() {
	                $(this).toggleClass('menu-opened');
	                var mainmenu = $(this).next('ul');
	                if (mainmenu.hasClass('open')) {
	                    mainmenu.slideToggle().removeClass('open');
	                } else {
	                    mainmenu.slideToggle().addClass('open');
	                    if (settings.format === "dropdown") {
	                        mainmenu.find('ul').show();
	                    }
	                }
	            });
	            cssmenu.find('li ul').parent().addClass('has-sub');
	            var multiTg;
	            multiTg = function() {
	                cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
	                cssmenu.find('.submenu-button').on('click', function() {
	                    $(this).toggleClass('submenu-opened');
	                    if ($(this).siblings('ul').hasClass('open')) {
	                        $(this).siblings('ul').removeClass('open').slideToggle();
	                    } else {
	                        $(this).siblings('ul').addClass('open').slideToggle();
	                    }
	                });
	            };
	            if (settings.format === 'multitoggle') multiTg();
	            else cssmenu.addClass('dropdown');
	            if (settings.sticky === true) cssmenu.css('position', 'fixed');
	            var resizeFix;
	            resizeFix = function() {
	                var mediasize = 1000;
	                if ($(window).width() > mediasize) {
	                    cssmenu.find('ul').show();
	                }
	                if ($(window).width() <= mediasize) {
	                    cssmenu.find('ul').hide().removeClass('open');
	                }
	            };
	            resizeFix();
	            return $(window).on('resize', resizeFix);
	        });
	    };
	})(jQuery);
	 $("#easy-menu").menumaker({
        format: "multitoggle"
    });
    /*** =====================================
    * Progress
    * ==================================== ***/
    jQuery(window).on('scroll', function() {
        var windowHeight = $(window).height();
        function kalProgress() {
           var progress = $('.progress-rate');
           var len = progress.length;
           for (var i = 0; i < len; i++) {
               var progressId = '#' + progress[i].id;
               var dataValue = $(progressId).attr('data-value');
               $(progressId).css({'width':dataValue+'%'});
           }
        }
        var progressRateClass = $('#progress-running');
         if ((progressRateClass).length) {
             var progressOffset = $("#progress-running").offset().top - windowHeight;
             if ($(window).scrollTop() > progressOffset) {
                 kalProgress();
             }
         }
     });


    /** =====================================
    * Counter
    * =====================================***/
	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });



  /**=====================================
  *  sponsor Carousel
  * =====================================*/
  $('.client-carousel').owlCarousel({
       autoPlay: true,
       pagination: false,
       loop:true,
       navigation:false,
       items: 7,
       itemsDesktop: [1366, 5],
       itemsDesktopSmall: [768,3],
       itemsTablet: [650, 1],
       navigationText: [
         "<i class='fa fa-angle-left'></i>",
         "<i class='fa fa-angle-right'></i>"
         ]
    });
    /**=====================================
    *  sponsor Carousel
    * =====================================*/
    $('.testimonial-carousel').owlCarousel({
         autoPlay: true,
         pagination: true,
         loop:true,
         navigation:false,
         items: 1,
         itemsDesktop: [1366, 1],
         itemsDesktopSmall: [768,1],
         itemsTablet: [650, 1],
         itemsMobile: 1,
         navigationText: [
           "<i class='fa fa-angle-left'></i>",
           "<i class='fa fa-angle-right'></i>"
           ]
      });
    /**=====================================
    *  service Carousel
    * =====================================*/
    $('.service-carousel').owlCarousel({
         autoPlay: true,
         pagination: false,
         loop:true,
         navigation:false,
         items: 5,
         itemsDesktop: [1366, 4],
         itemsDesktopSmall: [1024,3],
         itemsTablet: [767, 1],
         navigationText: [
           "<i class='fa fa-angle-left'></i>",
           "<i class='fa fa-angle-right'></i>"
           ]
      });
    /**=====================================
    *  Work Carousel
    * =====================================*/
    $('.work-carousel').owlCarousel({
         autoPlay: true,
         pagination: true,
         loop:true,
         navigation:false,
         items: 5,
         itemsDesktop: [1366, 4],
         itemsDesktopSmall: [1024,3],
         itemsTablet: [650, 1],
         navigationText: [
           "<i class='fa fa-angle-left'></i>",
           "<i class='fa fa-angle-right'></i>"
           ]
    });
    /**=====================================
    *  Testimonial Two Carousel
    * =====================================*/
    $('.testimonial-carousel-two-active').owlCarousel({
         autoPlay: true,
         pagination: true,
         loop:true,
         navigation:false,
         items: 3,
         itemsDesktop: [1024, 2],
         itemsDesktopSmall: [768,2],
         itemsTablet: [550, 1],
         itemsMobile: 1,
         navigationText: [
           "<i class='fa fa-angle-left'></i>",
           "<i class='fa fa-angle-right'></i>"
           ]
    });

    /** =====================================
    *   Search Box
    * =====================================**/
   	$('.search-box .search-icon').on('click', function(e) {
        e.preventDefault();
        $('.top-search-input-wrap').addClass('show');
   	});
   	$(".top-search-input-wrap .top-search-overlay, .top-search-input-wrap .close-icon").on('click', function(){
        $('.top-search-input-wrap').removeClass('show');
   	});

    /*** =====================================
    * 	Mobile Menu
    * =====================================***/
	$('.mobile-background-nav .has-submenu').on('click', function(e) {
	  	e.preventDefault();
	    var $this = $(this);
	    if ($this.next().hasClass('menu-show')) {
	        $this.next().removeClass('menu-show');
	        $this.next().slideUp(350);
	    } else {
	        $this.parent().parent().find('li .dropdown').removeClass('menu-show');
	        $this.parent().parent().find('li .dropdown').slideUp(350);
	        $this.next().toggleClass('menu-show');
	        $this.next().slideToggle(350);
	    }
	});
	$('.mobile-menu-close i').on('click',function(){
	     $('.mobile-background-nav').removeClass('in');
	});

	$('.mobile-logo-search-humbarger .humbarger-button i').on('click',function(){
	     $('.mobile-background-nav').toggleClass('in');
	});

	var windowHeight = $(window).height();
	$(".mobile-background-nav .mobile-inner").css({"height": windowHeight});
	$(window).on('resize',function(){
	    var windowHeight = $(window).height();
		var windowWidth = $(window).width();
	    if (windowWidth < 991) {
	        $(".mobile-background-nav .mobile-inner").css({"height": windowHeight});
	    }
	});


    /** =====================================
	*  Popup Video
	* ===================================== **/
	if($('.popup-play').length){
		$('.popup-play .play-icon').magnificPopup({
			items: {
		 		src: 'https://www.youtube.com/watch?v=UAJyJt_lnKA'
			},
			type: 'iframe', // this is default type
		});
	}




    $('.categoriy-humbarger .icon').on('click', function(){
        $('.categories-widget').toggleClass('hidden-widget');
    });
    /** =====================================
    * Match Height
    * =====================================***/
    $('.match-height-active > div').matchHeight();
    /*** =====================================
    * Gallery Filter
    * ==================================== ***/
	$(window).on('load', function(){
        /*** =====================================
          *   Fixed Menu
          * =====================================*/
         var win = $(window);
         var menuTerget = $('.desktop-menu');
         var menuOffset = menuTerget.offset().top;
         win.on('scroll', function() {
             if (menuOffset < win.scrollTop()) {
                 menuTerget.addClass('main-menu-fix');
             } else {
                 menuTerget.removeClass('main-menu-fix');
             }
         });
        /** ===== Preloder ========**/
	    $('.preloader').fadeOut();

		if($('.gallery-grid').length){
			var $grid = $('.gallery-grid').isotope({
		        itemSelector: '.grid-item',
		        percentPosition: true,
		        masonry: {
		            columnWidth: '.grid-item',
		        }
		    });
			//$('.gallery-grid .zoom-button').simpleLightbox();
		}
		$('.gallery-filter ul li a').on('click', function() {
	        var filterValue = $(this).attr('data-filter');
	        $grid.isotope({
		            filter: filterValue
		    });
	    });
	});
    /** =====================================
    *  Color Swicher
    * ===================================== **/
	$('.swhicher-button button').on('click', function(){
		var buttonAttr = $(this).attr('data-att');
		$('link[data-style="color-style"]').attr('href','css/'+buttonAttr+'.css');
        $('.logo a img, .footer-logo a img').attr('src','images/'+buttonAttr+'-logo.png');
	});
	$('.setting-button-wrapper .setting-button').on('click', function(){
		$('.color-shicher-wraper').toggleClass('show-color');
	});
    /** =====================================
    *  Wow JS
    * ===================================== **/
    if($('.wow').length){
        var wow=new WOW( {
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: false, // trigger animations on mobile devices (default is true)
            live: true, // act on asynchronously loaded content (default is true)
            callback: function(box) {}
            , scrollContainer: true // optional scroll container selector, otherwise use window
        }
        );
        wow.init();
    }
    /** =====================================
	*  Shop Rating
	* ===================================== **/
	function shoprating() {
        var shopRate = $('.shop-rating');
        var len = shopRate.length;
        for (var i = 0; i < len; i++) {
           var shopRateId = '#' + shopRate[i].id;
           var dataValue = $(shopRateId).attr('data-value');
            $(shopRateId).rateYo({
               rating: dataValue,
               starWidth: "13px",
               normalFill: "#212121",
               spacing   : "5px",
               ratedFill: "#ff4e00"
           });
        }
   }
   if($('.shop-rating').length) {
       shoprating();
   }
   $('.cart-close i').on('click', function(){
    $(this).parents('tr').fadeOut();
   });


});
