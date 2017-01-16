$(document).ready(function() {


    var userArray = ["freecodecamp", "brunofin", "streamerhouse", "insomniacgamers12345", "comster404", "ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    
    function getStatus(user) {
        $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/'+user+'?callback=?',function(data) {
            if (data.error) {
                $(".invalid").append("<p>"+user+"</p>")
            } else getInfo(user);
        })
        
    }
    function getInfo(user) {
        var logo = "";
        var link = "";
        var name = "";
        $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/'+user+'?callback=?', function (data) {
            console.log(data);
            name= data.display_name;
            logo = data.logo;
            link = data.url;
            followers = data.followers;
            /*$(".userArea").append('<div class="row"><div class="col-md-2"><img src='+logo+'</div>
            <div class="col-md-3">'+name+'</div>
            <div class="col-md-2"></div>
            <div class="col-md-3">Playing:</div>
            <div class="col-md-2">'+followers+'</div>
        </div>'*/
        })
    }
    
    for (i = 0; i < userArray.length; i++) {
    getStatus(userArray[i]);
  }

}); //end of $(document).ready function