<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->

  <title>Twitter Api</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">
  <link rel="stylesheet" href="css/styles.css">
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="tweetLinkIt.js"></script>
<script>
      $('.tweet').tweetLinkify();
      function pageComplete(){
        $('.tweet').tweetLinkify();
      }
    </script>
</head>
  <body>

<?php
ini_set('display_errors', 1);
require_once('TwitterAPIExchange.php');

/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token' => "2784759484-52zbwtZODL46aFvyn8jZJwEudkND0Ro6nYT3Usa",
    'oauth_access_token_secret' => "hYUayrqX1GuQXl52FQCo7i7jbhIwbVZNGJfMS4CmR6TWK",
    'consumer_key' => "ACjfDRNkx9Oh6FX4xWtG2mO0H",
    'consumer_secret' => "0Zl1wFQhi6qFCTH1O4Ikt6GwVTFnHr01igsEV6tHQAegFV50Kw"
);

/** URL for REST request, see: https://dev.twitter.com/docs/api/1.1/ **/
// $url = 'https://api.twitter.com/1.1/search/tweets.json';
// $requestMethod = 'POST';
//
// /** POST fields required by the URL above. See relevant docs as above **/
// $postfields = array(
//     'screen_name' => 'usernameToBlock',
//     'skip_status' => '1'
// );
//
// /** Perform a POST request and echo the response **/
// $twitter = new TwitterAPIExchange($settings);
// echo $twitter->buildOauth($url, $requestMethod)
//              ->setPostfields($postfields)
//              ->performRequest();

/** Perform a GET request and echo the response **/
/** Note: Set the GET field BEFORE calling buildOauth(); **/
$url = 'https://api.twitter.com/1.1/search/tweets.json';
$getfield = '?q=ncparks';
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);
// echo $twitter->setGetfield($getfield)
//              ->buildOauth($url, $requestMethod)
//              ->performRequest();


$tweetData = json_decode($twitter->setGetfield($getfield)
        ->buildOauth($url, $requestMethod)
        ->performRequest(), $assoc = TRUE);
        $obj = json_decode($response, true);


foreach($tweetData['statuses'] as $items)
{
  $date = new DateTime( $items->created_at );
      $userArray = $items['user'];

  $entitiesArray = $items['entities'];
          $mediaArray = $entitiesArray['media'];
          $tweetMedia = $mediaArray[0];
          $tweetMedia1 = $mediaArray[1];
          $tweetMedia2 = $mediaArray[2];
          $tweetMedia3 = $mediaArray[3];
          $mediaResize = $tweetMedia['sizes']['thumb']['w'];


          $user = ['user']['screen_name'];
          $profile_image = ['user']['profile_image_url'];
          $media_url = $result->entities->media[0]->media_url;

      echo "<div class='tweet-content'>";
          echo "<div class='float-left twitpic'><a target='_blank' href='http://www.twitter.com/" . $userArray['screen_name'] . "'><img class='twitter-pic' target='_blank' src='" . $userArray['profile_image_url'] . "'></a></div>";
          echo "<img class='tweet-img' src=\"".$media_url."\"  />";
          echo "<a target='_blank' href='http://www.twitter.com/" . $userArray['screen_name'] . "'><span class='name bold'>" . $userArray['name'] . "</span>   </br><span class='handle'>@" . $userArray['screen_name'] . "</span></a>  <span class='font-small'>&sdot; ";
          echo "<div class='tweet-txt'>" . $items['text'] . "</div>";
          echo "<div class='time'>"  . $items['created_at'] . "</div>";

          echo "<a target='_blank' href='" . $tweetMedia['expanded_url'] . "'><img class='twitter-media' target='_blank' src='" . $tweetMedia['media_url'] . "'></a>";
          echo "<a target='_blank' href='" . $tweetMedia1['expanded_url'] . "'><img class='twitter-media' target='_blank' src='" . $tweetMedia1['media_url'] . "'></a>";
          echo "<a target='_blank' href='" . $tweetMedia2['expanded_url'] . "'><img class='twitter-media' target='_blank' src='" . $tweetMedia2['media_url'] . "'></a>";
          echo "<a target='_blank' href='" . $tweetMedia3['expanded_url'] . "'><img class='twitter-media' target='_blank' src='" . $tweetMedia3['media_url'] . "'></a>";

      echo "</div>";
}





echo "<script>pageComplete();</script>;"
?>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>
  </body>
  </html>
