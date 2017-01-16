$(document).ready(function() {

    var userName = "";
    var userUrl = "";
    var status = "";
    var game = "";
    var viewers = 0;
    var userArray = ["freecodecamp", "brunofin", "streamerhouse", "insomniacgamers12345", "comster404", "ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    
    function getInfo(user) {
        var logo = "";
        var link = "";
        $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/freecodecamp?callback=?', function(data) {
            console.log(data);
            logo = data.logo;
            link = data.url;
            followers = data.followers
            $(".userArea").append('<div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-3">Stream Name:</div>
            <div class="col-md-2">Status:</div>
            <div class="col-md-3">Playing:</div>
            <div class="col-md-2">Viewers:</div>
        </div>')

        });
    }
/*  for (i = 0; i < userArray.length; i++) {
    getInfo(userArray[i]);
  }*/

}); //end of $(document).ready function