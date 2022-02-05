$(function(){

  $("button").click(function(){
    $(this).nextAll().toggle();
    if ($(this).text()=="hide") {
      $(this).text("show");
    }else{
      $(this).text("hide");
    }
  });
});
