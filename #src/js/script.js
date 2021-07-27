@@include('jquery-3.6.0.min.js');
@@include('jquery.fancybox.min.js');
$(function () {
  @@include('slick.min.js');

  

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

  
  @@include('mixitup.js');
  var mixer = mixitup('.products__items-wrapper');
  var mixer = mixitup('.design__items-wrapper');

  $('.design__category-list', '.design__category-name').on('click', function(){
    $('.design__category-name').toggleClass('design__category-name--active')
  });
  
});