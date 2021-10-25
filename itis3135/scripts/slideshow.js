var images = ["images/coolcat.jpg","images/cooldog.jpg","images/coolwolf.jpg","images/cooltiger.jpg","images/cooldragon.jpg","images/coolspace.jpg"];
var alts = ["cat","dog","wolf","tiger","dragon","space"]

window.onload =function()
{
   for(var i=0; i<images.length; i ++)
   {
    var img = document.createElement('img');
    img.setAttribute("src", images[i]);
    $(img).appendTo('#slideShow');
   }

 }

 $(document).ready(function()
{
   var slideShowPlayer = setInterval(function()
            {

                    for(let i = 0; i <images.length; i++)
                    {
                        if(i>0)
                        {
                        $('#slideShow').find(images[i-1]).hide();
                        }
                        
                        
                        $('#slideShow').find(images[i]).show();
                        
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