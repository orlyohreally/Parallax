$(window).scroll(function(){
	var wScroll = $(this).scrollTop();
	$('.title').css({
		'transform': 'translate(0px, ' + wScroll / 3 + '%)'
	});
	$('.logo').css({
		'transform': 'translate(0px, ' + wScroll / 1.2 + '%)'
	});
	if(wScroll > $('.banner').offset().top - 200) {
		$('.info-1').css({
			'transform': 'translate(100%)'
		})
		
	}
	if(wScroll > $('.banner').innerHeight() + $('.info-1').innerHeight() / 2) {
		$('.info-2').css({
			'transform': 'translate(-100%)'
		})
	}
	
	if(wScroll > $('.parallax-div').offset().top) {
		$('.stuff').css({
			'transform': 'translate(0%, 0%)'
		})
	}
})
