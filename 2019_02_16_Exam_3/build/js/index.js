$(document).ready(function(){
			
	$('._mainContainer').slick({
		slidesToShow: 1,
		slidesToScroll:1,
		// arrows: true,
		// // fade: true,
		dots: true,
		// // autoplay: true,
		// // autoplaySpeed: 4000,
		// centerMode: true,
		// prevArrow: '<img src="img/service_img/arrow_left.png" class="arr-prev">',
		// nextArrow: '<img src="img/service_img/arrow_right.png" class="arr-next">',
		
	});

	$('._menuScroll').on('click', function (e) {
		//alert($(this).attr('class'));
		e.preventDefault();
		$('html').animate({

			scrollTop:  $($(this).attr('data-dest')).offset().top
		}, 1500);
	});
	
});