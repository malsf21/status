var github_data = JSON.parse(httpGet("https://api.github.com/users/malsf21/events/public?jsoncallback=?"));
var github_repo = github_data[0]["repo"]["name"].substring(8);
var github_unix_time = new Date(Date.parse(github_data[0]["created_at"]));
var github_time = "at " + String(github_unix_time).substring(16,21) + " " + github_unix_time.toDateString();
