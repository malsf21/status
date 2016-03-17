<?php
  $log_json = file_get_contents("summoner_log.json");
  $log_data = json_decode($log_json, true);
  $current_time = time();
  if ($current_time - $log_data["time"] >= 30){
    $apikey = "";
    $url = "https://na.api.pvp.net/api/lol/na/v2.5/league/by-summoner/65443758/entry?api_key=".$apikey;
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
    file_put_contents('summoner_log.json', json_encode($new_data, JSON_FORCE_OBJECT));
  }
  else{
    print(json_encode($log_data["data"], JSON_FORCE_OBJECT));
  }
?>
