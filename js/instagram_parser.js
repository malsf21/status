$.ajax({
    url: "http://whateverorigin.org/get?url=" + encodeURIComponent("http://instagram.com/nonotthatmatthewwang/media"),
    dataType : "jsonp",
    cache: false,
    success: function(instagram_data){
      instagram_photo = instagram_data["contents"]["items"][0]["images"]["thumbnail"]["url"];
      instagram_caption = instagram_data["contents"]["items"][0]["caption"]["text"];
      instagram_location = instagram_data["contents"]["items"][0]["location"]["name"];
      var instagram_date_unix = new Date(Number(instagram_data["contents"]["items"][0]["created_time"]+"000"));

      instagram_date = instagram_date_unix.getHours() + ":" + instagram_date_unix.getMinutes() + ", " + month_set[instagram_date_unix.getMonth()] + " " + instagram_date_unix.getDate() + " " + instagram_date_unix.getFullYear();

      console.log(instagram_date);
      instaInfo();
    }
});
