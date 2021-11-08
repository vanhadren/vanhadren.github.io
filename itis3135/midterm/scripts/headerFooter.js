window.onload = function()
{
    var $ = function(id) { return document.getElementById(id); };

}
$(document).ready
(
    function()
    {

        $("#header").load("components/header.html");
    }
);
$(document).ready
(
    function()
    {

        $("#footer").load("components/footer.html");
    }
);
