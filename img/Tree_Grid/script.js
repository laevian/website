	var tableArray = [];
	var lastClicked;
	
$(function()
{	
	
	$("tr").each(function(i) 								//this chunk of code (.each function) recreates the table as a javascript 2d array tableArray[].
	{
		var thisRow = [];
		var dataType = $(this).data("structure");
		thisRow[0] = dataType;  							//the first item in the row is the data structure type
		
		if  (dataType == "child")
		{
		thisRow[1] = $(this).data("parent"); 
		}
		
		else if (dataType == "parent")
		{
		thisRow[1] = $(this).attr("class");
		}

		var myCounter = 2;
		
		$(this).find('td').each(function() 					//puts the data from the current row's TDs into thisRow[], starting at index 2 as 0 and 1 already contain data
		{		
			thisRow[myCounter] = $(this).text();
			myCounter++;
		});										 			//thisRow should now be [ structure type, parent name (if TL, nothing here; if parent, parent's class), col1 data, col2 data, col3 data, .. ]
		
		tableArray.push(thisRow);						//gives all of the data from the row to tableArray
	});
	
	tableArray.shift(); 								//The first "row" that this table contains is the header row, which should not be sorted.

});

$("#liqarrow").click(function()
{
                $("#c2").toggleClass("nodisplay");
				
		visible = $("#c3").attr('class');
				
				if(visible != "nodisplay")
				{
				    $("#c3").toggleClass("nodisplay");
				} 
});

$("#presarrow").click(function()
{
                $("#c3").toggleClass("nodisplay");
				
		visible = $("#c2").attr('class');
				
				if(visible != "nodisplay")
				{
				    $("#c2").toggleClass("nodisplay");
				} 
});

$(".tree").click(function()
{

var type = 	$(this).attr("src");

if (type == "icon-01.svg") // expander
{

    var parentclass = $(this).parents("tr").attr('class');
	var childclass = "." + parentclass + "child";
	$(childclass).toggleClass("nodisplay");
	$(this).attr("src", "icon-03.svg");

}

else // collapser
{

    var parentclass = $(this).parents("tr").attr('class');
	var childclass = "." + parentclass + "child";
	$(childclass).toggleClass("nodisplay");
	$(this).attr("src", "icon-01.svg");

}

});


$(".ddul li").click(function() 							    //sort in ascending order
{
	var liClass = $(this).attr("class"); 				//gets the class of the selected list item, aka the sort order
	var sortCol = $(this).parents("div").attr("id");    //gets the id of the column to be sorted
	var colNum = sortCol.substring(1); 					//removes the c from the id name and returns the number of the column to be sorted
	var sortNum = colNum++; 							//first three "columns" in the array are text, so the actual columns are represented at an index that is one greater than itself

if(liClass == "asc")
{

mySort( "asc", sortNum );


}

else //desc
{

mySort( "desc", sortNum );

}


//A very shoddy way to handle this. WELP

		visible = $("#c2").attr('class');
				
		if( visible != "nodisplay" )
		{
			$("#c2").toggleClass("nodisplay");
		} 
		
		visible2 = $("#c3").attr('class');
				
		if( visible2 != "nodisplay" )
		{
			$("#c3").toggleClass("nodisplay");
		} 

});




function sortAscend( arrayToSort, colToSort )
{

	arrayToSort.sort(function (a, b)
	{
         if (a[colToSort]==null) return 1
         if (b[colToSort]==null) return 0
        return a[colToSort] > b[colToSort];
    });

}


function sortDescend( arrayToSort, colToSort )
{

	arrayToSort.sort(function (a, b)
	{
         if (a[colToSort]==null) return 1
         if (b[colToSort]==null) return 0
		 
        return a[colToSort] < b[colToSort];
    });

}


function mySort( sortOrder, colToSort )
{

	var children = [];

	children = $.grep(tableArray, function( n, i )
	{
		return (n[0] == "child");
	});													//children[] is now an array of all of the child elements

	tableArray = $.grep(tableArray, function( n, i )
	{
		return (n[0] != "child");
	}); 												//tableArray now has all children elements spliced out

	if (sortOrder == "asc")
	{

	sortAscend( tableArray, colToSort );

		$.each(tableArray, function(i){

			if (tableArray[i][0] == "parent")
			{
				var myChildren = [];
				var parentId = tableArray[i][1];
				var spliceIn = i+1;
				myChildren = $.grep(children, function( n, i ){
					return (n[1] == parentId);
				});

					sortAscend( myChildren, colToSort );

					$.each(myChildren, function(j)
					{
						tableArray.splice(spliceIn, 0, myChildren[j]);
						spliceIn++;
					});

			}

		});

	}

	else
	{

	sortDescend( tableArray, colToSort );

		$.each(tableArray, function(i){

			if (tableArray[i][0] == "parent")
			{
				var myChildren = [];
				var parentId = tableArray[i][1];
				var spliceIn = i+1;
				myChildren = $.grep(children, function( n, i ){
					return (n[1] == parentId);
				});

					sortDescend( myChildren, colToSort );

					$.each(myChildren, function(j)
					{
						tableArray.splice(spliceIn, 0, myChildren[j]);
						spliceIn++;
					});

			}

		});
	}
	

/*tableArray now reflects the sort, gotta put it back into the DOM!!*/	

	$(tableArray).each(function(i)
	{
		//find which row matches the current index of the tableArray then append it to tbody
		//each row's data structure should now be [ structure type, parent name (if any), col1 data, col2 data, col3 data, .. ]
		
		$("tr").each(function(j)
		{
		
			if ( j == 0 )
			{
			
			
		
			} //end if j>0
			
			else
			{
			
			var myName = $(this).children(".c1").text();
			
			}
		
		if (tableArray[i][2] == myName)
		{
		$(this).appendTo("tbody");
		}
		
		}); //end of tr.each
		
		
	
		

	});
	

	
}





// Trigger action when the contexmenu is about to be shown
$("tbody tr").bind("contextmenu", function (event) {
    
    // Avoid the real one
    event.preventDefault();
    lastClicked = $(this).attr("class");
	
    // Show contextmenu
    $(".custom-menu").finish().toggle(100).
    
    // In the right position (the mouse)
    css({
        top: event.pageY-15 + "px",
        left: event.pageX + "px"
    });
});


// If the document is clicked somewhere
$(document).bind("mousedown", function (e) {
    
    // If the clicked element is not the menu
    if (!$(e.target).parents(".custom-menu").length > 0) {
        
        // Hide it
        $(".custom-menu").hide(100);
    }
});


// If the menu element is clicked
$(".custom-menu li").click(function(e){
    
    // This is the triggered action name
    /*switch($(this).attr("data-action")) {
        
        // A case for each action. Your actions here
		case "edit": alert("first"); break;
        case "addabove": alert("first"); break;
		case "addbelow": alert("second"); break;
        case "delete": alert("third"); break;
    }*/
	
	var selectType = $(this).attr("data-action");
	var lastClickedClass = "." + lastClicked.replace(' ', '.');
		
	if (selectType == "edit")
	{
	
	$(lastClickedClass).find('td').each(function(i)
	{
	var tempText = $(this).text();

	var $textNode = $(this).contents()
                    .filter(function(){
                        return this.nodeType == 3 
                               && $.trim($(this).text()).length;   
                    }).eq(0);
	
	$textNode.replaceWith("<input value='" + tempText + "' type='text' size='10' class=''></input>");

	});			
	
	// If the document is clicked somewhere
	$(document).on("mousedown", function (event) {	
	
	var target = event.target;
	
		if (!$(event.target).is(lastClickedClass) && !$(event.target).parents(lastClickedClass).is(lastClickedClass))
		{
	
		$(lastClickedClass).find('td').each(function(i, e)
		{
		var tempText = $(e).children('input').val();
		var otherText = $(e).html();
		$(e).children('input').detach();
		$(e).append(tempText);
		});
		
		}
	
	});

	} //end if editing
  
    // Hide it AFTER the action was triggered
    $(".custom-menu").hide(100);
  });


/*function edit()
{

$(this).find('td').each(function(i) 					//puts the data from the current row's TDs into thisRow[], starting at index 2 as 0 and 1 already contain data
	{		
	var tempText = $(this).text();
	alert(tempText);
	$(this).contents().filter(function(){
    return this.nodeType === 3;
	})​.remove();​
	/*$(this).text().replace("<input type=text name=fname placeholder="temptext">");*/
	/*var current = $(this).text();
	alert(current);
	});			

}*/

	
/*

Some resources..

http://stackoverflow.com/questions/2440700/reordering-arrays
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
http://stackoverflow.com/questions/7273668/how-to-split-a-long-array-into-smaller-arrays-with-javascript
http://stackoverflow.com/questions/586182/insert-item-into-array-at-a-specific-index
http://stackoverflow.com/questions/20008975/javascript-sort-method-handling-null-values
http://stackoverflow.com/questions/6490343/sorting-2-dimensional-javascript-array

*/
	