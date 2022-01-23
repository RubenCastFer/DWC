window.addEventListener("load", iniciar);

function iniciar() {

	var arrayJSON = [{titular: "Noticia 1",	contenido: "Contenido de la noticia 1",descripcion: "Esta es la noticia 1"},
	{titular: "Noticia 2",contenido: "Contenido de la noticia 2",descripcion: "Esta es la noticia 2"},
	{titular: "Noticia 3",contenido: "Contenido de la noticia 3",descripcion: "Esta es la noticia 3"}];

	var cuerpo = document.getElementsByTagName("body")[0];

	for (let i = 0; i < arrayJSON.length; i++) {
		var div = document.createElement("div");
		div.setAttribute("id", "noticia" + [i+1]);

		var h1 = document.createElement("h1");
		var noticia = document.createTextNode(arrayJSON[i].titular);
		h1.appendChild(noticia);


		var mostrar = document.createElement("img");
		mostrar.setAttribute("src", "./imagenes/mostrar.png");
		mostrar.setAttribute("name", "mostrar");
		mostrar.addEventListener("click", mostrarDescripcion, false);

		var ocultar = document.createElement("img");
		ocultar.setAttribute("src", "./imagenes/ocultar.png");
		ocultar.setAttribute("name", "ocultar");
		ocultar.addEventListener("click", ocultarDescripcion, false);

		var p = document.createElement("p");
		p.setAttribute("id", "p1");
		p.setAttribute("style", "display: block");
		var contenido = document.createTextNode(arrayJSON[i].contenido);
		p.appendChild(contenido);
		p.addEventListener("contextmenu", desplegar, false);

		var h4 = document.createElement("h4");
		h4.setAttribute("style", "display: none");
		var descripcion = document.createTextNode(arrayJSON[i].descripcion);
		h4.appendChild(descripcion);

		div.appendChild(h1);
		div.appendChild(mostrar);
		div.appendChild(ocultar);
		div.appendChild(p);
		div.appendChild(h4);
		
		cuerpo.appendChild(div);

	}
		
}	
	
function mostrarDescripcion (e) {
	
	var p = e.currentTarget.nextSibling.nextSibling;

	if (p.getAttribute("style") == "display: none;") {

		p.setAttribute("style", "display: block;");

	} else {

		p.setAttribute("style", "display: block;");
	}
}


function ocultarDescripcion (e) {
	
	var p = e.currentTarget.nextSibling;

	if (p.getAttribute("style") == "display: block;") {

		p.setAttribute("style", "display: none;");

	} else {

		p.setAttribute("style", "display: none;");
	}
}

function desplegar(e) {

	e.preventDefault();

	var h4 = e.currentTarget.parentNode.lastChild;

	if (h4.getAttribute("style") == "display: none;") {

		h4.setAttribute("style", "display: block;");

	} else {

		h4.setAttribute("style", "display: none;");
	}

}