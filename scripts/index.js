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

function showSideBar() {
  $("#mySidebar").css("display", "block")
  $("#myOverlay").css("display", "block")
}

function hideSideBar() {
  $("#mySidebar").css("display", "none")
  $("#myOverlay").css("display", "none")
}

function setup() {
  $(".clothing-dropdown-btn").click(dropdown)
  $("#sidebar-close, #myOverlay").click(hideSideBar)
  $("#hamburger-menu").click(showSideBar)
}

$(document).ready(setup)
