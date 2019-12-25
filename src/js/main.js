window.onload = function () {
/////////////////////  SECTION   HEADER  ////////////////////////////

  //////////////////  burger  mobile  menu  ////////////////////////
  $('.menu__burger').click(function() {
    $('.menu').toggleClass('active');
    $('.menu__burger-line:first-child').toggleClass('transform__line-top');
    $('.menu__burger-line').eq(1).toggleClass('line__hide');
    $('.menu__burger-line:last-child').toggleClass('transform__line-bottom');
  });

  //////////////////  header  menu  date  ////////////////////////
  let dateNumber = document.getElementById('header__day');
  let dateMonth = document.getElementById('header__month');
  let dateYear = document.getElementById('header__year');

  let dateNow = new Date();
  dateNumber.innerHTML = dateNow.getDate();
  dateMonth.innerHTML = dateNow.getMonth() + 1;
  dateYear.innerHTML = dateNow.getFullYear();


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


  /////////////////////  SECTION   SURF  ////////////////////////////
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
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          focusOnSelect: false,
          centerMode: false
        }
      },
    ]
  });

  
  // surf slider
  $('.surf__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
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
          slidesToShow: 1,
          centerMode: true
        }
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      },
    ]
  });




  /////////////////////  SECTION   TRAVEL  ////////////////////////////
  $('.travel__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<img class="slider__arrows slider__arrows-left" src="src/img/arrow-left.svg" alt="arrow-left">',
    nextArrow: '<img class="slider__arrows slider__arrows-right" src="src/img/arrow-right.svg" alt="arrow-right">',
  });




  /////////////////////  SECTION   SLEEP  ////////////////////////////
  $('.sleep__slider, .shop__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<img class="slider__arrows slider__arrows-left" src="src/img/arrow-left.svg" alt="arrow-left">',
    nextArrow: '<img class="slider__arrows slider__arrows-right" src="src/img/arrow-right.svg" alt="arrow-right">',
  });

  // section sleep block company information
  $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
  $('.quantity').each(function() {
    let spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max'),
      newVal;

    btnUp.click(function() {
      let oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        newVal = oldValue;
      } else {
        newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      let oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        newVal = oldValue;
      } else {
        newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

function getSum() {
  let nights = $('.input__night').val() * $('.sleep__slider-info-price').attr('data-nights');

  let guest = ($('.input__guest').val() - 1) * $('.sleep__slider-info-price').attr('data-guests');
  let summ = nights + guest;
  $('.sleep__slider-info-price').html('$' + summ);
}
getSum();

   $('.quantity-button').click(getSum);


  

/////////////////////  SECTION   SHOP  ////////////////////////////
$('.shop__slider-surfboard-box-circle').click(function() {
  $(this).toggleClass('active');
});


/////////////////////  SCROLL ANIMATION TO ALL SECTION  ////////////////////////////
$('a[href^="#"]').on('click', function (event) {
  event.preventDefault();

  let scroll = $(this).attr("href"), // target link 
    scrollDown = $(scroll).offset().top; // distance to target link
  console.log(scrollDown);

  $('html, body').animate({
    scrollTop: scrollDown
  }, 1700);
});


//////////////////  PLUGIN  WOW.JS   ////////////////////////
new WOW().init();
};