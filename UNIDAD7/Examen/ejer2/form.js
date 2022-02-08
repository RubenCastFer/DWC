$(function(){


    // $("input").click(function(){
    //     $.post("ejercicio10.php",parametros);
    // });
    // Rubén Castellano Fernández
    $("#boton").click(function() {
        //valores formulario
        var valorNombre=$("#nombre").val();
        var valorApellido=$("#apellido").val();
        var valorApellido2=$("#apellido2").val();
        var valorCiudad=$("#ciudad").val();
        
        //guardo valores para mandarlos
        var parametros = {
            nombre: valorNombre,
            apellido: valorApellido,
            apellido2: valorApellido2,
            ciudad: valorCiudad
    
        };
        //mando por ajax los parametros a form.php por post
        $.ajax({
            data: parametros,
            url: 'form.php',
            type: 'post' 
        });
    });
   

});