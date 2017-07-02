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
	
	if(wScroll > $('.info-1').innerHeight() + $('.info-1').innerHeight() / 2) {
		$('.stuff').css({
			'transform': 'translate(0%, 0%)'
		})
	}
})
var slides = {};
slides.active = 1;
slides.total = 3;
stuff = {};
stuff.active = 1;
stuff.total = 3;
$(document).ready(function(){
	$('.slider-section .left-arrow').click(function(){
		showSlide(-1, '.slider-section', '.slide-', slides);
		console.log("slides", slides);
	})
	$(".slider-section .right-arrow" ).click(function() {
		showSlide(+1, '.slider-section', '.slide-', slides);
		console.log("slides", slides);
	});
	$('.stuff-list .left-arrow').click(function(){
		showSlide(-1, '.stuff-list', '.stuff-', stuff);
		console.log("stuff", stuff);
	})
	$(".stuff-list .right-arrow" ).click(function() {
		showSlide(+1, '.stuff-list', '.stuff-', stuff);
		console.log("stuff", stuff);
	});
	function showSlide(d, primaryClass, itemClass, list) {
		console.log(itemClass + list.active);
		$(itemClass + list.active).removeClass("active");
		if(d < 0) {
			//left
			if(list.active > 1)
				list.active--;
		}
		else {
			//right
			if(list.active < list.total)
				list.active++;
		}
		if($(window).innerWidth < 767) {
			if(list.active > 1) {
				$(primaryClass + " .left-arrow").css({
					'display': 'block'
				})
			}
			if(list.active == 1) {
				$(primaryClass + " .left-arrow").css({
					'display': 'none'
				})
			}
			
			if(list.active < list.total) {
				$(primaryClass + " .right-arrow").css({
					'display': 'block'
				})
			}
			if(list.active == list.total) {
				$(primaryClass + " .right-arrow").css({
					'display': 'none'
				})
			}
		}
		$(itemClass + list.active).addClass('active');
		console.log("current", stuff.active, list.active);
	}
})