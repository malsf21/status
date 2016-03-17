$.ajax({
    url: "http://whateverorigin.org/get?url=" + encodeURIComponent("http://instagram.com/nonotthatmatthewwang/media"),
    dataType : "jsonp",
    cache: false,
    success: function(instagram_data){
      var instagram_photo = instagram_data["items"][0]["images"]["thumbnail"]["url"];
      var instagram_caption = instagram_data["items"][0]["caption"]["text"];
      var instagram_date = instagram_data["items"][0]["caption"]["created_time"];
      var instagram_location = instagram_data["items"][0]["location"]["text"];

      console.log(instagram_photo);
    }
});
