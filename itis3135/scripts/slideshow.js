var images = ["images/coolcat.jpg","images/cooldog.jpg","images/coolwolf","images/cooltiger","cooldragon","images/coolspace"];
var alts = ["cat","dog","wolf","tiger","dragon","space"]

window.onload =function preload(images)
 {
    $(images).each(function () 
    {
        $('<img />').attr('src',this).appendTo('#slideShow').hide()
    });
 }

 $(document).ready(function()
{
    for(let i = 0; i <images.length; i++)
    {
        $('#slideshow').find([i]).show();
    }

});
/*


    $(".slide:first").show();
        setInterval(function()
            {Next($('.slide:visible'))}, 4000);
$(".slide:first").hide();


function Next(slide)
{
    slide.fadeOut();
        if(typeof slide.next().attr('src') !== "undefinded")
            {
                slide.next().fadeIn();
            }
        else
            {
                $('.slide:first').fadeIn();
            }
}
*/