var filtersArray = [];
var index = 0;
var filterLocation;
var filterOffset;
var openWindow = "none";
$(".spinner").hide();
$(".la_slideout").hide();
$(".rf_slideout").hide();



function windowHide(hideMe) /*"this" becomes the id of the window to hide*/
{

var classArray = $(hideMe).attr("class").split(" "); /*splits, just in case*/
var myClass = classArray[0];

	if (myClass === "result_popup")
	{
	/*hide result popup method*/
	
	var resultItem = $(hideMe).siblings(".result_item");

	$(hideMe).slideUp("2000", function() {
	resultItem.fadeIn("slow");
	});

	}

	else
	{
	
	/*hide slideout method*/		
	$(hideMe).toggle('slide', {direction: 'right'}, 500);
	
	if (hideMe.indexOf("L") != -1)
	{

	var splitter = hideMe.split("#LA");	
	var openerId = "#LAI"+splitter[1];
	
	$(openerId).toggleClass("green");
	}
	
	else
	{
	var splitter = hideMe.split("#RF");
	var openerId = "#RFI"+splitter[1];
	$(openerId).toggleClass("blue");
	}
	
	}
	
} /*function that checks for type of window, then follows the closing procedure for that window*/


$(".result_item").click(function()
{

if (openWindow != "none")
{

windowHide(openWindow);

}

$(this).hide();
$(this).siblings(".result_popup").slideDown("2000");

var tempOpen = $(this).siblings(".result_popup").attr("id");

openWindow = "#"+tempOpen;
}); /*End .result_item click*/

$(".popup_collapse").click(function()
{

var resultItem = $(this).parent(".result_popup").siblings(".result_item");

$(this).parent(".result_popup").slideUp("2000", function() {
resultItem.fadeIn("slow");
});

openWindow = "none";

});


$(".result_item").mouseenter(function()
{

var myHover = $(this).children(".result_hover");
myHover.animate({
opacity: 1}, 400, function(){});

});

$(".result_item").mouseleave(function()
{

var myHover = $(this).children(".result_hover");
myHover.animate({opacity: 0}, 400, function(){});

});


$(".la_item").click(function()
{

if (openWindow != "none")
{

windowHide(openWindow);

}

	$(this).toggleClass("green");
	var myIdNumber = $(this).attr("id").split("I");
	var windowId = "#LA"+myIdNumber[1];
	$(windowId).toggle('slide', {direction: 'right'}, 500);
	openWindow = windowId;
});

$(".rf_item").click(function()
{

if (openWindow != "none")
{

windowHide(openWindow);

}

	$(this).toggleClass("blue");
	var myIdNumber = $(this).attr("id").split("I");
	var windowId = "#RF"+myIdNumber[1];
	$(windowId).toggle('slide', {direction: 'right'}, 500);
	openWindow = windowId;
	
});

$(".slideout_close").click(function()
{
	var parentWindow = $(this).parent();
	var parentId = parentWindow.attr("id");
	var parentSelector= "#"+parentId;
	
	
	if (parentId.indexOf("L") != -1)
	{

	var splitter = parentId.split("LA");	
	var openerId = "#LAI"+splitter[1];
	
	$(openerId).toggleClass("green");
	}
	
	else
	{
	var splitter = parentId.split("RF");
	var openerId = "#RFI"+splitter[1];
	$(openerId).toggleClass("blue");
	}
	
	
	
	$(parentSelector).toggle('slide', {direction: 'right'}, 500);

	
	openWindow = "none";
});




$(".search_button").click(function()
{
	$(".search_results").css('opacity', .5);
	$(".spinner").show().delay(500).queue(function(next){
		$(".spinner").fadeOut("slow");
			$(".search_results").fadeOut("slow", function(){
			$(".search_results").fadeIn("slow").css('opacity', 1);
			});
		next();
	});
});


function clickHandler()		/*an event handler for clicks on filter rectangles*/
{
	var thisOffset = $(this).offset();							/*returns the offset of the clicked rect*/
	var thisWidthArray = $(this).css("width").split("px");
	var thisWidth = thisWidthArray[0];							/*width of the clicked rect*/
	
	if (thisOffset.left === 310)
	{
	
		for (var i = 0; i < filtersArray.length-1; i++ )
		{
			var next = i+1;
			var nextId = "#"+next;
			var nextRect = $(nextId);
			var nextOffset = nextRect.offset();
			var newOffset = nextOffset.left - thisWidth - 5;
			$(nextRect).attr("id", i ).animate({ "left": newOffset });
			filtersArray[i+1] = newOffset;
		}
		
	filtersArray.shift();
	
	}
	
	else
	{
	
		for (var i = 0; i < filtersArray.length - 1; i++ )
		{
			if ( filtersArray[i] === thisOffset.left )
			{
			var next = i+1;
			
			
			
			
			
			}
		}
	
	filtersArray.pop();
	
	}
	
	$(this).fadeOut("fast");
	index--;
	
	if (filtersArray.length === 0)
	{
	$(".filterimage").fadeOut("fast");
	}
	
/*	for( var i = 0; i < filtersArray.length - 1; i++ ){	/*checks filtersArray for the location of the current object*/
	
/*		if (thisOffset.left === 310)  /*first item in array*/
/*		{		
		
		var currentWidthArray = $("#0").css("width").split("px");
		var currentWidth = currentWidthArray[0];
		
			var nextId = i+1;
			var nextRect = "#"+nextId;			/*gets the next item in the array*/
			
/*			var currentOffset = $(nextRect).offset();
			var newOffset = currentOffset.left - currentWidth - 5;
			
			
			
			$(nextRect).attr("id", nextId-1 ).animate({ "left": newOffset });


			filtersArray[i+1] = newOffset;					/*sets the value at the current location to be the next value; check this logic*/
					
		
/*		}
	
		if ( filtersArray[i] === thisOffset.left )
		{
	
		var selector = "#"+i;								/* this works!*/
		
/*		var currentWidth = $(selector).width();				/* this works too! */
		
		
/*			for ( var j = i; j < filtersArray.length-1; j++ )		/*for all of the remaining objects*/
/*			{
			
			var nextId = j+1;
		
			var nextRect = "#"+nextId;			/*gets the next item in the array*/
			
/*			var currentOffset = $(nextRect).offset();
			var newOffset = currentOffset.left - currentWidth - 10;
			
			$(nextRect).attr("id", nextId-1 ).animate({ "left": newOffset });


			filtersArray[j+1] = newOffset;			/*sets the value at the current location to be the next value; check this logic*/
			
/*			}
		
		}
	}
	
	if (thisOffset.left === 310)
	{
	filtersArray.shift();
	}

	else
	{
	filtersArray.pop();
	}
	
	index--;

		/*if (filtersArray.length === 0) doesnt work yet, length not being changed
		{
			$(".filterimage").fadeOut("fast");
		}*/
			
/*		$(this).fadeOut("fast").css({"display": "none"}); */
		
		
	
}



$(".filter_item").click(function()
{

if (filtersArray.length === 0)
{
	
	var offset = $(this).offset();					/*Gets the position of the filter item*/
	var fiwidth= $(this).width(); 					/*Gets the width of the filter item*/
	var fiheight= $(this).height(); 				/*Gets the height of the filter item*/
	var fiArray= $(this).text().split(" ("); 		/*gets only the name of the group, and not the number of items*/
	var finame= fiArray[0];							/*Gets the name of the filter item*/
	
	$(".hiddentext").text(finame);					/*gives the hidden div the text so it can measure it*/
	var textWidth = $(".hiddentext").width();		/*strips off the text width*/
	
	$(".filterrect").css({
	"left": offset.left,
	"top": offset.top,
	"width": fiwidth,
	"height": fiheight
	});							/* sets the properties of the moving rectangle to the location/size of the clicked filter item*/

	
	$(".filterrect").show().animate({
	left: "310px",
	top: "210px",
	width: textWidth + 25,
	height: "18px",
	
	}, 600, function()
	{

	$(".filterrect").text(finame).css({
	"background-position" : "right 4px center"
	}).on("click", clickHandler);
	$(".filterimage").fadeIn("fast");
	
	});							/* moves the rectangle to the top of the page */
	
	filterLocation = textWidth + 340;
	
	filtersArray[0] = filterLocation;
	
	index++;
	
} /*end if (initial setup)*/	



else
{

$("<div></div>").attr({
	"id": index,
	"class":".filterrect"
}).css({

"border": "1px solid #bfcddb",
"position": "absolute",
"z-index": "2",
"box-sizing": "border-box",
"font-size": "10px",
"padding-left": "4px",
"background": "#f1efed url('img/x.png') no-repeat -10px -10px"
}).on("click", clickHandler).appendTo('body'); 

	var newRect = document.getElementById(index);

	$(newRect).text("").css({
	"background-position" : "-10px -10px"
	});												/*clears the previous text and resets background location to hidden*/

	var offset = $(this).offset();					/*Gets the position of the filter item*/
	var fiwidth= $(this).width(); 					/*Gets the width of the filter item*/
	var fiheight= $(this).height(); 				/*Gets the height of the filter item*/
	var fiArray= $(this).text().split(" ("); 		/*gets only the name of the group, and not the number of items*/
	var finame= fiArray[0];							/*Gets the name of the filter item*/

	
	$(".hiddentext").text(finame);					/*gives the hidden div the text so it can measure it*/
	var textWidth = $(".hiddentext").width();		/*strips off the text width*/
	
	$(newRect).css({
	"left": offset.left,
	"top": offset.top,
	"width": fiwidth,
	"height": fiheight
	});							/* sets the properties of the moving rectangle to the location/size of the clicked filter item*/
	
	$(newRect).show().animate({
	left: filtersArray[index-1],
	top: "210px",
	width: textWidth + 25,
	height: "18px",
	
	}, 600, function()
	{
	$(newRect).text(finame).css({
	"background-position" : "right 4px center"
	});
	
	});							/* moves the rectangle to the top of the page */
	
	filterLocation = filtersArray[index-1] + textWidth + 30;
	
	filtersArray[index] = filterLocation;
	
	index++;

}
	
}); /*end onClick for filters; I could probably reorg this, but bleh*/



	
	
	