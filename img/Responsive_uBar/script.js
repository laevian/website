$("#resp_search_icon").click(function()
{
                $("#dropdown_search").toggleClass("nodisplay");
				
		visible = $("#dropdown_menu").attr('class');
				
				if(visible != "nodisplay")
				{
				    $("#dropdown_menu").toggleClass("nodisplay");
				} 
});


$("#dots").click(function()
{
                $("#dropdown_menu").toggleClass("nodisplay");
				
				visible2 = $("#dropdown_search").attr('class');
				
				if(visible2 != "nodisplay")
				{
				    $("#dropdown_search").toggleClass("nodisplay");
				}
}); 


$(window).resize(function()
{
	var width = window.innerWidth;
	
	if (width > 721)
	{
		var ddm = $("#dropdown_search").attr('class');
		if(ddm != "nodisplay")
				{
				    $("#dropdown_search").toggleClass("nodisplay");
				}
	}
	
	if (width > 721)
	{
		var dds = $("#dropdown_search").attr('class');
		if (dds != "nodisplay")
			{
				$("#dropdown_search").toggleClass("nodisplay");
			}
	}
});

