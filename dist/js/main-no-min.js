;
(function ($) {
	$.fn.foxSlider = function () {
		var sliderElement = $(this).addClass('fox-slider');
		var sliderItems = sliderElement.children().addClass('slider-item');

		var sliderEl = $('<div class="carousel-container"></div>');
		var carouselWr = $('<div class="carousel-wrap"></div>');
		var carouselItems = $('<div class="carousel-items"></div>');
		var nextButton = '<a href="#" class="btn-next"></a>';
		var nextButtonWrap = '<div class="btn-wrap-next">' + nextButton + '</div>';
		var prevButton = '<a href="#" class="btn-prev"></a>';
		var prevButtonWrap = '<div class="btn-wrap-prev">' + prevButton + '</div>';

		var resultHtml = nextButtonWrap + prevButtonWrap;

		sliderEl.append(resultHtml);
		carouselItems.append(sliderItems);
		carouselWr.append(carouselItems);

		sliderItems.each(function () {
			$(this).wrap('<div class="carousel-img-block"></div>');
		});


		sliderEl.append(carouselWr);
		var preview = $('<div class="preview"></div>');
		var mainImage = sliderItems.first().clone();
		preview.append(mainImage);
		sliderItems.first().parent().addClass('active');

		sliderElement.append(preview, sliderEl);


		//Обработка клика на стрелку вправо
		$(document).on('click', ".btn-wrap-next", function () {
			var carusel = $(this).parents('.carousel-container');
			right_carusel(carusel);
			return false;
		});

		//Обработка клика на стрелку влево
		$(document).on('click', ".btn-wrap-prev", function () {
			var carusel = $(this).parents('.carousel-container');
			left_carusel(carusel);
			return false;
		});

		// сдвиг в лево
		function left_carusel(carusel) {

			$(carusel).find(".carousel-items .carousel-img-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items"));
			$(carusel).find(".carousel-items .carousel-img-block").eq(-1).remove();

		}
		//сдвиг в право
		function right_carusel(carusel) {

			$(carusel).find(".carousel-items .carousel-img-block").eq(0).clone().appendTo($(carusel).find(".carousel-items"));
			$(carusel).find(".carousel-items .carousel-img-block").eq(0).remove();

		}
		// Активные слайды
		$(document).on('click', ".carousel-img-block", function () {
			if ($(this).hasClass('active')) return;
			$('.carousel-img-block.active').removeClass('active');
			$(this).addClass('active');
			preview.empty().append($(this).children('.slider-item').clone());
		});

	}
}(jQuery));