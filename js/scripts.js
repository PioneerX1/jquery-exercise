$(document).ready(function() {
  var messages = ["h1", "p", "img"];
  messages.forEach(function(message) {
    $(message).click(function(){
      alert("This is a " + message);
    });  
  });

  /*
  $("h1").click(function() {
    alert("This is a header.");
  });

  $("p").click(function() {
    alert("This is a paragraph.");
  });

  $("img").click(function() {
    alert("This is an image.");
  });
  */

});
