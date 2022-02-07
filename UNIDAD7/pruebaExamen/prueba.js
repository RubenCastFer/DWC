$(document).ready(function(){	
	
	$("#buscar").click( function() {
		var anuncio = $("#anuncio").val();
		$.ajax({
			url: 'prueba.php',
			type: 'POST',
			data: {anuncio:anuncio},
			success: function(respuesta){
				var r = JSON.parse(respuesta);
					for (let i = 0; i < r.length; i++) {
						var div1 = $("<div>");
						div1.addClass('x1');

						var div2 = $("<div class = 'x2'>");
						//div2.addClass('x2');

						div1.append(div2);

						var oferta = $("<div>");
						oferta.addClass('x3');
						oferta.text("OFERTA");

						var titulo = $("<div>");
						titulo.addClass('x4');
						titulo.text("Accesorios para motos " + "(" + r[i].provincia + ")");

						var referencia = $("<div>");
						referencia.addClass('x5');
						referencia.text(r[i].id);

						var horas = $("<div>");
						horas.addClass('x6');
						horas.text(r[i].antiguedad);

						div2.append(oferta);
						div2.append(titulo);
						div2.append(referencia);
						div2.append(horas);

						var div7 = $("<div>");
						div7.addClass('x7');

						div1.append(div7);

						var enlace = $("<a>");
						enlace.attr("href", r[i].href);
						enlace.attr("target", "_blank")
						enlace.addClass('cti')
						enlace.text(r[i].titulo)

						var br1 = $("<br>");

						var textoAnuncio = $("<div>");
						textoAnuncio.addClass('tx');
						textoAnuncio.text(r[i].txt);

						var br2 = $("<br>");

						var div11 = $("<div>");
						div11.addClass('x11')

						div7.append(enlace);
						div7.append(br1);
						div7.append(textoAnuncio);
						div7.append(br2);
						div7.append(div11);

						var precioOferta = $("<div>");
						precioOferta.addClass('pr');
						precioOferta.text(r[i].precio + "€");

						var cajaVendedor = $("<div>");
						cajaVendedor.addClass('vembox');

						div11.append(precioOferta);
						div11.append(cajaVendedor);

						var a = $("<a>");
						a.attr("href", "javascript:cpr(1)");

						var tipo = $("<div>");
						tipo.addClass('vem pro');
						tipo.text(r[i].tipo_vendedor);

						cajaVendedor.append(a);

						a.append(tipo);

						var div8 = $("<div>");
						div8.attr("id", r[i].id);
						div8.addClass('x8');
						div1.append(div8);

						var imagen = $("<img>");
						imagen.attr("src", r[i].imagenes.url_primera);
						imagen.attr("height","150px");
						imagen.attr("width","150px");

						var br3 = $("<br>");
						var div12 = $("<div>");
						div12.addClass('x12');
						div12.text(r[i].imagenes.num_fotos + " FOTOS");
						div8.append(imagen);
						div8.append(br3);
						div8.append(div12);

						$("body").append(div1);
					}
					destacado();
					mostrarOcultar()
			}
		});
	});
	function destacado() {
		$("img").click(function() {
			$(this).parent().prev().children("div.x11").children('div.pr').toggleClass('destacada');
		});
	}
	function mostrarOcultar() {
		$("div.x3").dblclick(function() {
			$(this).siblings().toggle();
			$(this).parent().siblings().toggle();
		});
	}

});