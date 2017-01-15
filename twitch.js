$(document).ready(function() {

  var userName = "";
  var userUrl = "";
  var status = "";
  var game = "";
  var viewers = 0;
  var userArray = ["freecodecamp", "brunofin", "streamerhouse", "insomniacgamers12345", "comster404", "ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?', function(data) {
  console.log(data);
});
    
    $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/freecodecamp?callback=?', function(data) {
  console.log(data);
});
    
    $.getJSON('https://wind-bow.gomix.me/twitch-api/users/freecodecamp?callback=?', function(data) {
  console.log(data);
});

/*  for (i = 0; i < userArray.length; i++) {
    getInfo(userArray[i]);
  }*/

}); //end of $(document).ready function