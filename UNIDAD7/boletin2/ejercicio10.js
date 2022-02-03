$(function(){


    // $("input").click(function(){
    //     $.post("ejercicio10.php",parametros);
    // });
    $("#boton").click(function() {
        var valorNombre=$("#nombre").val();
        var valorApellido=$("#apellido").val();
    
        var parametros = {
            valorNombre: valorNombre,
            valorApellido: valorApellido
    
        };
        $.ajax({
            data: parametros,
            url: 'ejercicio10.php',
            type: 'post' 
        });
    });
   

});