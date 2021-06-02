/**
This function reads in the value of an input after the user clicks off of it and then changes the display of the input, depending on what values they've inputted.
 **/
$(".inputD").focusin(function(){

    $(".inputE").css("border", "2px solid rgb(238, 220, 0)");
    $(".inputF").css("border", "2px solid rgb(238, 220, 0)");

});

$(".inputD").focusout(function(){

  $(".inputE").css("border", "border: 1px solid #aaaaaa");
  $(".inputF").css("border", "border: 1px solid #aaaaaa");

});

$(".inputE").focusin(function(){

    $(".inputD").css("border", "2px solid rgb(238, 220, 0)");
    $(".inputF").css("border", "2px solid rgb(238, 220, 0)");

});

$(".inputE").focusout(function(){

  $(".inputD").css("border", "border: 1px solid #aaaaaa");
  $(".inputF").css("border", "border: 1px solid #aaaaaa");

});

$(".inputF").focusin(function(){

    $(".inputE").css("border", "2px solid rgb(238, 220, 0)");
    $(".inputF").css("border", "2px solid rgb(238, 220, 0)");

});

$(".inputF").focusout(function(){

  $(".inputE").css("border", "border: 1px solid #aaaaaa");
  $(".inputF").css("border", "border: 1px solid #aaaaaa");

});

/* This function works to generate the selectbox options for the second selectbox in the "Specify Two" case. */

function secondSelect(select) {

  /** Steps:
      1. Get the value of the first selectbox
      2. If the value is not null, unlock the second selectbox
      3. Based on the selection, append options to the selectbox and enable/disable input fields
      4. If the first selectbox's value changes, switch the values in the second selectbox
      **/

  var currentVal = $(select).val();

if ($(select).attr("id") == "selectOne") {
  if(currentVal == "") {
    $("option", "#selectTwo").remove();
        $("#selectTwo").prop("disabled", "true");
        $(".inputA").prop("disabled", "true");
        $(".inputB").prop("disabled", "true");
        $(".inputC").prop("disabled", "true");
        makeRed("#selectOne");
        makeRed("#selectTwo");
  }

  else {

    $("option", "#selectTwo").remove();
    $("#selectTwo").removeProp("disabled");
    $(".inputA").prop("disabled", "true");
    $(".inputB").prop("disabled", "true");
    $(".inputC").prop("disabled", "true");

    makeGreen("#selectOne");

      if (currentVal == "A")
      {
        $("#selectTwo")
          .append("<option value='' selected></option>")
          .append("<option value='B'>B</option>")
          .append("<option value='C'>C</option>");

          makeGreen("#selectOne");
          makeGreen("#selectTwo");

        $(".inputA").removeProp("disabled");
      }
      else if (currentVal == "B")
      {
        $("#selectTwo")
          .append("<option value='' selected></option>")
          .append("<option value='A'>A</option>")
          .append("<option value='C'>C</option>");

          makeGreen("#selectOne");
          makeRed("#selectTwo");

        $(".inputB").removeProp("disabled");
      }
      else if (currentVal == "C")
      {
        $("#selectTwo")
          .append("<option value='' selected></option>")
          .append("<option value='A'>A</option>")
          .append("<option value='B'>B</option>");

          makeGreen("#selectOne");
          makeRed("#selectTwo");

        $(".inputC").removeProp("disabled");
      }

  }
} /*End selectOne*/

  else if ($(select).attr("id") == "selectTwo") {

    var firstSelected = $("#selectOne").val();

    if (currentVal == "A")
    {
      $(".inputA").removeProp("disabled");
        if (firstSelected =="B")
        {
          $(".inputC").prop("disabled", "true");
        }
        else if (firstSelected =="C")
        {
          $(".inputB").prop("disabled", "true");
        }
    }
    else if (currentVal == "B")
    {
      $(".inputB").removeProp("disabled");
        makeGreen("#selectTwo");
        if (firstSelected =="A")
        {
          $(".inputC").prop("disabled", "true");
        }
        else if (firstSelected =="C")
        {
          $(".inputA").prop("disabled", "true");
        }
    }
    else if (currentVal == "C")
    {
      makeGreen("#selectTwo");
      $(".inputC").removeProp("disabled");
        if (firstSelected =="A")
        {
          $(".inputB").prop("disabled", "true");
        }
        else if (firstSelected =="B")
        {
          $(".inputA").prop("disabled", "true");
        }
    }
    else {
      $(".inputB").prop("disabled", "true");
      $(".inputC").prop("disabled", "true");
      makeRed("selectTwo");

      if (("#selectOne").val() == "A") {
      makeGreen("#selectTwo");
      }
    }
  }

} /*End secondselect*/

function makeGreen(select) {
  if ($(select).hasClass("req")) {
    $(select).removeClass("req");
    $(select).addClass("green");
  }
}

function makeRed(select) {
  if ($(select).hasClass("green")) {
    $(select).removeClass("green");
    $(select).addClass("req");
  }
}

$("select").change(function() {
  secondSelect(this);
});
