var images = ["images/coolcat.jpg","images/cooldog.jpg","images/coolwolf.jpg","images/cooltiger.jpg","images/cooldragon.jpg","images/coolspace.jpg"];
var alts = ["cat","dog","wolf","tiger","dragon","space"]

window.onload =function()
{
   for(var i=0; i<images.length; i ++)
   {
    var img = document.createElement('img');
    img.setAttribute("src", images[i]);
    img.setAttribute("height",600);
    img.setAttribute("width",900);
    img.id = 'img'+[i];
    $(img).appendTo('#slideShow');
    $(img).hide();
    
   }

 }

 $(document).ready(function()
{
    var temp = 0;
   setInterval(function()
            {
                    var divID = document.getElementById('slideShow');
                    var tempID = 'img'+ temp;
                    var tempIMG = document.getElementById(tempID);
                        if(temp>0)
                        {
                            $(tempIMG).prev().hide();
                        }                                                
                        $(tempIMG).show();
                        temp++;
                        if(temp>images.length)
                        {                            
                            $(divID.lastElementChild).hide();
                            temp=0;
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