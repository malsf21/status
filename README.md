# status
A web-app that tells you about, well, me.

Or, in the future, you! Look out for functionality that allows users to make their own "status" pages.

# Contributing

I can bet you're looking at this code and saying, "Matt, what the heck are you doing"! If you are, no hard feelings; you can contribute to this project by forking the project, and submitting your fork in a pull request. Just a few tips about developing with status:

### API Keys & PHP

In order to hook into Riot's and Steam's APIs, you need a **private API key** (and also both don't support jsonp :/ ). In order to make everything nice and dandy, I use several php pages to mirror the JSON curl requests, and log them. That being said, I can't exactly put my api key on the repo! If you clone the stats repo, **you need to copy the php_template folder to a folder called php**, and then in the api key var in the php files, **put your own api keys for the respective services**.

```

//what's on the repo
$apikey = "";

// what you need to do
$apikey = "MY-API-KEY-GOES-HERE";
```

If you don't do this, **none of the api functions will work properly**.

Here's the websites for [the Riot API](https://developer.riotgames.com/) and [the Steam API](https://steamcommunity.com/dev).
