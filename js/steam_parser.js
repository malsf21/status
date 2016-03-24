var steam_states = ["Offline", "Online", "Busy", "Away", "Snooze", "Looking to Trade", "Looking to Play"];
var steam_game = "";
var steam_logoff = "";
var steam_playing = 0;
var steam_status = "";
function steamFetch(steamid){
  var steam_data = JSON.parse(httpGet("php/steam.php?steamid="+ steamid));
  var steam_state = steam_data["response"]["players"][0]["personastate"];

  steam_status = steam_states[steam_state];
  if (steam_state == 0){
    var steam_logoff_unix = new Date(Number(steam_data["response"]["players"][0]["lastlogoff"]+"000"));
    steam_logoff = "at " + String(steam_logoff_unix).substring(16,21) + " " + steam_logoff_unix.toDateString();
  }
  else{
    if ("gameid" in steam_data["response"]["players"][0]){
      steam_playing = 2;
      steam_game = steam_data["response"]["players"][0]["gameextrainfo"];
    }
    else{
      steam_playing = 1;
    }
  }
  steamInfo();
}
