$(document).ready(function()
{
    $(".slide:first").hide();
        setInterval(function()
            {Next($('.slide:visible'))}, 4000);
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
