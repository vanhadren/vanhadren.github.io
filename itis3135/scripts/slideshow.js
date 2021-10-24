$(document).ready(function()
{
    $(".slide:first").fadeOut();
        setInterval(function()
            {Next($('.slide:visible'))}, 4000);
});
function Next(slide)
{
    slide.fadeIn();
        if(typeof slide.next().attr('src') !== "undefinded")
            {
                slide.next().fadeOut();
            }
        else
            {
                $('.slide:first').fadeOut();
            }
}
