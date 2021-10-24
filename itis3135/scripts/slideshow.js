$(document).ready(function()
{
    $(".slide:first").show();
        setInterval(function()
            {Next($('.slide:visible'))}, 4000);
$(".slide:first").hide();
});

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
