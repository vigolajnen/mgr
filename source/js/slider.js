"use strict";

// слайдеры на главной
$(document).ready(function() {
  if (window.outerWidth < 992) {
    $("#slider-main-goods").slick({
      dots: true,
      arrow: false,
      centerPadding: "40px",
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

  window.addEventListener("resize", function() {
    if (window.outerWidth < 992) {
      $("#slider-main-goods").slick({
        dots: true,
        arrow: false,
        centerPadding: "40px",
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      });
    }
  });
});


$("#js-slider-project").slick({
  dots: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

 $(".slider__for").slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   asNavFor: ".slider__nav"
 });
 $(".slider__nav").slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   asNavFor: ".slider__for",
   dots: false,
   arrow: true,
   centerMode: true,
   focusOnSelect: true
 });
