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

  var contentString2 = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h4 id="firstHeading" class="firstHeading">Carolina Beach State Park</h4>'+
        '<div id="bodyContent">'+
        '<p>With a marina providing access to some of North Carolinas best fishing spots, a secluded camping area beneath towering trees, and miles of hiking trails that traverse a variety of distinct habitats,its no wonder Carolina Beach State Park is a popular coastal attraction.</p>'+
        '<a href="http://www.ncparks.gov/carolina-beach-state-park">'+
        'http://www.ncparks.gov/carolina-beach-state-park</a> </p>'+
        '</div>'+
        '</div>';

    var infowindow2 = new google.maps.InfoWindow({
      content: contentString2
    });
    var marker2 = new google.maps.Marker({
      position: {lat:34.045936, lng:-77.9138889},
      map: map,
      title: 'Carolina Beach State Park'
    });
    google.maps.event.addListener(marker2, 'click', function(){
         infowindow2.open(marker2.get('map'), marker2);
    });

    var contentString3 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading">Carvers Creek State Park</h4>'+
          '<div id="bodyContent">'+
          '<p>A mile and 3/4th of trails reveals a 100-acre millpond, fed in turn by one of the state’s westernmost cypress streams and wetlands.</p>'+
          '<a href="http://www.ncparks.gov/carvers-creek-state-park">'+
          'http://www.ncparks.gov/carvers-creek-state-park</a> </p>'+
          '</div>'+
          '</div>';
    var infowindow3 = new google.maps.InfoWindow({
      content: contentString3
    });
    var marker3 = new google.maps.Marker({
      position: {lat:35.208453, lng:-78.9752726},
      map: map,
      title: 'Carvers Creek State Park'
    });
    google.maps.event.addListener(marker3, 'click', function(){
         infowindow3.open(marker3.get('map'), marker3);
    });
    var contentString4 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading">Chimney Rock State Park</h4>'+
          '<div id="bodyContent">'+
          '<p>Take a deep breath of refreshing mountain air, become invigorated by our hiking trails, and let your cares fade away in the cool mist of Hickory Nut Falls. </p>'+
          '<a href="http://www.chimneyrockpark.com/">'+
          'http://www.chimneyrockpark.com/</a> </p>'+
          '</div>'+
          '</div>';
    var infowindow4 = new google.maps.InfoWindow({
      content: contentString4
    });
    var marker4 = new google.maps.Marker({
      position: {lat:35.4326184, lng:-82.2503914},
      map: map,
      title: 'Chimney Rock State Park'
    });
    google.maps.event.addListener(marker4, 'click', function(){
         infowindow4.open(marker4.get('map'), marker4);
    });
    var contentString5 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading">Cliffs of the Neuse State Park</h4>'+
          '<div id="bodyContent">'+
          '<p>Five hiking trails explore the riverside habitats and their mature forests and lead to some quiet fishing spots along the waterway. </p>'+
          '<a href="http://www.chimneyrockpark.com/">'+
          'http://www.chimneyrockpark.com/</a> </p>'+
          '</div>'+
          '</div>';
    var infowindow5 = new google.maps.InfoWindow({
      content: contentString5
    });
    var marker5 = new google.maps.Marker({
      position: {lat:35.2377435, lng:-77.8897357},
      map: map,
      title: 'Cliffs of the Neuse State Park'
    });
    google.maps.event.addListener(marker5, 'click', function(){
         infowindow5.open(marker5.get('map'), marker5);
    });
    var contentString6 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading">Crowders Mountain State Park</h4>'+
          '<div id="bodyContent">'+
          '<p>Companion peaks at Crowders Mountain State Park—The Pinnacle and Crowders Mountain—offer challenging hikes, towering cliffs and 25-mile views of the surrounding piedmont. </p>'+
          '<a href="http://www.ncparks.gov/crowders-mountain-state-park">'+
          'http://www.ncparks.gov/crowders-mountain-state-park</a> </p>'+
          '</div>'+
          '</div>';
    var infowindow6 = new google.maps.InfoWindow({
      content: contentString6
    });
    var marker6 = new google.maps.Marker({
      position: {lat:35.213504, lng:-81.2931333},
      map: map,
      title: 'Crowders Mountain State Park'
    });
    google.maps.event.addListener(marker6, 'click', function(){
         infowindow6.open(marker6.get('map'), marker6);
    });
    var contentString7 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading">Dismal Swamp State Park</h4>'+
          '<div id="bodyContent">'+
          '<p>Dismal Swamp State Park allows a unique wilderness experience in a landscape that has been witness to American Indian hunting parties, exploration by George Washington and the story of the Underground Railroad.  </p>'+
          '<a href="http://www.ncparks.gov/dismal-swamp-state-park">'+
          'http://www.ncparks.gov/dismal-swamp-state-park</a> </p>'+
          '</div>'+
          '</div>';
    var infowindow7 = new google.maps.InfoWindow({
      content: contentString7
    });
    var marker7 = new google.maps.Marker({
      position: {lat:36.513507, lng:-76.4009067},
      map: map,
      title: 'Dismal Swamp State Park'
    });
    google.maps.event.addListener(marker7, 'click', function(){
         infowindow7.open(marker7.get('map'), marker7);
    });
    var contentString8 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading">Elk Knob State Park</h4>'+
          '<div id="bodyContent">'+
          '<p>Elk Knob State Park features one of the highest peaks in North Carolina’s high country at 5,520 feet and one of the parks system’s finest trails to the spectacular views from the summit.  </p>'+
          '<a href="http://www.ncparks.gov/elk-knob-state-park">'+
          'http://www.ncparks.gov/elk-knob-state-park</a> </p>'+
          '</div>'+
          '</div>';
    var infowindow8 = new google.maps.InfoWindow({
      content: contentString8
    });
    var marker8 = new google.maps.Marker({
      position: {lat:36.333477, lng:-81.696373},
      map: map,
      title: 'Elk Knob State Park'
    });
    google.maps.event.addListener(marker8, 'click', function(){
         infowindow8.open(marker8.get('map'), marker8);
    });
    var contentString9 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading">Eno River State Park</h4>'+
          '<div id="bodyContent">'+
          '<p>Eno River State Park—like its namesake—flows near urban areas of Durham and Orange counties with five scattered access areas, each just minutes from town amenities. </p>'+
          '<a href="http://www.ncparks.gov/eno-river-state-park">'+
          'http://www.ncparks.gov/eno-river-state-park</a> </p>'+
          '</div>'+
          '</div>';
    var infowindow9 = new google.maps.InfoWindow({
      content: contentString9
    });
    var marker9 = new google.maps.Marker({
      position: {lat:36.0781126, lng:-79.0068953},
      map: map,
      title: 'Eno River State Park'
    });
    google.maps.event.addListener(marker9, 'click', function(){
         infowindow9.open(marker9.get('map'), marker9);
    });
    var contentString10 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading">Fort Macon State Park</h4>'+
          '<div id="bodyContent">'+
          '<p>Fort Macon State Park has multiple personalities as the site of a perfectly restored Civil War-era fort, a museum-quality coastal education center and an unspoiled shoreline for swimming, surf fishing and beachcombing.  </p>'+
          '<a href="http://www.ncparks.gov/fort-macon-state-park">'+
          'http://www.ncparks.gov/fort-macon-state-park</a> </p>'+
          '</div>'+
          '</div>';
    var infowindow10 = new google.maps.InfoWindow({
      content: contentString10
    });
    var marker10 = new google.maps.Marker({
      position: {lat:34.6942856, lng:-76.6782413},
      map: map,
      title: 'Fort Macon State Park'
    });
    google.maps.event.addListener(marker10, 'click', function(){
         infowindow10.open(marker10.get('map'), marker10);
    });
    var contentString11 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading">Goose Creek State Park</h4>'+
          '<div id="bodyContent">'+
          '<p>The eight miles of trails at Goose Creek State Park lead visitors through a broad range of coastal experiences—live oaks draped in Spanish moss, wetlands along the Pamlico Sound and a cypress swamp viewed from an extensive boardwalk.   </p>'+
          '<a href="http://www.ncparks.gov/goose-creek-state-park">'+
          'http://www.ncparks.gov/goose-creek-state-park</a> </p>'+
          '</div>'+
          '</div>';
    var infowindow11 = new google.maps.InfoWindow({
      content: contentString11
    });
    var marker11 = new google.maps.Marker({
      position: {lat:35.4800998, lng:-76.8985716},
      map: map,
      title: 'Goose Creek State Park'
    });
    google.maps.event.addListener(marker11, 'click', function(){
         infowindow11.open(marker11.get('map'), marker11);
    });
    var contentString12 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading">Gorges State Park</h4>'+
          '<div id="bodyContent">'+
          '<p>Gorges State Park is set in the midst of plunging waterfalls, rugged river gorges, sheer rock walls and a high concentration of rare species. </p>'+
          '<a href="http://www.ncparks.gov/gorges-state-park">'+
          'http://www.ncparks.gov/gorges-state-park</a> </p>'+
          '</div>'+
          '</div>';
    var infowindow12 = new google.maps.InfoWindow({
      content: contentString12
    });
    var marker12 = new google.maps.Marker({
      position: {lat:35.0902399, lng:-82.9125036},
      map: map,
      title: 'Gorges State Park'
    });
    google.maps.event.addListener(marker12, 'click', function(){
         infowindow12.open(marker12.get('map'), marker12);
    });
    var contentString13 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading">Grandfather Mountain State Park</h4>'+
          '<div id="bodyContent">'+
          '<p>Grandfather Mountain has been an icon in North Carolina’s landscape for generations, offering stunning scenery and unmatched ecological diversity. This state park opens the mountain’s 2,456-acre backcountry to spectacular hiking and backpacking. </p>'+
          '<a href="http://www.ncparks.gov/grandfather-mountain-state-park">'+
          'http://www.ncparks.gov/grandfather-mountain-state-park</a> </p>'+
          '</div>'+
          '</div>';
    var infowindow13 = new google.maps.InfoWindow({
      content: contentString13
    });
    var marker13 = new google.maps.Marker({
      position: {lat:36.1195573, lng:-81.8019866},
      map: map,
      title: 'Grandfather Mountain State Park'
    });
    google.maps.event.addListener(marker13, 'click', function(){
         infowindow13.open(marker13.get('map'), marker13);
    });
    var contentString13 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading">Hammocks Beach State Park</h4>'+
          '<div id="bodyContent">'+
          '<p>A crown jewel of the North Carolina coast and Hammocks Beach State Park is Bear Island—a three-mile-long, undeveloped barrier island accessible by the park’s passenger ferry, private ferry or by paddling a canoe or kayak.  </p>'+
          '<a href="http://www.ncparks.gov/hammocks-beach-state-park">'+
          'http://www.ncparks.gov/hammocks-beach-state-park</a> </p>'+
          '</div>'+
          '</div>';
    var infowindow13 = new google.maps.InfoWindow({
      content: contentString13
    });
    var marker13 = new google.maps.Marker({
      position: {lat:34.6376426, lng:-77.1341351},
      map: map,
      title: 'Hammocks Beach State Park'
    });
    google.maps.event.addListener(marker13, 'click', function(){
         infowindow13.open(marker13.get('map'), marker13);
    });
    var contentString14 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading">Hanging Rock State Park</h4>'+
          '<div id="bodyContent">'+
          '<p>Since its creation as a 1930s Civilian Conservation Corps project, Hanging Rock State Park has offered the best of a traditional outdoor experience with 73-site campground, picnic grounds, stocked lake for swimming and canoe rentals and more than 20 miles of hiking trails that climb onto spectacular views and weave alongside clear streams and waterfalls.   </p>'+
          '<a href="http://www.ncparks.gov/hanging-rock-state-park">'+
          'http://www.ncparks.gov/hanging-rock-state-park</a> </p>'+
          '</div>'+
          '</div>';
    var infowindow14 = new google.maps.InfoWindow({
      content: contentString14
    });
    var marker14 = new google.maps.Marker({
      position: {lat:36.4129643, lng:-80.2523876},
      map: map,
      title: 'Hanging Rock State Park'
    });
    google.maps.event.addListener(marker14, 'click', function(){
         infowindow14.open(marker14.get('map'), marker14);
    });
    var contentString15 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading">Jockeys Ridge State Park</h4>'+
          '<div id="bodyContent">'+
          '<p>Jockeys Ridge is the tallest natural sand dune system in the Eastern United States.  </p>'+
          '<a href="http://www.jockeysridgestatepark.com/">'+
          'http://www.jockeysridgestatepark.com/</a> </p>'+
          '</div>'+
          '</div>';
    var infowindow15 = new google.maps.InfoWindow({
      content: contentString15
    });
    var marker15 = new google.maps.Marker({
      position: {lat:35.9624046, lng:-75.6339017},
      map: map,
      title: 'Jockeys Ridge State Park'
    });
    google.maps.event.addListener(marker15, 'click', function(){
         infowindow15.open(marker15.get('map'), marker15);
    });
    var contentString16 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading">Jones Lake State Park</h4>'+
          '<div id="bodyContent">'+
          '<p>Jones Lake State Park has long been a community destination for lazy picnics under the shade of tall pines and swimming in the lake’s shallow, warm waters.  </p>'+
          '<a href="http://www.ncparks.gov/jones-lake-state-park">'+
          'http://www.ncparks.gov/jones-lake-state-park</a> </p>'+
          '</div>'+
          '</div>';
    var infowindow16 = new google.maps.InfoWindow({
      content: contentString16
    });
    var marker16 = new google.maps.Marker({
      position: {lat:34.6832302, lng:-78.5963952},
      map: map,
      title: 'Jones Lake State Park'
    });
    google.maps.event.addListener(marker16, 'click', function(){
         infowindow16.open(marker16.get('map'), marker16);
    });
    var contentString17 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading">Lake James State Park</h4>'+
          '<div id="bodyContent">'+
          '<p>All the activities one might expect on a 6,812-acre reservoir are available at Lake James State Park, plus a few that might surprise.   </p>'+
          '<a href="http://www.ncparks.gov/lake-james-state-park">'+
          'http://www.ncparks.gov/lake-james-state-park</a> </p>'+
          '</div>'+
          '</div>';
    var infowindow17 = new google.maps.InfoWindow({
      content: contentString17
    });
    var marker17 = new google.maps.Marker({
      position: {lat:35.7281, lng:-81.9022},
      map: map,
      title: 'Lake James State Park'
    });
    google.maps.event.addListener(marker17, 'click', function(){
         infowindow17.open(marker17.get('map'), marker17);
    });
    var contentString18 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading">Lake Norman State Park</h4>'+
          '<div id="bodyContent">'+
          '<p>Lake Norman State Park, on the largest manmade lake in North Carolina, boasts one of the region’s more popular mountain biking network, offering 30.5 miles of single-track trail. </p>'+
          '<a href="http://www.ncparks.gov/lake-norman-state-park">'+
          'http://www.ncparks.gov/lake-norman-state-park</a> </p>'+
          '</div>'+
          '</div>';
    var infowindow18 = new google.maps.InfoWindow({
      content: contentString18
    });
    var marker18 = new google.maps.Marker({
      position: {lat:35.6728098, lng:-80.9333422},
      map: map,
      title: 'Lake Norman State Park'
    });
    google.maps.event.addListener(marker18, 'click', function(){
         infowindow18.open(marker18.get('map'), marker18);
    });
    var contentString19 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading">Lake Waccamaw State Park</h4>'+
          '<div id="bodyContent">'+
          '<p>A visit to Lake Waccamaw State Park unveils one of the most unique bodies of water in the world and one of the greatest geological mysteries—the phenomenon of Carolina Bays with species of aquatic life found nowhere else.  </p>'+
          '<a href="http://www.ncparks.gov/lake-waccamaw-state-park">'+
          'http://www.ncparks.gov/lake-waccamaw-state-park</a> </p>'+
          '</div>'+
          '</div>';
    var infowindow19 = new google.maps.InfoWindow({
      content: contentString19
    });
    var marker19 = new google.maps.Marker({
      position: {lat:34.254181, lng:-78.508881},
      map: map,
      title: 'Lake Waccamaw State Park'
    });
    google.maps.event.addListener(marker19, 'click', function(){
         infowindow19.open(marker19.get('map'), marker19);
    });
    var contentString20 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading">Lumber River State Park</h4>'+
          '<div id="bodyContent">'+
          '<p>On a national wild and scenic river, Lumber River State Park is all about eastern North Carolina paddling, fishing and exquisite scenery.  </p>'+
          '<a href="http://www.ncparks.gov/lumber-river-state-park">'+
          'http://www.ncparks.gov/lumber-river-state-park</a> </p>'+
          '</div>'+
          '</div>';
    var infowindow20 = new google.maps.InfoWindow({
      content: contentString20
    });
    var marker20 = new google.maps.Marker({
      position: {lat:34.3809669, lng:-78.9923658},
      map: map,
      title: 'Lumber River State Park'
    });
    google.maps.event.addListener(marker20, 'click', function(){
         infowindow20.open(marker20.get('map'), marker20);
    });
    var contentString21 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading">Mayo River State Park</h4>'+
          '<div id="bodyContent">'+
          '<p>Envisioned as a riverine park along the Mayo River corridor from Virginia to the Town of Mayodan, Mayo River State park is under development, but offers basic state park amenities on the 400-acre site of the former Mayo Park.  </p>'+
          '<a href="http://www.ncparks.gov/mayo-river-state-park">'+
          'http://www.ncparks.gov/mayo-river-state-park</a> </p>'+
          '</div>'+
          '</div>';
    var infowindow21 = new google.maps.InfoWindow({
      content: contentString21
    });
    var marker21 = new google.maps.Marker({
      position: {lat:36.4357258, lng:-79.9500477},
      map: map,
      title: 'Mayo River State Park'
    });
    google.maps.event.addListener(marker21, 'click', function(){
         infowindow21.open(marker21.get('map'), marker21);
    });
    var contentString22 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading">Medoc Mountain State Park</h4>'+
          '<div id="bodyContent">'+
          '<p>Serenity seems to pervade Medoc Mountain State Park, enhanced by gentle Fishing Creek and a scenic open meadow that spreads from the picnic grounds.  </p>'+
          '<a href="http://www.ncparks.gov/medoc-mountain-state-park">'+
          'http://www.ncparks.gov/medoc-mountain-state-park</a> </p>'+
          '</div>'+
          '</div>';
    var infowindow22 = new google.maps.InfoWindow({
      content: contentString22
    });
    var marker22 = new google.maps.Marker({
      position: {lat:36.2581132, lng:-77.879602},
      map: map,
      title: 'Medoc Mountain State Park'
    });
    google.maps.event.addListener(marker22, 'click', function(){
         infowindow22.open(marker22.get('map'), marker22);
    });
    var contentString23 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading">Morrow Mountain State Park</h4>'+
          '<div id="bodyContent">'+
          '<p>Choose an adventure at Morrow Mountain State Park, whether it’s hiking, camping, paddling, fishing, horseback riding, swimming or just taking in scenery on one of the highest points in the piedmont.  </p>'+
          '<a href="http://www.ncparks.gov/morrow-mountain-state-park">'+
          'http://www.ncparks.gov/morrow-mountain-state-park</a> </p>'+
          '</div>'+
          '</div>';
    var infowindow23 = new google.maps.InfoWindow({
      content: contentString23
    });
    var marker23 = new google.maps.Marker({
      position: {lat:35.371695, lng:-80.096684},
      map: map,
      title: 'Morrow Mountain State Park'
    });
    google.maps.event.addListener(marker23, 'click', function(){
         infowindow23.open(marker23.get('map'), marker23);
    });
    var contentString24 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading">Mount Mitchell State Park</h4>'+
          '<div id="bodyContent">'+
          '<p>One of those places that stand apart from the ordinary, Mount Mitchell’s dramatic summit is the highest point east of the Mississippi at 6,684 feet and was inspiration for one of the nation’s first state parks.  </p>'+
          '<a href="http://www.ncparks.gov/mount-mitchell-state-park">'+
          'http://www.ncparks.gov/mount-mitchell-state-park</a> </p>'+
          '</div>'+
          '</div>';
    var infowindow24 = new google.maps.InfoWindow({
      content: contentString24
    });
    var marker24 = new google.maps.Marker({
      position: {lat:35.7620527, lng:-82.2718134},
      map: map,
      title: 'Mount Mitchell State Park'
    });
    google.maps.event.addListener(marker24, 'click', function(){
         infowindow24.open(marker24.get('map'), marker24);
    });
    var contentString25 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading">New River State Park</h4>'+
          '<div id="bodyContent">'+
          '<p>The New River was named a National Wild and Scenic River in 1976 and it wildly winds through some of the best North Carolina mountain scenery.  </p>'+
          '<a href="http://www.ncparks.gov/new-river-state-park">'+
          'http://www.ncparks.gov/new-river-state-park</a> </p>'+
          '</div>'+
          '</div>';
    var infowindow25 = new google.maps.InfoWindow({
      content: contentString25
    });
    var marker25 = new google.maps.Marker({
      position: {lat:36.4656844, lng:-81.3406366},
      map: map,
      title: 'New River State Park'
    });
    google.maps.event.addListener(marker25, 'click', function(){
         infowindow25.open(marker25.get('map'), marker25);
    });
    var contentString26 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading">Pettigrew State Park</h4>'+
          '<div id="bodyContent">'+
          '<p>Visitors can explore 16,000-acre Lake Phelps and its surrounding landscape by land or water at Pettigrew State Park. </p>'+
          '<a href="http://www.ncparks.gov/pettigrew-state-park">'+
          'http://www.ncparks.gov/pettigrew-state-park</a> </p>'+
          '</div>'+
          '</div>';
    var infowindow26 = new google.maps.InfoWindow({
      content: contentString26
    });
    var marker26 = new google.maps.Marker({
      position: {lat:35.8051363, lng:-76.4519704},
      map: map,
      title: 'Pettigrew State Park'
    });
    google.maps.event.addListener(marker26, 'click', function(){
         infowindow26.open(marker26.get('map'), marker26);
    });
    var contentString27 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading">Pilot Mountain State Park</h4>'+
          '<div id="bodyContent">'+
          '<p>Rising abruptly more than 2,000 feet, Pilot Mountain has been a navigational landmark for centuries, and is a recreational landmark as well, offering miles of trails, camping, climbing and spectacular scenery.  </p>'+
          '<a href="http://www.ncparks.gov/pilot-mountain-state-park">'+
          'http://www.ncparks.gov/pilot-mountain-state-park</a> </p>'+
          '</div>'+
          '</div>';
    var infowindow27 = new google.maps.InfoWindow({
      content: contentString27
    });
    var marker27 = new google.maps.Marker({
      position: {lat:36.3422452, lng:-80.463501},
      map: map,
      title: 'Pilot Mountain State Park'
    });
    google.maps.event.addListener(marker27, 'click', function(){
         infowindow27.open(marker27.get('map'), marker27);
    });
    var contentString28 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading">Raven Rock State Park</h4>'+
          '<div id="bodyContent">'+
          '<p>The Cape Fear River is the frequent hiking destination for visitors entering Raven Rock State Park, whether it’s Lanier Falls, the Fish Traps rapids or the massive Raven Rock, an ageless landmark for river travelers.  </p>'+
          '<a href="http://www.ncparks.gov/raven-rock-state-park">'+
          'http://www.ncparks.gov/raven-rock-state-park</a> </p>'+
          '</div>'+
          '</div>';
    var infowindow28 = new google.maps.InfoWindow({
      content: contentString28
    });
    var marker28 = new google.maps.Marker({
      position: {lat:35.4645067, lng:-78.8995214},
      map: map,
      title: 'Raven Rock State Park'
    });
    google.maps.event.addListener(marker28, 'click', function(){
         infowindow28.open(marker28.get('map'), marker28);
    });
    var contentString29 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading">South Mountains State Park</h4>'+
          '<div id="bodyContent">'+
          '<p>In one of the state’s most rugged areas, South Mountains State Park features elevations to 3,000 feet, an 80-foot waterfall, mountain streams and more than 40 miles of trails for hikers, equestrians and mountain bikers. </p>'+
          '<a href="http://www.ncparks.gov/south-mountains-state-park">'+
          'http://www.ncparks.gov/south-mountains-state-park</a> </p>'+
          '</div>'+
          '</div>';
    var infowindow29 = new google.maps.InfoWindow({
      content: contentString29
    });
    var marker29 = new google.maps.Marker({
      position: {lat:35.5951239, lng:-81.6802054},
      map: map,
      title: 'South Mountains State Park'
    });
    google.maps.event.addListener(marker29, 'click', function(){
         infowindow29.open(marker29.get('map'), marker29);
    });
    var contentString30 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading">Stone Mountain State Park</h4>'+
          '<div id="bodyContent">'+
          '<p>The massive granite dome at Stone Mountain State Park keeps watch on park visitors enjoying nearly every type of outdoor activity – camping, hiking, climbing, fishing, picnicking, horseback riding and more. </p>'+
          '<a href="http://www.ncparks.gov/stone-mountain-state-park">'+
          'http://www.ncparks.gov/stone-mountain-state-park</a> </p>'+
          '</div>'+
          '</div>';
    var infowindow30 = new google.maps.InfoWindow({
      content: contentString30
    });
    var marker30 = new google.maps.Marker({
      position: {lat:36.4007017, lng:-81.0657438},
      map: map,
      title: 'Stone Mountain State Park'
    });
    google.maps.event.addListener(marker30, 'click', function(){
         infowindow30.open(marker30.get('map'), marker30);
    });
    var contentString31 = '<div id="content">'+
          '<div id="siteNotice">'+
          '</div>'+
          '<h4 id="firstHeading" class="firstHeading">William B. Umstead State Park</h4>'+
          '<div id="bodyContent">'+
          '<p>Hikers, trail runners, bicyclists and equestrians cherish the extensive network of hiking and multi-use trails at William B. Umstead State Park.  </p>'+
          '<a href="http://www.ncparks.gov/william-b-umstead-state-park">'+
          'http://www.ncparks.gov/william-b-umstead-state-park</a> </p>'+
          '</div>'+
          '</div>';
    var infowindow31 = new google.maps.InfoWindow({
      content: contentString31
    });
    var marker31 = new google.maps.Marker({
      position: {lat:35.8890871, lng:-78.7495761},
      map: map,
      title: 'William B. Umstead State Park'
    });
    google.maps.event.addListener(marker31, 'click', function(){
         infowindow31.open(marker31.get('map'), marker31);
    });




} //closes doc ready
