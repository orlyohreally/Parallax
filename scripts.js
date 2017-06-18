$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	$('.title').css({
		'transform': 'translate(0px, ' + wScroll / 3 + '%)'
	});
	$('.logo').css({
		'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
	});
	if($(window).width() > 478) {
		console.log("normal screen");
		if(wScroll > $('.banner').offset().top - 100) {
			$('.info-1').css({
				'transform': 'translate(100%)'
			})
		}
		/*else if(wScroll == $('.banner').offset().top) {
			$('.info-1').css({
				'transform': 'translate(-100%)'
			})
		}*/

		if(wScroll > $('.info-1').offset().top - 250) {
			$('.info-2').css({
				'transform': 'translate(-100%)'
			})
		}
		/*else if(wScroll < $('.info-1').offset().top + 100) {
			$('.info-2').css({
				'transform': 'translate(100%)'
			})
		}*/
	}
	else {
		console.log("small screen");
		
	}
})
