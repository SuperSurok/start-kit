$(document).ready(function(){

  // carousel
  $('.tracks__list').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  arrows: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
  $('.about-foto').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
  $('.carousel').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });

  // accordeon header xs
  $('.kebab').click(function(e){
  e.preventDefault();
  $('.header__nav-xs').slideToggle(300);
  });

  // accordeon price
  $('.price__list-item-age').click(function(e){
    e.preventDefault();
    $('.grid-age').slideToggle(300);
    $( ".price__list-item-age").toggleClass('active');
  });

  $('.price__list-item-place').click(function(e){
    e.preventDefault();
    $('.grid-place').slideToggle(300);
    $( ".price__list-item-place").toggleClass('active');
  });

  $('.price__list-item-time').click(function(e){
    e.preventDefault();
    $('.grid-time').slideToggle(300);
    $( ".price__list-item-time").toggleClass('active');
  })

  // modal window
  $('.about-foto__item').click(function(){
    if($(window).width() > 768){
      $('.overlay').show();
      $('body').css('overflow-y', 'hidden')
      $(this).find('.about-foto__img').clone().appendTo('.overlay__wrapper');
    }
  });
  $('.overlay__bg').click(function(){
    $(this).closest('.overlay').find('.overlay__wrapper img').remove();
    $('body').css('overflow-y', 'auto');
    $('.overlay').hide();
  });
  $('.overlay__wrapper').click(function(){
    $(this).closest('.overlay').find('.overlay__wrapper img').remove();
    $('body').css('overflow-y', 'auto');
    $('.overlay').hide();
  });
// smooth anchor scroll
  $('a[href^="#"]').click(function() {
    $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top + "px"
    }, {
        duration: 3000,
        easing: 'swing'
    });
    return false;
  })

});
