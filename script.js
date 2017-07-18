$(window).ready(function(){
	setIframe();
})
$(window).resize(function(){
	setIframe();
})
function setIframe() {
	var iframes = document.getElementsByTagName("iframe");
	$("iframe").each(function(i) {
		iframes[i].width = $(window).innerWidth() * 0.6 * 0.8;
	})
}