$(function(){

    $("#button").click(function() {
        var valorNombre=$("#modulo").val();
        
    
        var parametros = {
            modulo: valorNombre,
    
        };
        $.ajax({
            data: parametros,
            url: 'pizarra.php',
            type: 'post',
            beforeSend: function () {
                $("#resultado").html("Procesando, espere por favor...");
            },
            success: function (response) {
                var json=JSON.parse(response);
                console.log(json);
                var ul = $("<ul>")
                $("div").children().remove();
                $("div").append(ul)
                ul.append($("<li></li>").text(json.modulo1));
                ul.append($("<li></li>").text(json.modulo2));
                ul.append($("<li></li>").text(json.modulo3));
                
            }

        });
    });
  
});
