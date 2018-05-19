$(document).ready(function(){
  $('.carousel').carousel({
  	fullWidth: true,
    indicators: true
  });
});
$(document).keydown(function(e) {
  switch(e.which) {
    case 74: // left
      window.location.replace("/a-frame/jeu.html");
      break;
    default: return; // exit this handler for other keys
  }
  e.preventDefault(); // prevent the default action (scroll / move caret)
});