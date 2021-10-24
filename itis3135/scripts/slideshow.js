$(document).ready(function()
{
    $(".slide:first").fadeIn();
        setInterval(function()
            {Next($('.slide:visible'))}, 4000);
});
function Next(slide)
{
    slide.fadeIn();
        if(typeof slide.next().attr('src') !== "undefinded")
            {
                slide.next().fadeIn();
            }
        else
            {
                $('.slide:first').fadeIn();
            }
}
