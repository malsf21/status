var league_game_data = httpGet("php/game.php?summonerid=65443758");
var league_game_jsonData = JSON.parse(league_game_data);

var playingLeague = false;
if (league_champ_jsonData["gameId"] != null){
  var league_champ_data = httpGet("php/champ.php");
  var league_champ_jsonData = JSON.parse(champ_data);

  playingLeague = true;
  var league_game_mode = "Custom/Unidentified";
  league_game_type = league_game_jsonData["gameQueueConfigId"];
  if (league_game_type == 2){
    league_game_mode = "Blind Pick";
  }
  else if (league_game_type == 14){
    league_game_mode = "Normal Draft";
  }
  else if (league_game_type == 4){
    league_game_mode = "Ranked";
  }
  else if (league_game_type == 41){
    league_game_mode = "Ranked 3v3";
  }
  else if (league_game_type == 65){
    league_game_mode = "ARAM";
  }
  else if (league_game_type == 31 || league_game_type == 32 || league_game_type == 33){
    league_game_mode = "Bot";
  }
  for (i = 0; i < jsonData["participants"].length; i++){
    if (jsonData['participants'][i]["summonerId"] == 65443758){
      var champid = jsonData['participants'][i]['championId'];
    }
  }
  var league_champ = champ_jsonData["data"][String(champid)]["name"];
}
