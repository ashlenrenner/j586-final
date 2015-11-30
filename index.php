<html>
<head>
  <link rel="stylesheet" href="css/styles.css">

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

    
foreach($tweetData['statuses'] as $items)
{

}
$response = $twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest();

$obj = json_decode($response, true);
echo "<div><ul>";
foreach ($obj["statuses"] as $index => $result) {

$tweet = $result['text'];
$user = $result['user']['screen_name'];
$profile_image = $result['user']['profile_image_url'];
$media_url = $result->entities->media[0]->media_url;

echo "<div class='tweet-content'>";
echo "<img class='tweet-img' src=\"".$media_url."\"  />";
echo "<img class='profile' src=\"".$profile_image."\" width=\"25px\" height=\"25px\" />";
echo "<a class='link' href=\"http://twitter.com/$user\">@$user</a>";
echo " $tweet";
echo "<div class='time'>"  . $items['created_at'] . "</div>";
    echo "</div>";
}

echo "</ul></div>";



    ?>
  </body>
  </html>
