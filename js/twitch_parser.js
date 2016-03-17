var streaming = false;

var stream_data = JSON.parse(httpGet("https://api.twitch.tv/kraken/streams/malsf21?jsoncallback=?"));

if (stream_data["stream"] != null){
  streaming = true;
  var stream_game = stream_data["stream"]["game"];
}
