$(function(){

  $("button").click(function(){
    if ($(this).text()=="primero") {
      alert($("p").text());
    } else if ($(this).text()=="segundo") {
      alert($("div").html())
    } else if ($(this).text()=="tercero") {
      alert($("input").val())
    } else if ($(this).text()=="cuarto") {
      alert($("a").html()+$("[href]").val())
    }
  });
});
