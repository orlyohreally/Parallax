var Locations = [];
function GetLocations() {
	var addresses = $('#find-us .locations li');
	console.log(addresses.length);
	var i = 0;
	GetLocation(i, addresses);
}
function GetLocation(i, addresses) {
	var geocoder = new google.maps.Geocoder();
	if(i < addresses.length) {
		var address = addresses[i].textContent + ", Санкт-Петербург";
		console.log(address);
		geocoder.geocode({ 'address': address }, function (results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				var latitude = results[0].geometry.location.lat();
				var longitude = results[0].geometry.location.lng();
				console.log("Latitude: " + latitude + "\nLongitude: " + longitude);
				Locations[i] = {'lat': latitude, 'lng': longitude};
				GetLocation(i + 1, addresses);
			} else {
				console.log("Request failed.");
				Locations[i] = 0;
				GetLocation(i + 1, addresses);
			}
		});
	}
	else
		showMap();
};
var marker, map;
function showMap() {
	
	map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 10,
	  center: {lat: Locations[0].lat, lng: Locations[0].lng}
	});
	
	for(var i = 0; i < Locations.length; i++) {
		var address = {lat: Locations[i].lat, lng: Locations[i].lng};
		marker = new google.maps.Marker({
		  position: address,
		  map: map
		});
		marker.setMap(map);
	}
}
function showLocation(i) {
	var address = {lat: Locations[i].lat, lng: Locations[i].lng};
	console.log(address, Locations[i].lat, Locations[i].lng, map.zoom);
	
	map.setCenter({lat: Locations[i].lat, lng: Locations[i].lng});
	map.setZoom(15);
	console.log(map.zoom);
	$(".locations li").css({
		'text-decoration': 'none'
	});
	$(".locations li")[i].style.textDecoration = "underline";
}
function initMap() {
	GetLocations();
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
	$(".locations li").each(function(i) {
		
		$(".locations .address-" + (i + 1)).click(function(){
			console.log("clicked clicked", i);
			showLocation(i);
		})
		
	})
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