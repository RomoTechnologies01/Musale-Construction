var mySwiper = new Swiper('.oprc_slider', {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  speed: 1000,
});


if ($(window).innerWidth() > 769) {
  $(".contentWrapper").css("margin-top", height);
}
if ($(window).innerWidth() < 992) {
  var mobile_height = $(".parentHeaderWrapper").innerHeight();
  $(".contentWrapper").css("margin-top", mobile_height);
}



var product4Swipe = new Swiper('.slider_section_4', {
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  spaceBetween: 20,
  speed: 700,
  keyboardControl: true,
  onSlideChangeStart: function() {
      $(".slider_thumbs_4 .swiper-slide").removeClass('swiper-slide-active2');
      $(".slider_thumbs_4 .swiper-slide").each(function() {
          var tabIndex = $(this).attr("tabindex");
          if (tabIndex == product4Swipe.activeIndex) {
              $(this).addClass('swiper-slide-active2');
              thumbs4.slideTo(product4Swipe.activeIndex);
          }
      });
      if (product4Swipe.activeIndex === 0) {
          thumbs4.slideTo(0);
      }
  }
});
var thumbs4 = new Swiper('.slider_thumbs_4', {
  spaceBetween: 10,
  centeredSlides: false,
  slidesPerView: 'auto',
  touchRatio: 0.2,
  slideToClickedSlide: true,
  speed: 700,

});
product4Swipe.params.control = thumbs4;
thumbs4.params.control = product4Swipe;

$(".slider_thumbs_4 .swiper-slide").click(function(e) {
  product4Swipe.slideTo($(this).attr("tabindex"));
});


var product3Swipe = new Swiper('.slider_section_3', {
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  spaceBetween: 20,
  speed: 700,
  keyboardControl: true,
  onSlideChangeStart: function() {
      $(".slider_thumbs_3 .swiper-slide").removeClass('swiper-slide-active2');
      $(".slider_thumbs_3 .swiper-slide").each(function() {
          var tabIndex = $(this).attr("tabindex");
          if (tabIndex == product3Swipe.activeIndex) {
              $(this).addClass('swiper-slide-active2');
              thumbs3.slideTo(product3Swipe.activeIndex);
          }
      });
      if (product3Swipe.activeIndex === 0) {
          thumbs3.slideTo(0);
      }
  }
});
var thumbs3 = new Swiper('.slider_thumbs_3', {
  spaceBetween: 10,
  centeredSlides: false,
  slidesPerView: 'auto',
  touchRatio: 0.2,
  slideToClickedSlide: true,
  speed: 700,

});
product3Swipe.params.control = thumbs3;
thumbs3.params.control = product3Swipe;

$(".slider_thumbs_3 .swiper-slide").click(function(e) {
  product3Swipe.slideTo($(this).attr("tabindex"));
});

var product2Swipe = new Swiper('.slider_section_2', {
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  spaceBetween: 20,
  speed: 700,
  keyboardControl: true,
  onSlideChangeStart: function() {
      $(".slider_thumbs_2 .swiper-slide").removeClass('swiper-slide-active2');
      $(".slider_thumbs_2 .swiper-slide").each(function() {
          var tabIndex = $(this).attr("tabindex");
          if (tabIndex == product2Swipe.activeIndex) {
              $(this).addClass('swiper-slide-active2');
              thumbs2.slideTo(product2Swipe.activeIndex);
          }
      });
      if (product2Swipe.activeIndex === 0) {
          thumbs2.slideTo(0);
      }
  }
});
var thumbs2 = new Swiper('.slider_thumbs_2', {
  spaceBetween: 10,
  centeredSlides: false,
  slidesPerView: 'auto',
  touchRatio: 0.2,
  slideToClickedSlide: true,
  speed: 700,

});
product2Swipe.params.control = thumbs2;
thumbs2.params.control = product2Swipe;

$(".slider_thumbs_2 .swiper-slide").click(function(e) {
  product2Swipe.slideTo($(this).attr("tabindex"));
});

var product1Swipe = new Swiper('.slider_section_1', {
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  spaceBetween: 20,
  speed: 700,
  keyboardControl: true,
  onSlideChangeStart: function() {
      $(".slider_thumbs_1 .swiper-slide").removeClass('swiper-slide-active2');
      $(".slider_thumbs_1 .swiper-slide").each(function() {
          var tabIndex = $(this).attr("tabindex");
          if (tabIndex == product1Swipe.activeIndex) {
              $(this).addClass('swiper-slide-active2');
              thumbs1.slideTo(product1Swipe.activeIndex);
          }
      });
      if (product1Swipe.activeIndex === 0) {
          thumbs1.slideTo(0);
      }
  }
});
var thumbs1 = new Swiper('.slider_thumbs_1', {
  spaceBetween: 10,
  centeredSlides: false,
  slidesPerView: 'auto',
  touchRatio: 0.2,
  slideToClickedSlide: true,
  speed: 700,

});
product1Swipe.params.control = thumbs1;
thumbs1.params.control = product1Swipe;

$(".slider_thumbs_1 .swiper-slide").click(function(e) {
  product1Swipe.slideTo($(this).attr("tabindex"));
});

$(".gallery-thumbs .swiper-slide").each(function() {
  var tabIndex = $(this).attr("tabindex");
  if (tabIndex == 0) {
      $(this).addClass('swiper-slide-active2');
  }
});