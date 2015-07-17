$(document).ready( function() {
	$(window).bind('scroll', function(e) {
		parallax();
	})

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

$(".various").fancybox({
        maxWidth    : 1265,
        maxHeight   : 720,
        fitToView   : true,
        width       : '100%',
        height      : '100%',
        autoSize    : false,
        closeClick  : false,
        openEffect  : 'fade',
        closeEffect : 'fade'
    });


})

function parallax() {
  var sPosition = $(window).scrollTop();
  $('.guitar').css('top', (0 - (sPosition * 0.4)) + 'px' )
}