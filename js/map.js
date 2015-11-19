// var map;
// $(document).ready(function (){
//   console.log("document loaded ");
// });


var map;
function initMap() {
   var myLatLng = {lat: 35.940902, lng: -78};
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 35.5000, lng: -80.0000},
    zoom: 6,
    mapTypeId: google.maps.MapTypeId.HYBRID

  });
}
