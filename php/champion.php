<?php
  $apikey = "0e7fb11d-c84e-47e5-8900-d18e9615dd08";
  $url = "https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?dataById=true&api_key=".$apikey;
  $ch = curl_init($url);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  $data = curl_exec($ch);
  $info = curl_getinfo($ch);
  http_response_code($info["http_code"]);
  header("Access-Control-Allow-Origin: http://matthewwang.me");
  print($data);
?>
