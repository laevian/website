// function myFunction(imgs) {
//   // Get the expanded image
//   var expandImg = document.getElementById("expandedImg");
//   // Get the image text
//   var imgText = document.getElementById("imgtext");
//   // Use the same src in the expanded image as the image being clicked on from the grid
//   expandImg.src = imgs.src;
//   // Use the value of the alt attribute of the clickable image as text inside the expanded image
//   imgText.innerHTML = imgs.alt;
//   // Show the container element (hidden with CSS)
//   expandImg.parentElement.style.display = "block";
// }

function myFunction(imgs) {

  // Get the expanded image
  var expandImg = $(imgs).parents("section").find(".expandedImg");
  // Get the image text
  var imgText = $(imgs).parents("section").find(".imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  $(expandImg).attr("src", imgs.src);
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  $(imgText).html(imgs.alt);
  // Show the container element (hidden with CSS)
}
