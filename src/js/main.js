window.onload = function () {
  // burger  mobile  menu
  $('.menu__burger').click(function() {
    $('.menu').toggleClass('active');
  });


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
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
          focusOnSelect: false,
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          focusOnSelect: false,
          centerMode: true
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          focusOnSelect: false,
          centerMode: true
        }
      },
    ]
  });


  // surf slider
  $('.surf__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider__map',
    prevArrow: '<img class="slider__arrows slider__arrows-left" src="src/img/arrow-left.svg" alt="arrow-left">',
    nextArrow: '<img class="slider__arrows slider__arrows-right" src="src/img/arrow-right.svg" alt="arrow-right">',
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });


  //////////////////  section travel   ////////////////////////
  $('.travel__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<img class="slider__arrows slider__arrows-left" src="src/img/arrow-left.svg" alt="arrow-left">',
    nextArrow: '<img class="slider__arrows slider__arrows-right" src="src/img/arrow-right.svg" alt="arrow-right">',
  });


  //////////////////  section sleep   ////////////////////////
  $('.sleep__slider, .shop__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<img class="slider__arrows slider__arrows-left" src="src/img/arrow-left.svg" alt="arrow-left">',
    nextArrow: '<img class="slider__arrows slider__arrows-right" src="src/img/arrow-right.svg" alt="arrow-right">',
  });

  // section sleep block company information
  $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
  $('.quantity').each(function() {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });

  let summ;

  function getSum() {
    let nights = $('.input__night').val() * $('.sleep__slider-info-price').attr('data-nights');
    console.log('nights: ' + nights);

    let guest = ($('.input__guest').val() - 1) * $('.sleep__slider-info-price').attr('data-guests');
    console.log('guest: ' + guest);

    summ = nights + guest;
    console.log('summ: ' + summ);

    $('.sleep__slider-info-price').html('$' + summ);
  }
  getSum();

   $('.quantity-button').click(function() {
    console.log('getSum: ' + getSum());
      getSum();
    });

//////////////////  section shop   ////////////////////////
$('.shop__slider-surfboard-box-circle').click(function() {
  $(this).toggleClass('active');
});
    
};