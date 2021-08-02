@@include('jquery-3.6.0.min.js');
@@include('jquery.fancybox.min.js');
@@include('ion.rangeSlider.min.js');
@@include('jquery.rateyo.min.js');
@@include('slick.min.js');
@@include('mixitup.js');

$(function () {

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    prettify_enabled: true,
    prettify_separator: ".",
    step: 0.01,
    onStart: function (data){
      $('.filter-price__from').text(data.from_pretty);
      $('.filter-price__to').text(data.to_pretty);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from_pretty);
      $('.filter-price__to').text(data.to_pretty);
  },
  });


  $(".recent__stars").rateYo({
    starWidth: "12px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "8px",
    readOnly: true
  });

  $(".products-2__stars").rateYo({
    starWidth: "20px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "12px",
    readOnly: true
  });










  //Плавный скролл
  // $(".menu a, .footer__logo-link").on("click", function (event) {
  //   //отменяем стандартную обработку нажатия по ссылке
  //   event.preventDefault();
  //   //забираем идентификатор бока с атрибута href
  //   var id = $(this).attr('href'),
  //     //узнаем высоту от начала страницы до блока на который ссылается якорь
  //     top = $(id).offset().top;
  //   //анимируем переход на расстояние - top за 1500 мс
  //   $('body,html').animate({ scrollTop: top }, 1500);
  // });

  $('.intro__slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 300,
    fade: true,
    // appendDots:$('.blog__slider-dots')
  });

  // $('.menu__btn, .menu__list').on('click', function(){
  //   $('.header__top-inner').toggleClass('header__top-inner--active')
  // })

  // Pagination
  $('.pagination__link').on('click', function(){
    $('.pagination__link').toggleClass('pagination__link--active')
  })

  
  
  var mixer = mixitup('.products__items-wrapper');
  var mixer = mixitup('.design__items-wrapper');

  $('.design__category-list', '.design__category-name').on('click', function(){
    $('.design__category-name').toggleClass('design__category-name--active')
  });
  
});