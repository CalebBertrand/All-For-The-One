$(document).ready(function () {
    
    // var backgroundOffset = 0.08;
    // var backgroundImageHeight = $(".background-image").height();

    // $(document).scroll(function() {

    //     var differenceFromScreenToImage = Math.abs($(document).height() - $(".background-image").height() * (1 + backgroundOffset));
    //     console.log(differenceFromScreenToImage);
        
    //     var percentDownScreen = $(document).scrollTop() / $(document).height();
        
    //     $(".background-image").css("top", 0 - percentDownScreen * differenceFromScreenToImage);
    // });

    var imageIndex = 1;
    var numImages = 5;

    function resizeBackground() {
        var newSize;
        
        if (window.innerWidth > window.innerHeight) {
            newSize = window.innerWidth;
            
        }else {
            newSize = window.innerHeight;
            
        }

        $(".background-image").width(newSize).height(newSize);
    }
    $(".preview, #exitPreview").hide();
    $(".tn").click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        $(".preview img").attr("src", $(this).find("img").attr("src"));
        $(".preview div.desc").html($(this).children("div.desc").html());
        $(".preview").fadeIn(600);
        $("#exitPreview").show();
        $("#hamburger").css("visibility", "hidden");
        imageIndex = $(this).children("img").data("image-index");
        
    });
    $("#exitPreview").click(function() {
        $(".preview").fadeOut(600);
        $("#hamburger").css("visibility", "visible");
        $("#exitPreview").hide();
    });
    $(".preview .a-right").click(function () {
        if (imageIndex < numImages) {
            $(".preview img").attr("src", $('[data-image-index = "' + (imageIndex + 1) + '"]').attr("src"));
            imageIndex++;
        }else{
            $(".preview img").attr("src", $('[data-image-index = "1"]').attr("src"));
            imageIndex = 1;
        }
    });
    $(".preview .a-left").click(function () {
        if (imageIndex != 1) {
            $(".preview img").attr("src", $('[data-image-index = "' + (imageIndex - 1) + '"]').attr("src"));
            imageIndex--;
        } else {
            $(".preview img").attr("src", $('[data-image-index = "' + numImages + '"]').attr("src"));
            imageIndex = numImages;
        }
    });

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
    if (WURFL.form_factor == "Smartphone" || WURFL.form_factor == "Tablet") {
        $.scrollify.disable();
        $(".section").css("min-height", window.innerHeight);
    }

    $(window).resize(function() {

        if (WURFL.form_factor == "Smartphone" || WURFL.form_factor == "Tablet") {
            $(".section").css("min-height", window.innerHeight);
        }

        resizeBackground();
        $(".fullscreen").css("height", window.innerHeight);
        $("#menu").css("padding-top", $("header").height() * 1.2);
    });
    $(window).scroll(function() {
        if (WURFL.form_factor == "Smartphone" || WURFL.form_factor == "Tablet") {
            if ($(window).scrollTop() + $(window).height() > $("#section-5").offset().top) {
                if ($("#collage").is(":visible")) {
                    $("#building").show();
                    $("#collage").hide();
                }
                }else {
                if (!$("#collage").is(":visible")) {
                    $("#building").hide();
                    $("#collage").show();
                }
            }
        }
    });
}); 