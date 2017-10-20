"use strict";

var tpj=jQuery;
var revapi1052;
tpj(document).ready(function() {
    if(tpj("#rev_slider_1052_1").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_1052_1");
    }else{
        revapi1052 = tpj("#rev_slider_1052_1").show().revolution({
            sliderType:"standard",
            jsFileLocation:"js/revolution",
            sliderLayout:"fullscreen",
            dottedOverlay:"none",
            delay:6000,
            navigation: {
                keyboardNavigation:"on",
                keyboard_direction: "vertical",
                mouseScrollNavigation:"off",
                mouseScrollReverse:"default",
                onHoverStop:"off",
                hide_onleave: false,
                hide_delay: 5200,
                touch:{
                    touchenabled:"off",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "vertical",
                    drag_block_vertical: false
                },
                arrows: {
                    enable: true,
                    style: 'uranus',
                },
                bullets: {
                    enable:true,
					hide_onmobile:true,
					hide_under:768,
					style:"zeus",
					hide_onleave:false,
					direction:"horizontal",
					h_align:"center",
					v_align:"bottom",
					h_offset:0,
					v_offset:30,
					space:10,
                    tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span><span class="tp-bullet-title">{{title}}</span>'
                }
            },
            responsiveLevels:[1240,1025,778,480],
            visibilityLevels:[1240,1025,778,480],
            gridwidth:[1400,1240,778,480],
            gridheight:[500,400,300,300],
            lazyType:"none",
            shadow:0,
            spinner:"on",
            stopLoop:"on",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            fullScreenAutoWidth:"off",
            fullScreenAlignForce:"off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
                simplifyAll:"off",
                nextSlideOnWindowFocus:"off",
                disableFocusListener:false,
            }
        });
    }
});	/*ready*/
