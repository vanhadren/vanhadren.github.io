var images = ["images/blender.jpg","images/drinkCooler.jpg","images/steakAzteka.jpg","images/Texmex.jpg"];
var alts = ["cat","dog","wolf","tiger","dragon","space"]
var comingSoonIMG = document.createElement("img");
comingSoonIMG.setAttribute("src",images/comingSoon.jpg)
comingSoonIMG.setAttribute("height",300);
comingSoonIMG.setAttribute("width",600);

window.onload =function()
{
   for(var i=0; i<images.length; i ++)
   {
    var img = document.createElement('img');
    img.setAttribute("src", images[i]);
    img.setAttribute("height",300);
    img.setAttribute("width",600);
    img.id = 'img'+[i];
    $(img).appendTo('#slideShow');
    $(img).hide();
    
   }
   $(comingSoonIMG).appendTo('#slideShow').hide();

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
                            $(divID.comingSoonIMG).show();
                        }                        
                    
            },2000);
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