$(document).ready(function () {
    
    var backgroundOffset = 0.1;

    $(document).scroll(function() {

        var differenceFromScreenToImage;

        if (window.innerWidth > window.innerHeight) {
            differenceFromScreenToImage = window.innerWidth * (backgroundOffset);
        } else {
            differenceFromScreenToImage = window.innerHeight * (backgroundOffset);
        }
        var percentDownScreen = $(document).scrollTop() / $(document).height();
        
        $(".background-image").css("top", 0 - percentDownScreen * differenceFromScreenToImage * 1.25);
    });

    function resizeBackground() {
        var newSize;
        
        if (window.innerWidth > window.innerHeight) {
            newSize = window.innerWidth * (1 + backgroundOffset);
            
        }else {
            newSize = window.innerHeight * (1 + backgroundOffset);
            
        }

        $(".background-image").width(newSize).height(newSize);
    }
    


    function ToggleMenu() {
        $("#menu").fadeToggle(600);
    }
    
    ToggleMenu();
    resizeBackground();
    $("#building").hide();

    $("#hamburger, #x, #menu a").click(function() {
        ToggleMenu();
    });

    $(".fullscreen").css("min-height", window.innerHeight);
    $("#menu").css("padding-top", $("header").height());

    var mobile = (WURFL.form_factor != 'Desktop' && WURFL.form_factor != 'Tablet');
    
    function EnableDesktopImages() {
        $('#section-1').css('background-image', "url('imgs/AFTObackground1.jpg')");
        $('#section-2').css('background-image', "url('imgs/bibleswag.jpg')");
        $('#section-3').css('background-image', "url('imgs/biblestudy.jpg')");
        $('#section-4').css('background-image', "url('imgs/woodwall.jpg')");
    }

    if (WURFL.form_factor == 'Desktop') {
        $(".section").css("background-attachment", "fixed");
    }

    if (mobile || window.innerWidth < 479) {
        $('.enable-on-mobile').show();
        $('.hide-on-mobile').hide();
        $.scrollify.disable();
        $('#section-1').prepend('<img src="imgs/mobilewoodwall.jpg" class="enable-on-mobile background-image fullheight">');
    }else{
        $('.enable-on-mobile').hide();
        $('.hide-on-mobile').show();

        // EnableDesktopImages();
    }

    $(window).resize(function() {

        resizeBackground();

        $(".fullscreen").css("min-height", window.innerHeight);
        $("#menu").css("padding-top", $("header").height() + 45);

        if (mobile || window.innerWidth < 479) {
            $('.enable-on-mobile').show();
            $('.hide-on-mobile').hide();
        } else {
            $('.enable-on-mobile').hide();
            $('.hide-on-mobile').show();
            if (!mobile) {
                // EnableDesktopImages();
                $.scrollify.enable();
            }
        }
    });
}); 