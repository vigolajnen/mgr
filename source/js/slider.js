// var mySwiper = new Swiper('.swiper-container', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// })

// var swiper = new Swiper('.swiper-container', {
//   slidesPerView: 10,
//   centeredSlides: false,
//   spaceBetween: 30,
//   grabCursor: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   breakpoints: {
//     // when window width is <= 320px
//     320: {
//       slidesPerView: 2,
//       spaceBetween: 10
//     },
//     // when window width is <= 480px
//     480: {
//       slidesPerView: 3,
//       spaceBetween: 20
//     },
//     // when window width is <= 640px
//     768: {
//       slidesPerView: 4,
//       spaceBetween: 30
//     }
//   }
// });

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

// $("#js-slider-project").slick({
//   responsive: [
//     {
//       breakpoint: 99999,
//       settings: "unslick"
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         dots: true,
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         dots: true,
//         arrow: false,
//         centerPadding: "40px",
//         infinite: true,
//         slidesToShow: 2,
//         slidesToScroll: 1
//       }
//     }
//   ]
// });
