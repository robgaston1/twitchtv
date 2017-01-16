$(document).ready(function() {


    var userArray = ["freecodecamp", "brunofin", "streamerhouse", "insomniacgamers12345", "comster404", "ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
    
   
    function offline (user) {
         $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/'+user+'?callback=?',function(data) {
//             console.log("offline:", data);
         });
    } 
    
    function getInfo(user) {
        var logo = "";
        var link = "";
        var name = "";
        $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/'+user+'?callback=?', function (data) {
            if (data.stream==null) {
              offline(user);  
            } else {
            console.log(data);
            link = data.stream.channel.url;
            logo = "<a href=\""+link+"\" target=\"blank\"><img src=\""+data.stream.channel.logo+"\"></a>";
            name= data.display_name;
            game = data.stream.channel.game;
            viewers = data.stream.viewers;
            $('.streaming').append("<div class=\"row\"><div class=\"col-md-3\">"+logo+"</div><div class=\"col-md-3\">"+user+"</div><div class=\"col-md-3\">"+game+"</div><div class=\"col-md-3\">"+viewers+"</div></div>");
            }
        })
    }

    function getStatus(user) {
        $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/'+user+'?callback=?',function(data) {
            if (data.error) {
                $(".invalid").append("<p>"+user+"</p>")
            } else getInfo(user);
        })
    }
    
    for (i = 0; i < userArray.length; i++) {
    getStatus(userArray[i]);
  }

}); //end of $(document).ready function