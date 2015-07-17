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

	// Start of Video Grid
    // $('div.grid').click(function (event) {
    //     // var current = $('#video-grid-14280 .current-video').attr('data-current');
    //     // var $this = $($(event.target).parents('.video')[0]);
    //     // var key = $this.attr('data-key');
    //     // if(key == current) {
    //     //     return;
    //     // }
    //     var videoId = $this.attr('data-id');
    //     $('#video-grid-14280 div.current-video iframe').attr('src', '//www.youtube-nocookie.com/embed/' + videoId + '?rel=0&showinfo=0&modestbranding=1&autohide=1&vq=hd720');
        
    // });


    // $('.video-grid img').load(function() {
    //     $(document).ready(function() {
    //         var height = 0;
    //         $('#video-grid-14280 div.video').each(function () {
    //             var $thisHeight = $(this).height();
    //             if ($thisHeight > height) {
    //                 height = $thisHeight;
    //             }
    //         });
    //         $('#video-grid-14280 div.video').height(height);
    //     });
    // });


$(".various").fancybox({
        maxWidth    : 1280,
        maxHeight   : 720,
        fitToView   : false,
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