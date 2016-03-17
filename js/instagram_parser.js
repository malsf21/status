var instagram_data = JSON.parse(httpGet("https://www.instagram.com/nonotthatmatthewwang/media/?jsoncallback=?"));

var instagram_photo = instagram_data["items"]["images"]["thumbnail"]["url"];
var instagram_caption = instagram_data["items"]["caption"]["text"];
var instagram_date = instagram_data["items"]["caption"]["created_time"];
var instagram_location = instagram_data["items"]["location"]["text"];

console.log(instagram_photo);
