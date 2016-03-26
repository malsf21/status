function User(twitch, steam, league, twitter, instagram, github){
  this.hasTwitch = twitch;
  this.hasSteam = steam;
  this.hasLeague = league;
  this.hasTwitter = twitter;
  this.hasInstagram = instagram;
  this.hasGithub = github;
};

User.prototype.setAll = function(twitch, steam, league, twitter, instagram, github){
  this.twitchUsername = twitch;
  this.steamUsername = steam;
  this.leagueUsername = league;
  this.twitterUsername = twitter;
  this.instagramUsername = instagram;
  this.githubUsername = github;
};

User.prototype.getAll = function(){
  return {
    "twitch" : this.twitchUsername,
    "steam" : this.steamUsername,
    "league" : this.leagueUsername,
    "twitter" : this.twitterUsername,
    "instagram": this.instagramUsername,
    "github" : this.githubUsername
  };
};

User.prototype.setTwitch = function(username){
  this.twitchUsername = username;
};

User.prototype.setSteam = function(username){
  this.steamUsername = username;
};

User.prototype.setLeague = function(username){
  this.leagueUsername = username;
};

User.prototype.setTwitter = function(username){
  this.twitterUsername = username;
};

User.prototype.setInstagram = function(username){
  this.instagramUsername = username;
};

User.prototype.setGithub = function(username){
  this.githubUsername = username;
};

User.prototype.getTwitch = function(){
  return this.twitchUsername;
};

User.prototype.getSteam = function(){
  return this.steamUsername;
};

User.prototype.getLeague = function(){
  return this.leagueUsername;
};

User.prototype.getTwitter = function(){
  return this.twitterUsername;
};

User.prototype.getInstagram = function(){
  return this.instagramUsername;
};

User.prototype.getGithub = function(){
  return this.githubUsername;
};
