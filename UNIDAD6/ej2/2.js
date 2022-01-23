window.addEventListener("load", iniciar);

function iniciar() {
	document.getElementById("enviar").addEventListener("click", validar);
}


function validar(){
	var valido = true;
	var codigo = document.getElementById("codigo").value;
	var patron = /^[A-Z]{3}-\d{1,5}$/;
	var formulario = document.getElementById("mi-form");

	if (patron.test(codigo)) {
		guardar();
		// formulario.action = "mailto:admin@admin.com";
		// formulario.method = "POST";
		formulario.submit();
	}
	else {
		document.getElementById("error").innerHTML = "Código incorrecto";
	}
}

function guardar() {
	var codigo = document.getElementById("codigo").value;
	// var cont = 1;

	if (typeof (Storage) !== 'undefined') {
		localStorage.setItem("codigo", codigo);
	}
}