$(document).ready(function(){
    $("p:first").next().css("color" ,"red");
    $("[href='SImod.html']").css("background-color" ,"red");
    $("li").eq(2).next().css("background-color" ,"green");
    $("li").eq(2).nextAll().css("font-size" ,"20px");


});