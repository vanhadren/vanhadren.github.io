$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        slideWidth: 500,
        slideMargin: 20,
        randomStart:false,
        captions:true,
        speed:5500,
        pagerType:'short',
        pagerSelector:'#id_pager'
    });
});