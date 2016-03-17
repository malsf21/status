<?php
  $log_json = file_get_contents("game_log.json");
  $log_data = json_decode($json, true);
  $current_time = time();
  if ($current_time - $log_data["time"] >= 10){
    $apikey = "";
    $summonerid = $_GET["summonerid"];
    $url = "https://na.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/NA1/".$summonerid."?api_key=".$apikey;
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $data = curl_exec($ch);
    $info = curl_getinfo($ch);
    http_response_code($info["http_code"]);
    header("Access-Control-Allow-Origin: http://matthewwang.me");
    print($data);
    $new_data = [
      "time" => $current_time,
      "data" => $data
    ];
    file_put_contents('game_log.json', json_encode($new_data, JSON_FORCE_OBJECT));
  }
  else{
    print(json_encode($log_data["data"], JSON_FORCE_OBJECT));
  }
?>
