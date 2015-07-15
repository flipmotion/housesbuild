$(document).ready(function() {
	var owlMain = $('[data-item="slider-main"]');
	
	owlMain.owlCarousel({
		loop:true,
		thumbs: true,
		thumbsPrerendered: true,
		thumbImage: true,
		margin:0,
		nav:true,
		items:1,
		autoplayHoverPause: true,
		autoplayTimeout: 5000,
		autoplay:true,
		navText: [
		  "<i class='my-arrow-left'></i>",
		  "<i class='my-arrow-right'></i>"
		],
	});
	
	$('a.smooth').click(function(){
		$('html, body').animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, 1000);
		return false;
	});
	
	
	
	
	$('.header-lvl-2 .nav.navbar-nav li a').click(function() {
		$('.header-lvl-2 .nav.navbar-nav li a').removeClass('active');
		$(this).addClass('active');
	});
	
	var form = $('[data-form="send"]');
	$(form).validator().on('submit', function (e) {
		if ($(this).hasClass('disabled')) {
			// handle the invalid form...
			e.preventDefault();
		} else {
			// everything looks good!
			send();
		}
	});
	var scroll_r = $(this).scrollTop();
	menuTop();
	$(window).scroll(function () {
		var scroll_r = $(this).scrollTop();
		menuTop();
	});
	
	var myMap;
	ymaps.ready(init);
	function init () {
		myMap = new ymaps.Map('map', {
			center: [55.770579, 37.6959459],
			zoom: 12,
			controls: []
		}),
		myMap.behaviors
			.disable(['rightMouseButtonMagnifier' , 'scrollZoom'])
			myPlacemark = new ymaps.Placemark([55.770579, 37.6559459], {
				hintContent: [
				''
			].join(''),
				balloonContentBody: [
				'<div class=\'map_holder\'><div class=\'map_header\'><p>Контакты</p><\/div><div class=\'map_address\'><div class=\'icon\'><\/div><p>г. Москва, м. Митино</p><\/div><div class=\'map_phone\'><div class=\'icon\'><\/div><p><strong>+ 7 965-242-97-42</strong></p><p><strong>+ 7 926-113-58-17</strong></p><\/div><div class=\'map_date\'><div class=\'icon\'><\/div><p>Пн-Пт с 09:00 до 18:00</p><\/div><div class=\'map_mail\'><div class=\'icon\'><\/div><p><a href="mailto:Topsales15@mail.ru">Topsales15@mail.ru</a></p><\/div><\/div>'
			].join('')
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'assets/img/pick-map.png',
				iconImageSize: [59, 87],
				iconImageOffset: [-32, -87]
			});
		myMap.geoObjects.add(myPlacemark);
	}
});


function send(){
	var form = $('[data-form="send"]');
	form.ajaxForm(function() {
		$('#call').modal('hide');
		$('#thx').modal('show');
		$(form).resetForm();
	});
}
function menuTop(){
	if ( $(this).scrollTop() > 10 && !$('.header').hasClass('open') ) {
		$('.header').addClass('fix-header');
		var loc = $('.header .logo img').attr("data-src");
		$('.header .logo img').attr("src",loc);
	} else if ( $(this).scrollTop() <= 10 ) {
		$('.header').removeClass('fix-header');
		var pick = $('.header .logo img').attr("data-src2");
		$('.header .logo img').attr("src",pick);
	}
}
