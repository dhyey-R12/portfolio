// Loader JS
$(window).on('load',function() {
	// $('#loader-wrapper').fadeOut('slow', function(){
		$('body').removeClass('style_overflow_hidden');
	// });
	let loaderheight = $("#loader-wrapper").innerHeight();

	$('#loader-wrapper').css({"top": "-100%","bottom": "100%"});
});

$(document).ready(function() {
	// nav
	$(window).on('scroll',function(){
		var top = $(window).scrollTop();
		if(top){
			$('header').addClass('scrollnav');
		}
		else{
			$('header').removeClass('scrollnav');
		}
	});

	// toggle
	$('.navbar-toggler').on("click", function(){
		$(this).toggleClass('menu_open');
		$('.navbar-collapse').toggleClass('toggle_open');
		$('body').toggleClass('style_overflow_hidden');
	});
	$('nav li .nav-link').on("click", function(){
		$('.navbar-toggler').removeClass('menu_open');
		$('.navbar-collapse').removeClass('toggle_open');
	});

	// feature_cards
	$(".feature_cards").slick({
		dots: false,
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
		{
			breakpoint: 1199,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 1,
				autoplay: true,
				easing: 'swing', 
				speed: 1000
			}
		}
		]
	});

	// counter
	$('.Single').each(function () {
		var $this = $(this);
		jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
			duration: 1000,
			easing: 'swing',
			step: function () {
				$this.text(Math.ceil(this.Counter));
			}
		});
	});

	// images
	$('.grid').isotope({
		itemSelector: '.grid-item',
	});

	$('#myBtnContainer .btn').click(function () {
		$('#myBtnContainer .btn').removeClass('active_filter');
		$(this).addClass('active_filter');
		var filterValue = $(this).attr('data-filter');
		$('.grid').isotope({filter: filterValue});
	});

	// Progress bar Animation JS
	$('.progress-bar').waypoint(function() {
		$('.progress-bar').css({
			animation: "animate-positive 2s",
			opacity: "1"
		});
	}, { offset: '100%' });

	$('.progress_count').counterUp({
		delay: 5
	});

	// bottom to top
	var btn = $('.topbtn');

	$(window).scroll(function() {
		if ($(window).scrollTop() > 300) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});

	btn.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, '300');
	});

	// Footer Sticky JS
	var footerheight = $('.footer_section').height();
	$(window).on("load resize", function(){
		var screen = $(window).width();
		if(screen > 767){
			$('.contact_form_section').css("margin-bottom",footerheight);
		}
		else{
			$('.contact_form_section').css("margin-bottom","0");
		}
	});

	// aos
	AOS.init();
});

// Typed.JS
var typed = new Typed('.banner_text_inner h5', {
	strings: ["Product Manager.", "Project Manager."],
	typeSpeed: 30,
	loop: true,
	loopCount: Infinity
});