$("#resp_menu_icon").click(function()
{
    $("#resp_popup_menu").toggleClass("nodisplay");
	$("#resp_menu_icon").toggleClass("toggled");
});

$("#popup_x").click(function()
{
	//$(".popup").fadeToggle("fast");
	    $(".popup").toggle({effect: "scale", origin: "middle" });
	$(".popup").toggleClass("nodisplay");
});

$(".modal_overlay").click(function()
{
	$(".popup").fadeToggle("fast");
	$(".popup").toggleClass("nodisplay");
});