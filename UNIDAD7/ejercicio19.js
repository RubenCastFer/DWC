$(function(){

  $("#1").click(function(){
    $("p").text("Texto añadido")
    $("ul").append("<li>añadido</li>")
  });
  $("#2").click(function(){
    $("body").append("<button>añadido</button>")
  });
});