function initMap() {
  console.log("map loaded");
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 35.5000, lng: -80.0000},
    zoom: 6,
    mapTypeControl: false,
    panControl: false,
    streetViewControl: false,
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
var contentString1 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h4 id="firstHeading" class="firstHeading">Bay Tree State Park</h4>'+
      '<div id="bodyContent">'+
      '<p>The most prominent feature of Bay Tree Lake State Park is a 609-acre Carolina bay lake.</p>'+
      '<a href="http://ncbirdingtrail.org/sites/2012/8/1/bay-tree-lake-state-park.html">'+
      'http://ncbirdingtrail.org/sites/2012/8/1/bay-tree-lake-state-park.html</a> </p>'+
      '</div>'+
      '</div>';

  var infowindow1 = new google.maps.InfoWindow({
    content: contentString1
  });
  var marker1 = new google.maps.Marker({
    position: {lat:34.675988, lng:-78.4268758},
    map: map,
    title: 'Bay Tree State Park'
  });
  google.maps.event.addListener(marker1, 'click', function(){
                   infowindow1.open(marker1.get('map'), marker1);
                   });


} //closes doc ready
