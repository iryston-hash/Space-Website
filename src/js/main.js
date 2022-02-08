$(function(){
    $('.slider__box').slick({
        prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/icons/la.svg" alt="left slider arrow" >',
        nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/icons/ra.svg" alt="right slider arrow" >'
    }); 
    
    $(window).scroll(function(){
        if ($(this).scrollTop() > 1600) {
          $('.pageup').fadeIn();
        } else {
          $('.pageup').fadeOut();
        }
    }); 
    $('.menu-btn').on('click', function(){
		$('.menu__list').toggleClass('active');
    });
});