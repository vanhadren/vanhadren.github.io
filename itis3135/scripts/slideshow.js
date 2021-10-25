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
   var slideShowPlayer = setInterval(function()
            {

                    for(let i = 0; i <images.length; i++)
                    {
                        if(i>0)
                        {
                        $('#slideShow').find([i-1]).hide();
                        }
                        
                        
                        $('#slideShow').find([i]).show();
                        
                        if(i>=images.length)
                        {
                            i=0;
                        }
                    }
            },4000);
});
/*


    $(".slide:first").show();
        


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