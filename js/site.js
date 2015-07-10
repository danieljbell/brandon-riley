$(document).ready( function() {
	$(window).bind('scroll', function(e) {
		parallax();
	})
	
	$("header h1").fitText(1, { minFontSize: '12px', maxFontSize: '90px' });

	var navOffset = $("nav").offset().top;

	$("nav").wrap('<div class="nav-placeholder"></div>"');
	$(".nav-placeholder").height($("nav").outerHeight());

	$(window).scroll(function() {
		var scrollPos = $(window).scrollTop();

		if (scrollPos >= navOffset) {
			$("nav").addClass("fixed");
		} else {
			$("nav").removeClass("fixed");
		}
	})

	$(".main-vid").fitVids();
})

function parallax() {
  var sPosition = $(window).scrollTop();
  $('.guitar').css('top', (0 - (sPosition * 0.4)) + 'px' )
}