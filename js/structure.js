function httpGet(theUrl){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
  xmlHttp.send( null );
  return xmlHttp.responseText;
}

var month_set = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
