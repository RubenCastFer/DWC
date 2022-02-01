$(function(){
    
    // $("input").click(function() {
    //     $.ajax({
    //         url: 'ejercicio10.php',
    //         type: 'post',
    //         beforeSend: function () {
    //             $("div").html("Procesando, espere por favor...");
    //         },
    //         success: function (response) {
    //             dato=JSON.parse(response);
    //             $("div").html("<p>"+dato.valor1+"</p>");
    //         }
    //     });
    // });

    $("input").click(function(){
        $.post("ejercicio10.php",
        function(data){
            dato=JSON.parse(data);
            $("div").html("<p>"+dato.valor1+"</p>");
        });
      });
  
});