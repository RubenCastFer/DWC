$(function(){

  $("#ocultar").click(function(){
    $("div").children("button").nextAll().hide();
  });
  $("button").click(function(){
    $("div").children("button").nextAll().show();
  });
});
