/**
This function reads in the value of an input after the user clicks off of it and then changes the display of the input, depending on what values they've inputted.
 **/


function inputColor(input){
  var tableClass = $(input).closest("table").attr("class");

  if (tableClass == "first"){
    switch($(input).attr("class")){
      case "req":
        if ($(input).val()) {
          $(input).css("border", "1px solid #aaaaaa");
        }
        else {
          $(input).css("border", "2px solid rgb(218, 41, 28)");
        }
        break;
      case "eo":
        if ($(input).val()) { // turns .eo inputs green if one has value
          $(".first").find(".eo").each(function(){
            $(this).css("border", "2px solid rgb(76, 140, 43)");
          });
        }
      else if ($(".first").find(".eo").val()) {
          $(input).css("border", "2px solid rgb(76, 140, 43)");
        }
      else {
        $(".first").find(".eo").each(function(){
          $(this).css("border", "2px solid rgb(238, 220, 0)");
        });
      }
        break;
      default:
        break;
      }
    }

  if (tableClass == "border"){
    if ($(input).val()) {
      $(".border").css({
        "border-left": "3px solid rgb(76, 140, 43)",
        "background-color": "white"
      });
      }
      else if ($(".border").find("input").val())
        {
        }
      else {
        $(".border").css({
          "border-left": "2px solid rgb(218, 41, 28)",
          "background-color": "rgba(218, 41, 28, .15)"
        });
      }
    } //end border

  if (tableClass =="third"){
    switch($(input).attr("class")){
      case "req2":
        if ($(input).val()) {
          $(input).css("background-color", "white");
        }
        else {
          $(input).css("background-color", "rgba(218, 41, 28, .15)");
        }
        break;
      case "eo2":
        if ($(input).val()) { // turns .eo inputs green if one has value
          $(".third").find(".eo2").each(function(){
            $(this).css("background-color", "rgba(76, 140, 43, .3)");
          });
        }
      else if ($(".third").find(".eo2").val()) {
          $(".third").find(".eo2").each(function(){
            $(input).css("background-color", "rgba(76, 140, 43, .3)");
          });
        }
      else {
        $(".third").find(".eo2").each(function(){
          $(this).css("background-color", "rgba(238, 220, 0, .4)");
        });
      }
        break;
      default:
        break;
      }
  }


  } //end inputColor


$("input").focusout(function() { //Should probably be reimplemented as an "on change"
inputColor(this);
});
