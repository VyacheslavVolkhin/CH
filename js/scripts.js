$(document).ready(function(){

	//phone masked
	$('input[type="tel"]').mask("+7 (999) 999-99-99",{placeholder:"+7 (___) ___-__-__"});
	$('input[type="tel"]').on('click', function() {
		$(this).setCursorPosition(4);
	})
	$.fn.setCursorPosition = function(pos) {
	  this.each(function(index, elem) {
	    if (elem.setSelectionRange) {
	      elem.setSelectionRange(pos, pos);
	    } else if (elem.createTextRange) {
	      var range = elem.createTextRange();
	      range.collapse(true);
	      range.moveEnd('character', pos);
	      range.moveStart('character', pos);
	      range.select();
	    }
	  });
	  return this;
	};
    
    
    //text hidden
    $('.text-hidden-toggle').on('click', function() {
        $(this).parent().find('.text-hidden').css('display', 'inline');
        $(this).hide();
        return false;
    })


    //main-reviews-box
    if (!!$('.main-reviews-box').offset()) {
        $('.main-reviews-box .slider').slick({
            dots: false,
            slidesToShow: 2,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            rows: 1,
            swipeToSlide: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        dots: true,
                        prevArrow: false,
                        nextArrow: false,
                    }
                },
            ]
        });
    }

    //main-results-box
    if (!!$('.main-results-box').offset()) {
        $('.main-results-box .slider').slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: false,
            infinite: false,
            adaptiveHeight: false,
            rows: 1,
            swipeToSlide: true,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        dots: true,
                        adaptiveHeight: true,
                    }
                },
            ]
        });
    }

	
});


