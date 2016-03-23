var steam_data = JSON.parse(httpGet("php/steam.php?steamid=76561198110942970"));
var steam_state = steam_data["response"]["players"][0]["personastate"];

if (steam_state == 0){
  console.log("Offline");
}
else{
  console.log("Online");
}

console.log(steam_data);
console.log(steam_data["response"]["players"][0]["personastate"]);
