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

// "use strict";

// // слайдеры на главной
// $(document).ready(function() {


//   if (window.outerWidth < 800) {
//     $("#slider-main-goods").slick({
//       dots: true,
//       arrow: false,
//       centerPadding: "40px",
//       infinite: true,
//       slidesToShow: 4,
//       slidesToScroll: 1
//     });
//   }

//   window.addEventListener("resize", function() {
//     if (window.outerWidth < 800) {
//       $("#slider-main-goods").slick({
//         dots: true,
//         arrow: false,
//         centerPadding: "40px",
//         infinite: true,
//         slidesToShow: 2,
//         slidesToScroll: 1
//       });
//     }
//   });
// });