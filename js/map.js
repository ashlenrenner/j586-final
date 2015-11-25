function initMap() {
  console.log("map loaded");
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 35.5000, lng: -80.0000},
    zoom: 6,
    mapTypeId: google.maps.MapTypeId.HYBRID
  });

// ajax call for the map
// var park = [];
// var lat = [];
// var long = [];
// var title = [];
//
// $(document).ready(function() {
//
//   $.ajax({
//       type: 'GET',
//       url: 'parks.xml',
//       dataType: 'xml',
//       success: parseData
//     });
//     function parseData(xml){
//
// console.log(xml);
//
//   $(xml).find("row").each(function(){
//     var $row = $(this);
//     title.push(parseFloat($row.find("title").text()));
//     lat.push(parseInt($row.find("lat").text()));
//     long.push(parseInt($row.find("long").text()));
//   });
//
//   buildMarker();
// } //closes parseData function
//
// function buildMarker(xml){

  var marker = new google.maps.Marker({
    position: {lat:35.752800, lng:-82.273700},
    map: map,
    title: 'Mount Mitchell State Park'
  });
  var marker = new google.maps.Marker({
    position: {lat:34.675988, lng:-78.426876},
    map: map,
    title: 'Bay Tree State Park'
  });
// }
// })
}
