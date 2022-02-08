// Rubén Castellano Fernández
$(function () {

    //pedir datos al php y montar el dom con ajax
    $.ajax({
        url: 'viajes.php',
        type: 'post',
        success: function (result) {
            var json = JSON.parse(result)

            //crear el DOM
            var div1 = $("#contenido");
            var div2 = $("<div>", { "id": "todos-los-viajes" })
            div1.append(div2);

            var h11 = $("<h1>").text("Viajes Guía Incluido");
            div2.append(h11);

            var ul1 = $("<ul>");
            div2.append(ul1);

            //bucle para los distintos destinos
            for (let i = 0; i < json.length; i++) {
                var li1 = $("<li>", { "class": "viaje " + json[i].clase_pais })
                ul1.append(li1);

                var h21 = $("<h2>").text(json[i].ciudad_h2);
                li1.append(h21);

                var span1 = $("<span>", { "class": "detalle" }).text(json[i].detalle_precio_total + " por " + json[i].detalle_num_noches + " noches");
                li1.append(span1);

                var span2 = $("<span>", { "class": "por-noche" });
                var span3 = $("<span>", { "class": "precio" }).text(json[i].precio_noche);
                span2.append(span3);
                span3.after("/noche");
                li1.append(span2);

                var button1 = $("<button>", { "class": "reserva" }).text("Resérvalo ya!");
                li1.append(button1);

                var ul2 = $("<ul>", { "class": "fotos" });
                li1.append(ul2);

                var li2 = $("<li>");
                ul2.append(li2);

                var img1 = $("<img>", { "src": json[i].ruta_imagen });
                li2.append(img1);

                var span4 = $("<span>").text(json[i].pie_imagen);
                li2.append(span4);





            }

            //añadir y quitar destacado, al pasar por la imagen, en span con class por-noche
            $("img").hover(function () {
                $(this).parent().parent().parent().find(".por-noche").addClass("destacado");
            },
                function () {
                    $(this).parent().parent().parent().find(".por-noche").removeClass("destacado");
                });

            //añadir y quitar destacado, al pasar por span de imagen, en span con class por-noche
            $("img").next().hover(function () {
                $(this).parent().parent().parent().find(".por-noche").addClass("destacado");
            },
                function () {
                    $(this).parent().parent().parent().find(".por-noche").removeClass("destacado");
                });

            //oculta y muestra el pie de la foto
            $("img").click(function () {
                $(this).next().slideToggle("slow");
            });

            //cambiar precio con descuento a los 5s
            $('img').hover(function () {
                //cuenta el intervalo
                calTiempo = setTimeout(() => {
                    $(this).parent().parent().parent().find(".detalle").text("DESCUENTO DEL 10% !!");
                    //calcula el descuento
                    var precio=$(this).parent().parent().parent().find(".precio").text();
                    var precioDes= precio - precio*0.1;
                    $(this).parent().parent().parent().find(".precio").text(precioDes);
                }, 5000);

            },
                function () {
                    //si sale termina el setTime
                    clearTimeout(calTiempo)
                });

        }
    });
});