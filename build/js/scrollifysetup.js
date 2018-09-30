$(function() {
		$.scrollify({
			section : "div.section",
			scrollSpeed: 1400,
			easing: "easeOutExpo",
			before:function(i) {
				if (i >= 4) {
					$("#building").show();
					$("#collage").hide();
				}
			},
			after:function(i) {
				if (i <= 3) {
					$("#building").hide();
					$("#collage").show();
				}
				
			},
			setHeights: true
		});
	});