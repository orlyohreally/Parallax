$(window).ready(function(){
	if($(window).innerWidth() <= 768 ) {
		
		$(".menu a").click(function(){
			$("header .menu a").css({
				'display':'none'
			})
		})
	}
	$(window).resize(function() {
		console.log("resizing");
		if($(window).innerWidth() > 768) {
			$("header .menu a").css({
				'display':'inline-block'
			})
		}
		else {
			$("header .menu a").css({
				'display':'none'
			})
		}
	})
	$(".toggle").click(function(){
		if($("header .menu a")[0].style.display == 'none' || $("header .menu a")[0].style.display == '') {
			$("header .menu a").each(function(i) {
				$("header .menu a")[i].style.display = 'block';
			})
		}
		else if($("header .menu a")[0].style.display != 'none') {
			$("header .menu a").each(function(i) {
				$("header .menu a")[i].style.display = 'none';
			})
		}
	})
	
	$('.reason h2 img').each(function(i){
		i++;
		$('.reason-' + i + ' h2 img').click(function(){
			if($('.reason-' + i + ' p')[0].style.display == "block")
				hideReason(i);
			else 
				showReason(i);
		})
	})
		
	function showReason(i) {
		$('.reason-' + i + ' p').css({
			'display': 'block'
		});
		$('.reason-' + i + ' h2 .number').css({
			'background': '#5771e9'
		});
		$('.reason-' + i + ' img').css({
			'-ms-transform': 'rotate(180deg)',
			'-webkit-transform': 'rotate(180deg)',
			'-o-transform': 'rotate(180deg)',
			'-moz-transform': 'rotate(180deg)',
			'transform': 'rotate(180deg)'
		})
	}
	function hideReason(i) {
		$('.reason-' + i + ' p').css({
			'display': 'none'
		});
		$('.reason-' + i + ' h2 .number').css({
			'background': 'rgba(154, 154, 154, 0.42)'
		});
		$('.reason-' + i + ' img').css({
			'-ms-transform': 'rotate(0deg)',
			'-webkit-transform': 'rotate(0deg)',
			'-o-transform': 'rotate(0deg)',
			'-moz-transform': 'rotate(0deg)',
			'transform': 'rotate(0deg)'
		})
	}
})