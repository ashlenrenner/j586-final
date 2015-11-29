$(document).ready(function () {
   //initialize swiper when document ready
   var mySwiper = new Swiper ('.swiper-container', {
     // Optional parameters
        initialSlide: 0,
        slidesPerView: 1,
        followFinger: true,
        loopAdditionalSlides: 0,
        direction: 'horizontal',
        loop: true


   })

// tinyscrollbar

$("#scrollbar1").tinyscrollbar(
  touchLock = true

);

//navbar fade
window.addEventListener("scroll", function() {
    if (window.scrollY > 500) {
        $('.navbar').fadeOut();
    }
    else {
        $('.navbar').fadeIn();
    }
},false);

 });
 
