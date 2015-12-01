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


}); //closes new swiper
// var button1 = [];
//
// if (data-slide-index == 0) {
//    $('#button1').css('background-color': #CBDFC0)})
//    else {
//   $('#button1').css('background-color': '#83AC8E')
// }

}); //closes doc ready



function activateButton(){
  $('a[0]').on('click', function () {
    swiper.slideTo($(this).attr('0'));
  console.log("button activated");
  });
} //closes activateButton

// function activateButton () {
//     var index = document.getElementByClassName("data-slide-index");
//     var button1 = document.getElementById("button1");
//
//
//     if (button1.clicked == true) {
//         index.data-slide-index = "0";};    // } else if (no.clicked == true) {
//     //     box.style.backgroundColor = "green";
//     // } else {
//     //     box.style.backgroundColor = "purple";
//     // };
// };
//
// activateButton ();
// //buttons
$(document).ready(function()
{
    $("#scrollbar1").tinyscrollbar();
});
