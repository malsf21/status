$.ajax({
    url: 'php/game.php?summonerid=65443758',
    dataType: "json",
    success: function(league_game_data) {

      var league_game_jsonData = JSON.parse(league_game_data);

      var league_champ_data = httpGet("php/champion.php");
      var league_champ_jsonData = JSON.parse(league_champ_data);

      playingLeague = true;
      league_game_mode = "Custom/Unidentified";
      league_game_type = league_game_jsonData["gameQueueConfigId"];
      console.log(league_game_type);
      console.log(league_game_jsonData);
      if ("status" in league_game_jsonData){
        var playingLeague = false;
      }
      else{
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
        for (i = 0; i < 10; i++){
          if (league_game_jsonData['participants'][i]["summonerId"] == 65443758){
            var champid = league_game_jsonData['participants'][i]['championId'];
            break;
          }
        }
        league_champ = league_champ_jsonData["data"][champid]["name"];
      }
    },
    error: function(data) {
        var playingLeague = false;
    },
    complete: function(xhr, data) {
      var league_summoner_data = httpGet("php/summoner.php?summonerid=65443758");
      var league_summoner_jsonData = JSON.parse(league_summoner_data);

      league_summoner_tier = league_summoner_jsonData['65443758'][0]["tier"];
      league_summoner_division = league_summoner_jsonData['65443758'][0]["entries"][0]["division"];
      leagueInfo();
    }
});
