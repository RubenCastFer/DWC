$(function(){

  $("button").click(function(){
    $("div").animate({left: '100px'}, function(){
      if ($("div").text()=="HELLO") {
        $("div").animate({fontSize: "40px"});
      }
    });
  });
});
