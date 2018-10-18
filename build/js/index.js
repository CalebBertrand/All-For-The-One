$(document).ready(function () {
    
    // var backgroundOffset = 0.08;
    // var backgroundImageHeight = $(".background-image").height();

    // $(document).scroll(function() {

    //     var differenceFromScreenToImage = Math.abs($(document).height() - $(".background-image").height() * (1 + backgroundOffset));
    //     console.log(differenceFromScreenToImage);
        
    //     var percentDownScreen = $(document).scrollTop() / $(document).height();
        
    //     $(".background-image").css("top", 0 - percentDownScreen * differenceFromScreenToImage);
    // });

    function resizeBackground() {
        var newSize;
        
        if (window.innerWidth > window.innerHeight) {
            newSize = window.innerWidth;
            
        }else {
            newSize = window.innerHeight;
            
        }

        $(".background-image").width(newSize).height(newSize);
    }
    


    function ToggleMenu() {
        $("#menu").fadeToggle(600);
    }
    
    ToggleMenu();
    resizeBackground();
    // if ($.scrollify.current().id() != 'section-5') {
        $("#building").hide();
    // }

    $("#hamburger, #x, #menu, .logo").click(function() {
        ToggleMenu();
    });

    $(".fullscreen").css("height", window.innerHeight);
    $("#menu").css("padding-top", $("header").height() * 1.2);
    

    if (WURFL.form_factor == "Smartphone") {
        $(".logo").hide();
    }

    $(window).resize(function() {
        
        if (WURFL.form_factor == "Smartphone") {
            $(".logo").hide();
        }


        resizeBackground();

        $(".fullscreen").css("height", window.innerHeight);
        $("#menu").css("padding-top", $("header").height() * 1.2);
    });
}); 