$(document).ready(function () {
    //a
    $("body").children("p").addClass("borde");
    //b
    $(":contains('Segundo')").children().children("li").addClass("verde");
    //c
    $("body").children("p").removeClass("borde");
    //d
    $("p").click(function(){
        $(this).toggleClass("borde");
    })
    //e
    $("p:contains('Primero')").text("Modulos de primero");
    //f
    $("p:contains('Segundo')").text("Modulos de segundo");
    //g
    $(":empty").remove();
    //h
    $("p:contains('Modulos de primero')").next("ul").append("<li>Fol</li>");
    //i
    $("p:contains('Modulos de primero')").next("ul").children("li:first").before("<li>Programación</li>");
    //j
    $("p:contains('Modulos de primero')").next("ul").children(":contains('Base de Datos')").after("<li>Sistemas informáticos</li>");
    //k
    $("ul").eq(1).children().children().parent().click(function () {
        var horas = $(this).children().first().attr("data-hours");
        var nombre = $(this).children().first().children().first().text();

        var li = document.createElement("li");
        li.appendChild(document.createTextNode(horas + ", " + nombre));
        $(this).children().first().append(li);
    });
    //l
    //$("p:contains('Modulos de segundo')").next("ul").empty();
    //m
    //$("p:contains('Modulos de primero')").next("ul").remove();
});