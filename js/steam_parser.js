var steam_states = ["Offline", "Online", "Busy", "Away", "Snooze", "Looking to Trade", "Looking to Play"];

var steam_data = JSON.parse(httpGet("php/steam.php?steamid=76561198110942970"));
var steam_state = steam_data["response"]["players"][0]["personastate"];

var steam_status = steam_states[steam_state];
var steam_playing = false;
if (steam_state == 0){
  var steam_logoff = steam_data["response"]["players"][0]["lastlogoff"];
}
else{
  console.log("Online");
  if ("gameid" in steam_data["response"]["players"][0]){
    steam_playing = true;
    var steam_gameid = steam_data["response"]["players"][0];
    console.log("Playing " + steam_gameid);
  }
}
console.log(steam_data);
console.log(steam_status);
