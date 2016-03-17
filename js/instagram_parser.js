$.ajax({
    url: "http://whateverorigin.org/get?url=" + encodeURIComponent("http://instagram.com/nonotthatmatthewwang/media"),
    dataType : "jsonp",
    cache: false,
    success: function(instagram_data){
      var instagram_photo = instagram_data["items"]["images"]["thumbnail"]["url"];
      var instagram_caption = instagram_data["items"]["caption"]["text"];
      var instagram_date = instagram_data["items"]["caption"]["created_time"];
      var instagram_location = instagram_data["items"]["location"]["text"];

      console.log(instagram_photo);
    }
});
