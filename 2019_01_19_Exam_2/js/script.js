// alert('joke');

$(document).ready(function(){
			
	$('._headerConteiner').slick({
		slidesToShow: 1,
		slidesToScroll:1,
		arrows: false,
		fade: true,
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
	});
	
});

function loadMap() {
	// alert('ho-ho-ho');
	var loc = {lat:40.67, lng: -73.94};
	worldMap = new google.maps.Map(document.querySelector('._map'),{
		zoom:16, 
		center:loc, 
		disableDefaultUI: true
	});
};

$(function(){
	$('.header_scroll-img').on('click', function(){
		var N = $('.main').offset().top;
		$('html').animate({
			scrollTop: N,
		}, 1000)
	})
})