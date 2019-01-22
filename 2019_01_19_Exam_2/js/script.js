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

$(document).ready(function(){
			
	$('._mainContainer').slick({
		slidesToShow: 3,
		slidesToScroll:1,
		// arrows: true,
		// // fade: true,
		dots: true,
		// // autoplay: true,
		// // autoplaySpeed: 4000,
		// centerMode: true,
		prevArrow: '<img src="img/service_img/arrow_left.png" class="arr-prev">',
		nextArrow: '<img src="img/service_img/arrow_right.png" class="arr-next">',
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