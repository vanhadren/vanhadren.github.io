
 $(document).ready(function()
{
    $("images_list a").each(function()
    {
        var imageURL = $this.attr("href");
        var caption = $this.attr("title");

        var galleryImage = new Image();
        galleryImage.src = imageURL;

        $(this).click(function(evt) 
        {
            $("#caption,#image").slideUp(2000,
                function()
                {
                    $("#image").attr("src",imageURL);
                    $("#caption").text(caption);
                    $("#caption, #image").slideDown(2000);

                });
                evt.preventDefault();
        });
    });
    $("li:first-child a").focus();
});
