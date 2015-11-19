function initMap() {
  console.log("map loaded");
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 35.5000, lng: -80.0000},
    zoom: 6,
    mapTypeId: google.maps.MapTypeId.HYBRID
  });

// ajax call for the map
var park = [];
var lat = [];
var long = [];
var title = [];

$(document).ready(function() {

  $.ajax({
      type: 'GET',
      url: 'parks.xml',
      dataType: 'xml',
      success: parseData
    });
    function parseData(xml){

  $(xml).find("park").each(function(){
    var $park = $(this);
    title.push(parseInt($park.find("title").text()));
    lat.push(parseInt($park.find("lat").text()));
    long.push(parseInt($park.find("long").text()));

  })

  buildMarker();
} //closes parseData function

function buildMarker(xml){
  var marker = new google.maps.Marker({
    position: {lat, long},
    map: map,
    title: title
  });
}
})
}
