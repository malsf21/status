var instagram_date = "";
var instagram_caption = "";
var instagram_location = "";
var instagram_photo = "";


function instagramFetch(username){
  $.ajax({
      url: "http://whateverorigin.org/get?url=" + encodeURIComponent("http://instagram.com/" + username + "/media"),
      dataType : "jsonp",
      cache: false,
      success: function(instagram_data){
        instagram_photo = instagram_data["contents"]["items"][0]["images"]["thumbnail"]["url"];
        instagram_caption = instagram_data["contents"]["items"][0]["caption"]["text"];
        instagram_location = instagram_data["contents"]["items"][0]["location"]["name"];
        var instagram_date_unix = new Date(Number(instagram_data["contents"]["items"][0]["created_time"]+"000"));

        instagram_date = String(instagram_date_unix).substring(16,21) + " " + instagram_date_unix.toDateString();
        instaInfo();
      }
  });
}
