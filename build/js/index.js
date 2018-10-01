$(document).ready(function () {
    
    var backgroundOffset = 0.08;
    var backgroundImageHeight = $(".background-image").height();

    // $(document).scroll(function() {

    //     var differenceFromScreenToImage = Math.abs($(document).height() - $(".background-image").height() * (1 + backgroundOffset));
    //     console.log(differenceFromScreenToImage);
        
    //     var percentDownScreen = $(document).scrollTop() / $(document).height();
        
    //     $(".background-image").css("top", 0 - percentDownScreen * differenceFromScreenToImage);
    // });

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
    $("#menu").css("padding-top", $("header").height() * 1.2);
    

    if (WURFL.form_factor == "Smartphone") {
        $(".logo").hide();
        // $.scrollify.disable();
    }

    $(window).resize(function() {
        
        if (WURFL.form_factor == "Smartphone") {
            $(".logo").hide();
            // $.scrollify.disable();
        }


        resizeBackground();

        $(".fullscreen").css("min-height", window.innerHeight);
        $("#menu").css("padding-top", $("header").height() * 1.2);
    });
}); 