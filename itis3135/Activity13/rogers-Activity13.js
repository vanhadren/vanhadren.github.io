$(document).ready(function()
 {
    $.ajax
    ({
        type: "get",
        url: "team.json",
        beforeSend: function() {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) 
        {
            $("#team").html("");
            $(data).find("management").children().each(function(temp, tempVal) 
            {
                var xmlDoc = $(this);
                $("#team").append
                (
                          "name: " + tempVal.name + "<br><br>" +
                          "title: " + tempVal.title + "<br><br>" +
                          "bio: " + tempVal.bio + "<br><br>"
                );
            
            });
        }
    });
});