$(function() {
		$.scrollify({
			section : "div.section",
			scrollSpeed: 1400,
			easing: "easeOutExpo",
			before:function(i) {
				if (i >= 4) {
					$(".background-image").attr("src", "imgs/buildingplans.png");
				}
				console.log(i);
			},
			after:function(i) {
				if (i <= 3) {
					$(".background-image").attr("src", "imgs/AFTObackground1.jpg");
				}
				console.log(i);
				
			},
			setHeights: true
		});
	});