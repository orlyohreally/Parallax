function getDishes() {
	console.log(this);
}
$(window).scroll(function() {
	var scrolled = $(this).scrollTop();
	if(scrolled > $('.menu-links').innerHeight()) {
		console.log("out scrolled");
		$('.menu-links').css({
			'background': 'rgba(0, 0, 0, 0.8)'
		})
	}
	else if($(window).innerWidth() > 768){
		console.log("not enough scrolled");
		$('.menu-links').css({
			'background': 'none'
		})
	}
	if($(window).innerWidth() == 768){
		$('.menu-links').css({
			'background': 'rgba(0, 0, 0, 0.8)'
		})
	}
})

$(window).ready(function(){
	
	$(window).resize(function(){
		if($(window).innerWidth() > 768) {
			$(".links").each(function(i) {
				$(".links")[i].style.display = 'inline-block';
			})
			$('.menu-links').css({
				'background': 'none'
			})
		} else {
			$(".links").each(function(i) {
				$(".links")[i].style.display = 'none';
			})
			$('.menu-links').css({
				'background': 'rgba(0, 0, 0, 0.8)'
			})
		}
	})
	$(".toggle").click(function(){
		if($(".links")[0].style.display == 'none' || $(".links")[0].style.display == '') {
			$(".links").each(function(i) {
				$(".links")[i].style.display = 'inline-block';
			})
		}
		else if($(".links")[0].style.display != 'none') {
			$(".links").each(function(i) {
				$(".links")[i].style.display = 'none';
			})
		}
	})
})