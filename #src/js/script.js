$(function () {

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
    // appendDots:$('.blog__slider-dots')
  });

  // $('.menu__btn, .menu__list').on('click', function(){
  //   $('.header__top-inner').toggleClass('header__top-inner--active')
  // })
  
  
  // var mixer = mixitup('.gallery__content');
  
});