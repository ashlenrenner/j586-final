$(document).ready(function () {
   //initialize swiper when document ready
   var mySwiper = new Swiper ('.swiper-container', {
     // Optional parameters
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        runCallbacksOnInit: true,

        loop: true,
     direction: 'horizontal'

   })

// tinyscrollbar

$("#scrollbar1").tinyscrollbar(
  touchLock = true

);
 });
