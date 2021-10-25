var images = ["images/coolcat.jpg","images/cooldog.jpg","images/coolwolf.jpg","images/cooltiger.jpg","images/cooldragon.jpg","images/coolspace.jpg"];
var alts = ["cat","dog","wolf","tiger","dragon","space"]

window.onload =function()
{
   for(var i=0; i<images.length; i ++)
   {
    var img = document.createElement('img');
    img.setAttribute("src", images[i]);
    img.setAttribute("height",200);
    img.setAttribute("width",200);
    img.id = 'img'+[i];
    $(img).appendTo('#slideShow');
    $(img).hide();
    
   }

 }

 $(document).ready(function()
{
   setInterval(function()
            {
                    var temp = 0;
                    var tempID = 'img'+ temp;
                    var tempIMG = document.getElementById(tempID);
                        if(temp>0)
                        {
                            $(tempIMG).prev().hide();
                        }                                                
                        $(tempIMG).show();
                        temp++;
                        if(i>=images.length)
                        {
                            i=0;
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