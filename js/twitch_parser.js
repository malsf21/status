var streaming = false;
var stream_game = "";
function twitchFetch(twitchUser){
  var stream_data = JSON.parse(httpGet("https://api.twitch.tv/kraken/streams/"+twitchUser+"?jsoncallback=?"));

  if (stream_data["stream"] != null){
    streaming = true;
    stream_game = stream_data["stream"]["game"];
  }
  twitchInfo();
}

function betterTwitchFetch(twitchUser){
  var stream_data = JSON.parse(httpGet("https://api.twitch.tv/kraken/streams/"+twitchUser+"?jsoncallback=?"));

  if (stream_data["stream"] != null){
    return(stream_data["stream"]["game"]);
  }
  else{
    return false;
  }
}
