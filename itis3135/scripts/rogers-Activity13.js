$(document).ready(function()
 {
    $.ajax
    ({
        type: "get",
        url: "components/team.json",
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
            $.each(data, function()
            {
                $.each(this, function(temp, tempVal)                
                    {              
                        $("#team").append("NAME" + "<br>" + "&emsp;"+ tempVal.name + "<br>" +
                                        "TITLE" + "<br>" + "&emsp;"+  tempVal.title + "<br>" +
                                        "BIO" + "<br>" +  tempVal.bio + "<br><br>"
                                        );            
                    });
            }       );
        }
    });
});