$(document).ready(function () {
    //a  
    $("p:first").next().css("color", "red");
    //b  
    $("[href='SImod.html']").css("background-color", "red");
    //c  
    $("li").eq(2).next().css("background-color", "green");
    //d  
    $("[href='SImod.html']").parent().nextAll().css("font-size", "20px");
    //e  
    $("[href]").css("color", "grey");
    //f  
    $("a:not([href])").css("color", "blue");
    //g
    $("[href*=mod]").css("font-size", "30px");
    //h
    $("[href^=mod]").css("background-color", "black");
    //i
    $("[href$='.html']").css("background-color", "blue");
    //j
    // $("ul:eq(1)>li>ul>li:last-child").css("background-color", "blue");
    $("li").children().children(":contains('hora')").css("background-color", "blue");
    //k
    $(":empty").text("nodo vacio");
    //h
    $("li:contains('DWESE')").css("background-color", "red");
    $("li:contains('DAW')").css("background-color", "red");
    $("li:contains('EIE')").css("background-color", "red");

});