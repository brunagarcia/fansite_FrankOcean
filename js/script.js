$(function(){
 
$("#submitButton").click(clickFunction);

function clickFunction() {
  var firstName = $("#firstName").val();
  alert("Thanks for subscribing " + firstName + "!");
};
})


