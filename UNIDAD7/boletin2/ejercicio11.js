$(function(){


    // $("input").click(function(){
    //     $.post("ejercicio10.php",parametros);
    // });
    $("#boton").click(function() {
        // $.ajax({
        //     data: $("form").serialize(),
        //     url: 'ejercicio10.php',
        //     type: 'post' 
        // });

        $.post("ejercicio11.php", $("form").serialize());
    });
   

});