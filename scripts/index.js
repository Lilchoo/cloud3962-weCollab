function dropdown() { 
  console.log($(this).children().first())
  if (!$(this).next().hasClass("w3-show")) {
    $(this).next().addClass("w3-show");
    $(this).children().first().removeClass("fa-caret-down").addClass("fa-caret-up")
  } else {
    $(this).next().removeClass("w3-show").addClass("w3-hide");
    $(this).children().first().removeClass("fa-caret-up").addClass("fa-caret-down")
  }
}

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

function setup() {
  $(".clothing-dropdown-btn").click(dropdown)
}

$(document).ready(setup)
