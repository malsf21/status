var github_data = JSON.parse(httpGet("https://api.github.com/users/malsf21/events/public?jsoncallback=?"));
var github_repo = github_data[0]["repo"]["name"].substring(8);
var github_unix_time = new Date(Date.parse(github_data[0]["created_at"]));
var github_time = "at " + github_unix_time.getHours() + ":" + github_unix_time.getMinutes() + ", " + month_set[github_unix_time.getMonth()] + " " + github_unix_time.getDate() + " " + github_unix_time.getFullYear();
