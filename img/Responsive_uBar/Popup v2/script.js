$("#resp_menu_icon").click(function()
{
    $("#resp_popup_menu").toggleClass("nodisplay");
	$("#resp_menu_icon").toggleClass("toggled");
});

$("#popup_x").click(function()
{
	$(".popup").toggleClass("nodisplay");
});