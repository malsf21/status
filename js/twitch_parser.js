var streaming = false;

var stream_data = JSON.parse(httpGet("https://api.twitch.tv/kraken/streams/malsf21?jsoncallback=?"));

if (stream_data["stream"] != null){
  console.log("Streaming");
}
else{
  console.log("Not streaming.");
}
