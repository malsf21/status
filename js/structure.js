function httpGet(theUrl){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", theUrl +'?_=' + new Date().getTime(), false);
  xmlHttp.send( null );
  return xmlHttp.responseText;
}
