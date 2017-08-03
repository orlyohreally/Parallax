function initMap() {
	var uluru = {lat: -25.363, lng: 131.044};
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 4,
	  center: uluru
	});
	var marker = new google.maps.Marker({
	  position: uluru,
	  map: map
	});
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
	var currentSlide = 1;
	console.log($(".event").length);
	$("#events .left-arrow").click(function(){
		currentSlide--;
		shiftSlide();
		
	})
	$("#events .right-arrow").click(function(){
		currentSlide++;
		shiftSlide();
	})
	function dotClicked(i) {
		currentSlide = i;
		shiftSlide();
	}
	var i;
	$(".dot").each(function(i){
		$(".dot-" + (i + 1)).click(function(){
			dotClicked(i + 1);
		})
	})
	function shiftSlide() {
		$("#events .events .event").css({
			"display": 'none'
		})
		$(".nav .dot").css({
			'background': '#ffffff'
		})
		$(".dot-" + currentSlide).css({
			'background': '#666666'
		})
		$(".event-" + currentSlide).css({
			'display': 'block'
		})
		
		if(currentSlide >= $(".event").length) {
			$(".right-arrow").css({
				'display': 'none'
			})
		}
		if(currentSlide < $(".event").length) {
			$(".right-arrow").css({
				'display': 'block'
			})
		}
		if(currentSlide <= 1){
			$(".left-arrow").css({
				'display': 'none'
			})
		}
		else
		{
				$(".left-arrow").css({
				'display': 'block'
			})
		}
	}
})