var steam_states = ["Offline", "Online", "Busy", "Away", "Snooze", "Looking to Trade", "Looking to Play"];

var steam_data = JSON.parse(httpGet("php/steam.php?steamid=76561198110942970"));
var steam_state = steam_data["response"]["players"][0]["personastate"];

var steam_status = steam_states[steam_state];
var steam_playing = 0;
if (steam_state == 0){
  var steam_logoff_unix = new Date(Date.parse(Number(steam_data["response"]["players"][0]["lastlogoff"]+"000")));
  var steam_logoff = "at " + String(steam_logoff_unix).substring(16,21) + " " + steam_logoff_unix.toDateString();
  console.log(steam_data["response"]["players"][0]["lastlogoff"])
  console.log(steam_logoff_unix);
  console.log(steam_logoff);
}
else{
  console.log("Online");
  if ("gameid" in steam_data["response"]["players"][0]){
    steam_playing = 2;
    var steam_game = steam_data["response"]["players"][0]["gameextrainfo"];
  }
  else{
    steam_playing = 1;
  }
}
