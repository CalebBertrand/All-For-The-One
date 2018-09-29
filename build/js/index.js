$(document).ready(function () {
    
    var backgroundOffset = 0.08;

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

    $("#hamburger, #x, #menu, .logo").click(function() {
        ToggleMenu();
    });

    $(".fullscreen").css("min-height", window.innerHeight);
    $("#menu").css("padding-top", $("header").height());
    

    if (WURFL.is_mobile) {
        $.scrollify.disable();
    }

    $(window).resize(function() {

        resizeBackground();

        $(".fullscreen").css("min-height", window.innerHeight);
        $("#menu").css("padding-top", $("header").height() + 45);
    });
}); 