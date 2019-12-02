window.onload = function() {

  //////////////////  header  slider  ////////////////////////
  $('.header__slider').slick({
    infinite: true,
    prevArrow: '<img class="slider__arrows slider__arrows-left" src="src/img/arrow-left.svg" alt="arrow-left">',
    nextArrow: '<img class="slider__arrows slider__arrows-right" src="src/img/arrow-right.svg" alt="arrow-right">',
    asNavFor: '.dots'
  });

  //// header  slider  dots
  $('.dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider'
  });


//////////////////  section surf  ////////////////////////
//// slider map
   $('.slider__map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf__slider',
    focusOnSelect: true
  });


  // surf slider
  $('.surf__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider__map',
    prevArrow: '<img class="slider__arrows slider__arrows-left" src="src/img/arrow-left.svg" alt="arrow-left">',
    nextArrow: '<img class="slider__arrows slider__arrows-right" src="src/img/arrow-right.svg" alt="arrow-right">',
  });


  //////////////////  section travel   ////////////////////////
    $('.travel__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      // asNavFor: '.slider__map',
      prevArrow: '<img class="slider__arrows slider__arrows-left" src="src/img/arrow-left.svg" alt="arrow-left">',
      nextArrow: '<img class="slider__arrows slider__arrows-right" src="src/img/arrow-right.svg" alt="arrow-right">',
    });
};